package com.example.vitedemo.objects.User;

import java.io.Serializable;

public class UserWithOutPassword extends User {
  @Override
  public String getPassword() {
    return "";
  }
}
