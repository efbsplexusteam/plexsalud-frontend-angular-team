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

  login() {
    this.authService.loginPatient(this.email, this.password).subscribe({
      next: (patient) => {
        localStorage.setItem('patientId', patient.id!.toString());
        this.router.navigate(['/dashboad-patient']);
      },
      error: () => alert('Credenciales incorrectas')
    })
  }
}
