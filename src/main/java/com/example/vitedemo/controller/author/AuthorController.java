package com.example.vitedemo.controller.author;

import com.example.vitedemo.objects.User.User;
import com.example.vitedemo.objects.UserWithOutPwd.UserWithOutPwd;
import com.example.vitedemo.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/author")
public class AuthorController {
  @Autowired
  UserService userService;

  @PostMapping("/getAuthor")
  public UserWithOutPwd getAuthor(Long uid) {
    return userService.findByUid(uid);
  }
}
