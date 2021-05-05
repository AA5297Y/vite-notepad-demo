package com.example.vitedemo.controller.login;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import java.security.Principal;

@RestController
@RequestMapping("/api/user")
public class LoginController {
  @PostMapping("/logined")
  public Principal logined(Principal principal) {
    return principal;
  }
}
