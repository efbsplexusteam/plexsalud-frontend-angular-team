import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
 
@Component({
  selector: 'app-login-doctor',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './login-doctor.html',
  styleUrls: ['./login-doctor.css']
})
export class LoginDoctor {
  // Modelo de formulario
  credentials = { email: '', password: '' };
 
  constructor(private authService: AuthService, private router: Router) {}
 
  onSubmit() {
    this.authService.loginDoctor(this.credentials).subscribe({
      next: () => {
        localStorage.setItem('role', 'doctor');
        this.router.navigate(['/dashboard-doctor']);
      },
      error: (err) => console.error('Error login doctor:', err)
    });
  }
}