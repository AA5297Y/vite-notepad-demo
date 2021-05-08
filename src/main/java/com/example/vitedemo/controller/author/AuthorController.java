package com.example.vitedemo.controller.author;

import com.example.vitedemo.objects.Author.DetailedAuthor;
import com.example.vitedemo.objects.Author.UserRelation;
import com.example.vitedemo.objects.ReturnalMessage.ReturnalMessage;
import com.example.vitedemo.objects.User.User;
import com.example.vitedemo.service.Author.AuthorService;
import com.example.vitedemo.service.user.UserService;
import com.example.vitedemo.utils.FastGetPricinpal.FastGetPrincipal;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.catalina.mapper.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.dao.DataAccessException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.security.Principal;

@RestController
@RequestMapping("/api/author")
public class AuthorController {
  @Autowired
  public FastGetPrincipal fastGetPrincipal;
  @Autowired
  public UserService userService;
  @Autowired
  public AuthorService authorService;

  @Autowired
  ObjectMapper getObjectMapper;

  @PostMapping("/getAuthor")
  public DetailedAuthor getAuthor(Principal principal, Long uid, HttpServletResponse response) throws IOException {
    User user = fastGetPrincipal.getUserFromPrincipal(principal);

    try {
      if (user == null || uid == user.getUid()) {
        DetailedAuthor target = authorService.findByUid(uid);

        if (target == null) {
          response.getWriter().write(
            getObjectMapper.writeValueAsString(
              new ReturnalMessage(
                false,
                "author not found"
              )
            )
          );
          response.getWriter().close();
          return null;
        }

        return target;
      } else {
        UserRelation relation = new UserRelation();
        relation.setUid(uid);
        relation.setAnother(user.getUid());
        DetailedAuthor target = authorService.findByUidWithAnotherUser(relation);

        if (target == null) {
          response.getWriter().write(
            getObjectMapper.writeValueAsString(
              new ReturnalMessage(
                false,
                "author not found"
              )
            )
          );
          response.getWriter().close();
          return null;
        }

        return target;
      }
    } catch (DataAccessException e) {
      response.getWriter().write(
        getObjectMapper.writeValueAsString(
          new ReturnalMessage(
            false,
            "author not found"
          )
        )
      );
      response.getWriter().close();
      return null;
    }
  }
}
