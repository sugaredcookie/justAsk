package com.justask.admin_service.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String displayName;

    @Column(nullable = false, unique = false)
    private String email;

    @Column
    private boolean status;

    @Column
    private float solverRating;

    @Column
    private float posterRating;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;

    public User(){}

}
