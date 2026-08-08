package com.justask.admin_service.dto.auth;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class AuthResponseDTO {
    private String message;
    private String token;
    private UserResponseDTO userResponseDTO;
}
