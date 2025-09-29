import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
 
@Component({
  selector: 'app-login-patient',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './login-patient.html',
  styleUrls: ['./login-patient.css']
})
export class LoginPatient {
  credentials = { email: '', password: '' };
 
  constructor(private authService: AuthService, private router: Router) {}
 
  onSubmit() {
    this.authService.loginPatient(this.credentials).subscribe({
      next: () => {
        localStorage.setItem('role', 'patient');
        this.router.navigate(['/dashboard-patient']);
      },
      error: (err) => console.error('Error login patient:', err)
    });
  }
}