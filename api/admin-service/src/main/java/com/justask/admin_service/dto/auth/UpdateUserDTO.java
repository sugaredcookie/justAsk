package com.justask.admin_service.dto.auth;

import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UpdateUserDTO {
    @Size(min = 2, max = 100)
    private String name;

    @Min(16)
    @Max(100)
    private Integer age;

    private String graduatingYear;
    private String hostel;

    @Pattern(regexp = "^[0-9]{10}$", message = "Phone number must be 10 digits")
    private String phoneNo;
}
