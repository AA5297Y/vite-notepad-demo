package com.example.vitedemo.objects.Author;

import com.example.vitedemo.objects.User.User;
import com.example.vitedemo.objects.User.UserWithOutPassword;

import java.io.Serializable;

public class DetailedAuthor extends UserWithOutPassword implements Serializable {
  private String strictMode;
  private String keyword;
  private Boolean follow;

  public String getStrictMode() {
    return strictMode;
  }

  public void setStrictMode(String strictMode) {
    this.strictMode = strictMode;
  }

  public String getKeyword() {
    return keyword;
  }

  public void setKeyword(String keyword) {
    this.keyword = keyword;
  }

  public Boolean getFollow() {
    return follow;
  }

  public void setFollow(Boolean follow) {
    this.follow = follow;
  }
}
