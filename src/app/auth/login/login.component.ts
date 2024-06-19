import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        response => {
          console.log('login successful', response);
          // Navigate to a different page upon successful registration
          this.router.navigate(['auth/login']);
        },
        error => {
          console.error('Login error', error);
          // Handle the error, e.g., display an error message to the user
        }
      );
    }
    else {
      console.error('Form is invalid');
      // Optionally, you can mark all fields as touched to show validation errors
      this.loginForm.markAllAsTouched();
    }
  }

}
