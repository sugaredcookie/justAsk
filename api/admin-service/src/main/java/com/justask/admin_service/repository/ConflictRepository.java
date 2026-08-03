package com.justask.admin_service.repository;

import com.justask.admin_service.entity.Conflict;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ConflictRepository extends JpaRepository<Conflict, Long> {
    @Query("SELECT c FROM Conflict c JOIN FETCH c.poster JOIN FETCH c.solver")
    List<Conflict> findAllConflictsWithUsers();
}
