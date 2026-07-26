package com.justask.admin_service.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {

    @GetMapping("/health")
    public ResponseEntity<String> healthCheck() {
        // Returns an HTTP 200 OK with a simple text body
        return ResponseEntity.ok("Admin Service is UP and running.");
    }
}
