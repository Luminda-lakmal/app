import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.auth.register(this.registerForm.value).subscribe(
        response => {
          console.log('Registration successful', response);
          // Navigate to a different page upon successful registration
          this.router.navigate(['auth/login']);
        },
        error => {
          console.error('Registration error', error);
          // Handle the error, e.g., display an error message to the user
        }
      );
    } else {
      console.error('Form is invalid');
      // Optionally, you can mark all fields as touched to show validation errors
      this.registerForm.markAllAsTouched();
    }
  }

}
