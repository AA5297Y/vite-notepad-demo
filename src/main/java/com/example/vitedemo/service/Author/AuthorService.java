package com.example.vitedemo.service.Author;

import com.example.vitedemo.mappers.Author.AuthorMapper;
import com.example.vitedemo.objects.Author.DetailedAuthor;
import com.example.vitedemo.objects.Author.UserRelation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

@Service
public class AuthorService {
  @Autowired
  AuthorMapper authorMapper;

  public DetailedAuthor findByUid(Long uid) throws DataAccessException {
    return authorMapper.selectByUid(uid);
  }

  public DetailedAuthor findByUidWithAnotherUser(UserRelation relation) throws DataAccessException {
    return authorMapper.selectByUidWithAnotherUser(relation);
  }
}
