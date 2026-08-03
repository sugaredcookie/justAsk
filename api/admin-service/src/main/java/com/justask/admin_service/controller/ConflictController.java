package com.justask.admin_service.controller;

import com.justask.admin_service.dto.ConflictResponseDTO;
import com.justask.admin_service.service.ConflictService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/conflicts")
public class ConflictController {

    private final ConflictService conflictService;

    public ConflictController(ConflictService conflictService) {
        this.conflictService = conflictService;
    }

    @GetMapping
    public ResponseEntity<List<ConflictResponseDTO>> getAllConflicts() {

        List<ConflictResponseDTO> conflicts = conflictService.getAllConflicts();


        return ResponseEntity.ok(conflicts);
    }
}