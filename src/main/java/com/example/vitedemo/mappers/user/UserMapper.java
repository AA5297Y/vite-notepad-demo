package com.example.vitedemo.mappers.user;

import com.example.vitedemo.objects.User.User;
import com.example.vitedemo.objects.UserWithOutPwd.UserWithOutPwd;
import org.apache.ibatis.annotations.*;

@Mapper
public interface UserMapper {
  @InsertProvider(
    type = UserProvider.class,
    method = "insert"
  )
  void insert(@Param("user") User user);

  @SelectProvider(
    type = UserProvider.class,
    method = "selectByName"
  )
  User selectByName(@Param("username") String username);

  @SelectProvider(
    type = UserProvider.class,
    method = "selectByUid"
  )
  UserWithOutPwd selectByUid(@Param("uid") Long uid);
}
