import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from "@angular/forms";
import { response } from 'express';

@Component({
  selector: 'app-login-doctor',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './login-doctor.html',
  styleUrls: ['./login-doctor.css']
})
export class LoginDoctor {
  email: string = '';
  password: string = '';

  

  constructor(private authService: AuthService, private router: Router){}

  onLogin(): void {
    
    this.authService.loginDoctor({ email: this.email, password: this.password })
      .subscribe({
        next: (response) => {
          console.log('Login doctor correcto:', response);
          this.router.navigate(['/dashboard-doctor']);
        },
        error: (err) => {
          console.error('Error en login doctor:', err);
        }
      });
  }
}
