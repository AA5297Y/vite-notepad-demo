package com.example.vitedemo.controller;

import com.example.vitedemo.objects.ReturnalMessage.ReturnalMessage;
import com.example.vitedemo.objects.User.User;
import com.example.vitedemo.objects.params.signUp.SignUpForm;
import com.example.vitedemo.service.user.UserService;
import com.example.vitedemo.utils.FastGetPricinpal.FastGetPrincipal;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.security.Principal;

@RestController
@RequestMapping("/api")
public class ApiController {

  @Autowired
  public UserService userService;

  @PostMapping("/signUp")
  public ReturnalMessage signUp(SignUpForm form) {
    try {
      Boolean success = userService.insertNew(form);

      if (success) {
        return new ReturnalMessage(
          true,
          "signUp Success"
        );
      } else {
        return new ReturnalMessage(
          false,
          "unknown error"
        );
      }
    } catch (DataAccessException e) {
      System.out.println("catched!");
      if (e instanceof DuplicateKeyException) {
        return new ReturnalMessage(
          false,
          "Duplicate username"
        );
      }
    }

    return new ReturnalMessage(
      false,
      "unknown error"
    );
  }

  @Autowired
  FastGetPrincipal fastGetPrincipal;

  @Bean
  ObjectMapper getObjectMapper() {
    return new ObjectMapper();
  }

  @Autowired
  ObjectMapper getObjectMapper;

  @PostMapping("/logined")
  public User logined(Principal principal, HttpServletResponse response) throws IOException {
    User user = fastGetPrincipal.getUserFromPrincipal(principal);

    if (user == null) {
      response.getWriter().write(
        getObjectMapper.writeValueAsString(
          new ReturnalMessage(
            false,
            "no user"
          )
        )
      );
      response.getWriter().close();
      return null;
    }

    user.setPassword("");
    return user;
  }
}
