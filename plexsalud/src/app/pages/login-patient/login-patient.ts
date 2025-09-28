import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink, Router } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-patient',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './login-patient.html',
  styleUrl: './login-patient.css'
})
export class LoginPatient {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router){}

  onLogin() {

    this.authService.loginPatient({ email: this.email, password: this.password })
    .subscribe({
      next: (response) => {
        console.log('Login paciente correcto:', response);
        this.router.navigate(['/dashboard-patient']);
      },
      error: (err) => {
        console.error('Error en login paciente:', err);
      }
    })
  }
}
