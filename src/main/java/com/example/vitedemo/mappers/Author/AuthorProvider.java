package com.example.vitedemo.mappers.Author;

import org.apache.ibatis.jdbc.SQL;

public class AuthorProvider {
  public String selectByUid() {
    SQL cmd = new SQL();

    cmd.SELECT("User.*, AuthorDetail.strictMode, AuthorDetail.keyword")
      .FROM("User left join AuthorDetail on User.uid = AuthorDetail.uid")
      .WHERE("User.uid = #{uid}");

    return cmd.toString();
  }

  public String selectByUidWithAnotherUser() {
    SQL cmd = new SQL();

    cmd.SELECT("User.*, AuthorDetail.strictMode, AuthorDetail.keyword, " +
      "exists(select * from UserRelation where uid = #{userRelation.uid} and targetUid = #{userRelation.another}) follow")
      .FROM("User left join AuthorDetail on User.uid = AuthorDetail.uid")
      .WHERE("User.uid = #{userRelation.uid}");

    return cmd.toString();
  }
}
