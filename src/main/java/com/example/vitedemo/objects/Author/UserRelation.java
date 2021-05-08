package com.example.vitedemo.objects.Author;

import java.io.Serializable;

public class UserRelation implements Serializable {
  Long uid;
  Long another;

  public Long getUid() {
    return uid;
  }

  public void setUid(Long uid) {
    this.uid = uid;
  }

  public Long getAnother() {
    return another;
  }

  public void setAnother(Long another) {
    this.another = another;
  }
}
