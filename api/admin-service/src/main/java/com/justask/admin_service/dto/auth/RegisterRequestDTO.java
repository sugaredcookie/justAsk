package com.justask.admin_service.dto.auth;

import jakarta.validation.constraints.*;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class RegisterRequestDTO {
     @NotBlank
     @Size(min = 8, max = 100)
    private String name;
    @NotBlank(message = "Email is required")
    @Email(message = "Enter a valid email address")
    @Pattern(
              regexp = "^[A-Za-z0-9._%+-]+@vitapstudent\\.ac\\.in$",
              message = "Only VIT-AP student email is allowed"
    )
    private String email;
      @NotBlank
    private String password;
      @NotBlank
    private String confirmPassword;
      @NotNull
      @Min(16)
      @Max(100)
    private int age;
      @NotBlank
    private String graduatingYear;
      @NotBlank
    private String hostel;
      @NotBlank
      @Pattern(regexp = "^[0-9]{10}$", message = "Phone number must be 10 digits")
    private String phoneNo;

}
