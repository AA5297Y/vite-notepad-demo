package com.example.vitedemo.service.user;

import com.example.vitedemo.mappers.user.UserMapper;
import com.example.vitedemo.objects.User.User;
import com.example.vitedemo.objects.UserWithOutPwd.UserWithOutPwd;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
  @Autowired
  private UserMapper userMapper;

  public User findByName(String username) {
    return userMapper.selectByName(username);
  }

  public UserWithOutPwd findByUid(Long uid) {
    return userMapper.selectByUid(uid);
  }
}
