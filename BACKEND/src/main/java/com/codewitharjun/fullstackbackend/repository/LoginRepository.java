package com.codewitharjun.fullstackbackend.repository;

import com.codewitharjun.fullstackbackend.model.Login;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface LoginRepository extends JpaRepository<Login,Long> {
    Optional<Login> findByEmail(String email);
}