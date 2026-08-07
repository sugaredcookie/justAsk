package com.justask.admin_service.dto.auth;

import com.justask.admin_service.entity.Role;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class UserResponseDTO {
       private Long id;
       private String name;
       private String email;
       private Role role ;
       private String phoneNo;
}
