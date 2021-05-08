package com.example.vitedemo.service.user;

import com.example.vitedemo.mappers.user.UserMapper;
import com.example.vitedemo.objects.User.User;
import com.example.vitedemo.objects.params.signUp.SignUpForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
  @Autowired
  public BCryptPasswordEncoder getPasswordEncoder;

  @Autowired
  public UserMapper userMapper;

  public User findByName(String username) throws DataAccessException {
    return userMapper.selectByName(username);
  }

  public Boolean insertNew(SignUpForm form) throws DataAccessException {
    User user = new User();
    user.setEmail(form.getEmail());
    user.setUsername(form.getUsername());
    user.setPassword(getPasswordEncoder.encode(form.getPassword()));
    user.setLocked(false);
    user.setAuthorities("user");

    int rows = userMapper.insert(user);

    return rows > 0;
  }
}
