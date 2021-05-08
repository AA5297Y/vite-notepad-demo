package com.example.vitedemo.mappers.user;

import com.example.vitedemo.objects.User.User;
import org.apache.ibatis.annotations.*;
import org.springframework.dao.DataAccessException;

@Mapper
public interface UserMapper {
  @InsertProvider(
    type = UserProvider.class,
    method = "insert"
  )
  @Options(
    useGeneratedKeys = true
  )
  int insert(@Param("user") User user) throws DataAccessException;

  @SelectProvider(
    type = UserProvider.class,
    method = "selectByName"
  )
  User selectByName(@Param("username") String username) throws DataAccessException;

  @SelectProvider(
    type = UserProvider.class,
    method = "selectByUid"
  )
  User selectByUid(@Param("uid") Long uid) throws DataAccessException;
}
