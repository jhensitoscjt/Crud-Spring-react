package com.codewitharjun.fullstackbackend.controller;


import com.codewitharjun.fullstackbackend.exception.LoginNotFoundException;
import com.codewitharjun.fullstackbackend.model.Login;
import com.codewitharjun.fullstackbackend.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/* Created by Arjun Gautam */
@RestController

@CrossOrigin("http://localhost:3000")
public class LoginController {

    @Autowired
    LoginRepository loginRepository;
    @PostMapping("/sigin")
    Login newLogin(@RequestBody Login newLogin) {
        return loginRepository.save(newLogin);
    }

    @PostMapping("login")
    public String login(@RequestBody Login newLogin) {
        Optional<Login> loginOptional = loginRepository.findByEmail(newLogin.getEmail());
        if (loginOptional.isPresent()) {
            Login loginOptionalParams = loginOptional.get();
            if (loginOptionalParams.getPassword().equals(newLogin.getPassword())){
                return "contraseña correcta";
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    @GetMapping("/logins")
    List<Login> getAllLogins() {
        return loginRepository.findAll();
    }

    @GetMapping("/login/{id}")
    Login getLoginById(@PathVariable Long id) {
        return loginRepository.findById(id)
                .orElseThrow(() -> new LoginNotFoundException(id));
    }

    @PutMapping("/login/{id}")
    Login updateLogin(@RequestBody Login newLogin, @PathVariable Long id) {
        return loginRepository.findById(id)
                .map(login -> {
                    login.setEmail(newLogin.getEmail());
                    login.setPassword(newLogin.getPassword());
                    return loginRepository.save(login);
                }).orElseThrow(() -> new LoginNotFoundException(id));
    }

    @DeleteMapping("/login/{id}")
    String deleteLogin(@PathVariable Long id){
        if(!loginRepository.existsById(id)){
            throw new LoginNotFoundException(id);
        }
        loginRepository.deleteById(id);
        return  "Usuario con identificación "+id+" ha sido borrado exito.";
    }



}