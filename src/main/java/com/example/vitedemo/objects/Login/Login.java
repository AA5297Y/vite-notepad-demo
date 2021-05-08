package com.example.vitedemo.objects.Login;

import java.io.Serializable;

public class Login implements Serializable {
  private Boolean status;
  private String message;

  public Boolean getStatus() {
    return status;
  }

  public void setStatus(Boolean status) {
    this.status = status;
  }

  public String getMessage() {
    return message;
  }

  public void setMessage(String message) {
    this.message = message;
  }
}
