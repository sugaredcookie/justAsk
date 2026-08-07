package com.justask.admin_service.service;

import com.justask.admin_service.dto.auth.AuthResponseDTO;
import com.justask.admin_service.dto.auth.LoginRequestDTO;
import com.justask.admin_service.dto.auth.RegisterRequestDTO;
import com.justask.admin_service.dto.auth.UserResponseDTO;
import com.justask.admin_service.mapper.UserMapper;
import com.justask.admin_service.entity.Role;
import com.justask.admin_service.entity.User;
import com.justask.admin_service.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthService(UserRepository userRepository, UserMapper userMapper,
                       PasswordEncoder passwordEncoder, JwtService jwtService) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    public AuthResponseDTO register(RegisterRequestDTO request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already registered.");
        }
        if (!request.getPassword().equals(request.getConfirmPassword())) {
            throw new RuntimeException("Passwords do not match.");
        }
        User user = userMapper.toEntity(request);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole(Role.USER);
        User savedUser = userRepository.save(user);

        String token = jwtService.generateToken(savedUser);
        UserResponseDTO userResponse = userMapper.toResponse(savedUser);

        return new AuthResponseDTO("Registration Successful", token, userResponse);
    }

    public AuthResponseDTO login(LoginRequestDTO loginRequestDTO) {
        User user = userRepository.findByEmail(loginRequestDTO.getEmail())
                .orElseThrow(() -> new RuntimeException("Invalid email "));

        if (!passwordEncoder.matches(loginRequestDTO.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid Password");
        }

        String token = jwtService.generateToken(user);
        UserResponseDTO userResponseDTO = userMapper.toResponse(user);

        return new AuthResponseDTO("Login Successful", token, userResponseDTO);
    }
}
