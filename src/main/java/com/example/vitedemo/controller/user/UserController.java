package com.example.vitedemo.controller.user;

import com.example.vitedemo.objects.ReturnalMessage.ReturnalMessage;
import com.example.vitedemo.objects.User.User;
import com.example.vitedemo.objects.params.signUp.SignUpForm;
import com.example.vitedemo.service.user.UserService;
import com.example.vitedemo.utils.FastGetPricinpal.FastGetPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import java.security.Principal;

@RestController
@RequestMapping("/api/user")
public class UserController {

  @Autowired
  public FastGetPrincipal fastGetPrincipal;
}
