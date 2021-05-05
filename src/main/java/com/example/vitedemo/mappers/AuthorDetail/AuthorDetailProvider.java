package com.example.vitedemo.mappers.AuthorDetail;

import org.apache.ibatis.jdbc.SQL;

public class AuthorDetailProvider {
  public String insert() {
    SQL cmd = new SQL();
    cmd.INSERT_INTO("AUTORDETAIL")
      .VALUES(
        "uid, strictMode, keyword",
        "${uid}, ${strictMode}, ${keyword}"
      );
    return cmd.toString();
  }

  public String select() {
    SQL cmd = new SQL();
    cmd.SELECT("*").FROM("AUTHORDETAIL").WHERE("uid = ${uid}");
    return cmd.toString();
  }
}
