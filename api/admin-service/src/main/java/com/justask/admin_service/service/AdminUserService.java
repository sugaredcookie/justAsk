package com.justask.admin_service.service;

import com.justask.admin_service.dto.auth.UpdateUserDTO;
import com.justask.admin_service.dto.auth.UserResponseDTO;
import com.justask.admin_service.mapper.UserMapper;
import com.justask.admin_service.entity.User;
import com.justask.admin_service.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminUserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    public AdminUserService(UserRepository userRepository, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }


    public List<UserResponseDTO> getAllUsers() {
        return userRepository.findAll()
                .stream()
                .map(userMapper::toResponse)
                .toList();
    }


    public UserResponseDTO getUserById(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + id));
        return userMapper.toResponse(user);
    }


    public UserResponseDTO updateUser(Long id, UpdateUserDTO dto) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + id));

        if (dto.getName() != null) user.setName(dto.getName());
        if (dto.getAge() != null) user.setAge(dto.getAge());
        if (dto.getGraduatingYear() != null) user.setGraduatingYear(dto.getGraduatingYear());
        if (dto.getHostel() != null) user.setHostel(dto.getHostel());
        if (dto.getPhoneNo() != null) user.setPhoneNo(dto.getPhoneNo());

        User saved = userRepository.save(user);
        return userMapper.toResponse(saved);
    }


    public void deleteUser(Long id) {
        if (!userRepository.existsById(id)) {
            throw new RuntimeException("User not found with id: " + id);
        }
        userRepository.deleteById(id);
    }


    public long getUserCount() {
        return userRepository.count();
    }
}
