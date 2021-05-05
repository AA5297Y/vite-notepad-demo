package com.example.vitedemo.objects.AuthorDetail;

import java.io.Serializable;

public class AuthorDetail implements Serializable {
  private Long uid;
  private Boolean strictMode;
  private String keyword;

  public Long getUid() {
    return uid;
  }

  public void setUid(Long uid) {
    this.uid = uid;
  }

  public Boolean getStrictMode() {
    return strictMode;
  }

  public void setStrictMode(Boolean strictMode) {
    this.strictMode = strictMode;
  }

  public String getKeyword() {
    return keyword;
  }

  public void setKeyword(String keyword) {
    this.keyword = keyword;
  }
}
