package com.justask.admin_service.dto;



import java.time.LocalDateTime;




public record ConflictResponseDTO(
        Long conflictId,
        Long problemId,
        String description,
        String status,
        String posterName,
        String solverName,
        LocalDateTime createdAt,
        LocalDateTime resolvedAt
) {}