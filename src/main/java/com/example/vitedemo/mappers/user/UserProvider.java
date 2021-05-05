package com.example.vitedemo.mappers.user;

import org.apache.ibatis.jdbc.SQL;

public class UserProvider {
  public String insert() {
    SQL cmd = new SQL();
    cmd.INSERT_INTO("USER")
      .VALUES(
      "username, password, strictMode, locked, authorities",
      "'${username}', '${password}', '${email}', ${locked}, '${authorities}'"
      );
    return cmd.toString();
  }

  public String selectByName() {
    SQL cmd = new SQL();
    cmd.SELECT("*").FROM("USER").WHERE("username = '${username}'");
    return cmd.toString();
  }

  public String selectByUid() {
    SQL cmd = new SQL();
    cmd.SELECT("*").FROM("USER").WHERE("uid = ${uid}");
    return cmd.toString();
  }
}
