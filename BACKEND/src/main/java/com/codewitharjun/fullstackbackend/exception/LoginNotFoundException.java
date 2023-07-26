package com.codewitharjun.fullstackbackend.exception;

public class LoginNotFoundException extends RuntimeException{
    public LoginNotFoundException(Long id){
        super("No se pudo encontrar al usuario con id."+ id);
    }
}