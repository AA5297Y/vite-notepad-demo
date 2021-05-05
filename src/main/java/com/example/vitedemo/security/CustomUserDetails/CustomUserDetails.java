package com.example.vitedemo.security.CustomUserDetails;

import com.example.vitedemo.objects.User.User;
import org.springframework.security.core.CredentialsContainer;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

public class CustomUserDetails implements UserDetails, CredentialsContainer {
  private static final long serialVersionUID = 1L;
  private User user;

  public CustomUserDetails(User user) {
    this.user = user;
  }

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }

  @Override
  public void eraseCredentials() {
    this.user.setPassword("");
  }

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    return getGrantedAuthority(user);
  }

  public List<GrantedAuthority> getGrantedAuthority(User user) {
    List<GrantedAuthority> auths = new ArrayList<>();

    List<String> list = Arrays.asList(user.getAuthorities().split(","));
    list.forEach((String auth) -> {
      auths.add(new SimpleGrantedAuthority(auth));
    });
    return auths;
  }

  @Override
  public String getPassword() {
    return this.user.getPassword();
  }

  @Override
  public String getUsername() {
    return this.user.getUsername();
  }

  @Override
  public boolean isAccountNonExpired() {
    return true;
  }

  @Override
  public boolean isAccountNonLocked() {
    return !this.user.getLocked();
  }

  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }

  @Override
  public boolean isEnabled() {
    return true;
  }
}
