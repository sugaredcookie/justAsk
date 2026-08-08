package com.justask.admin_service.mapper;

import com.justask.admin_service.dto.auth.RegisterRequestDTO;
import com.justask.admin_service.dto.auth.UserResponseDTO;
import com.justask.admin_service.entity.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {
    public User toEntity(RegisterRequestDTO request) {

        User user = new User();

        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword());
        user.setAge(request.getAge());
        user.setGraduatingYear(request.getGraduatingYear());
        user.setHostel(request.getHostel());
        user.setPhoneNo(request.getPhoneNo());

        return user;
    }
    public UserResponseDTO toResponse(User user) {

        return new UserResponseDTO(
                user.getId(),
                user.getName(),
                user.getEmail(),
                user.getRole(),
                user.getPhoneNo()
        );
    }
}
