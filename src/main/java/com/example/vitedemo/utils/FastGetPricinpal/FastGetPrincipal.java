package com.example.vitedemo.utils.FastGetPricinpal;

import com.example.vitedemo.objects.User.User;
import com.example.vitedemo.security.CustomUserDetails.CustomUserDetails;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

import java.security.Principal;

@Service
public class FastGetPrincipal {
  public User getUserFromPrincipal (Principal principal) {
    UsernamePasswordAuthenticationToken token = (UsernamePasswordAuthenticationToken) principal;
    if (token == null) {
      return null;
    }
    CustomUserDetails userDetails = ((CustomUserDetails) token.getPrincipal());
    User user = userDetails.getUser();

    return user;
  }
}
