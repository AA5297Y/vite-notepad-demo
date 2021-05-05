package com.example.vitedemo.objects.UserWithOutPwd;

import java.io.Serializable;

public class UserWithOutPwd implements Serializable {
  private Long uid;
  private String username;
  private String email;
  private Boolean locked;
  private String authorities;

  public Long getUid() {
    return uid;
  }

  public void setUid(Long uid) {
    this.uid = uid;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public Boolean getLocked() {
    return locked;
  }

  public void setLocked(Boolean locked) {
    this.locked = locked;
  }

  public String getAuthorities() {
    return authorities;
  }

  public void setAuthorities(String authorities) {
    this.authorities = authorities;
  }
}
