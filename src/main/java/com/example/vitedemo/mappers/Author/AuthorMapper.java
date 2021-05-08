package com.example.vitedemo.mappers.Author;

import com.example.vitedemo.objects.Author.DetailedAuthor;
import com.example.vitedemo.objects.Author.UserRelation;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.SelectProvider;
import org.springframework.dao.DataAccessException;

@Mapper
public interface AuthorMapper {
  @SelectProvider(
    type = AuthorProvider.class,
    method = "selectByUid"
  )
  public DetailedAuthor selectByUid(@Param("uid") Long uid);

  @SelectProvider(
    type = AuthorProvider.class,
    method = "selectByUidWithAnotherUser"
  )
  public DetailedAuthor selectByUidWithAnotherUser(@Param("userRelation") UserRelation relation);
}
