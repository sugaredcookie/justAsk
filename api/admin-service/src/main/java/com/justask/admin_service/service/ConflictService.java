package com.justask.admin_service.service;

import com.justask.admin_service.dto.ConflictResponseDTO;
import com.justask.admin_service.repository.ConflictRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ConflictService {
    private final ConflictRepository conflictRepository;

    public ConflictService(ConflictRepository conflictRepository) {
        this.conflictRepository = conflictRepository;
    }

    public List<ConflictResponseDTO> getAllConflicts(){
        return conflictRepository.findAllConflictsWithUsers()
                .stream()
                .map(conflict -> new ConflictResponseDTO(
                        conflict.getId(),
                        conflict.getProblemId(),
                        conflict.getDescription(),
                        conflict.getStatus().name(), // Converts the Enum to a String
                        conflict.getPoster().getName(), // This won't trigger an extra DB hit now!
                        conflict.getSolver().getName(), // Neither will this!
                        conflict.getCreatedAt(),
                        conflict.getResolvedAt()
                ))
                .collect(Collectors.toList());
    }
}
