package com.example.vitedemo.security;

import com.example.vitedemo.objects.User.User;
import com.example.vitedemo.security.CustomUserDetails.CustomUserDetails;
import com.example.vitedemo.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class SecurityUserDetailsService implements UserDetailsService {
  @Autowired
  private UserService userService;

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    User user = userService.findByName(username);
    if (user == null) {
      throw new UsernameNotFoundException("wrong username or password");
    }
    return new CustomUserDetails(user);
  }

  public List<GrantedAuthority> getGrantedAuthority(User user) {
    List<GrantedAuthority> auths = new ArrayList<>();

    List<String> list = Arrays.asList(user.getAuthorities().split(","));
    list.forEach((String auth) -> {
      auths.add(new SimpleGrantedAuthority(auth));
    });
    return auths;
  }
}
