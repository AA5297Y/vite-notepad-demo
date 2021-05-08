package com.example.vitedemo.objects.ReturnalMessage;

import java.io.Serializable;

public class ReturnalMessage implements Serializable {
  private Boolean status;
  private String message;

  public ReturnalMessage(Boolean status, String message) {
    this.status = status;
    this.message = message;
  }

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
