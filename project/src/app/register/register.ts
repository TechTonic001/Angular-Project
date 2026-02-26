import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {

  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private router: Router) { }

  onRegister() {
    if (this.registerForm.valid) {
      const newUser = this.registerForm.value;


      const users = JSON.parse(localStorage.getItem('techfit_users') || '[]');


      const exists = users.find((u: any) => u.email === newUser.email);

      if (exists) {
        alert('This email is already registered!');
      } else {

        users.push(newUser);
        localStorage.setItem('techfit_users', JSON.stringify(users));

        alert('Registration Successful! Redirecting to Login...');
        this.router.navigate(['/login']);
      }
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}