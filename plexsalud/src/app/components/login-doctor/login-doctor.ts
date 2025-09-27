import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-login-doctor',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './login-doctor.html',
  styleUrls: ['./login-doctor.css']
})
export class LoginDoctor {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router){}

  login() {
    this.authService.loginDoctor(this.email, this.password).subscribe({
      next: (doctor) => {
        localStorage.setItem('doctorId', doctor.id!.toString());
        this.router.navigate(['/dashboard-doctor']);
      },
      error: (err) => alert('Credenciales incorrectas')
    });
  }
}
