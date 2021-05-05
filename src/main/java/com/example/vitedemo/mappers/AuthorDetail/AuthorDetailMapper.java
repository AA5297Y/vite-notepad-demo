package com.example.vitedemo.mappers.AuthorDetail;

import com.example.vitedemo.objects.AuthorDetail.AuthorDetail;
import org.apache.ibatis.annotations.InsertProvider;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.SelectProvider;

@Mapper
public interface AuthorDetailMapper {
  @InsertProvider(
    type = AuthorDetailProvider.class,
    method = "insert"
  )
  public void insert(@Param("authorDetail") AuthorDetail authorDetail);

  @SelectProvider(
    type = AuthorDetailProvider.class,
    method = "select"
  )
  public AuthorDetail select(@Param("uid") Long uid);
}
