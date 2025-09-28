import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Doctor } from '../../models/doctor.model';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-register-doctor',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './register-doctor.html',
  styleUrls: ['./register-doctor.css']
})
export class RegisterDoctor {
  doctor: Doctor = {
    name: '',
    specialty: '',
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router){}

  onRegister(): void {
    const doctorData = {
      name: this.doctor.name,
      email: this.doctor.email,
      password: this.doctor.password,
      specialty: this.doctor.specialty
    };

    this.authService.registerDoctor(doctorData).subscribe({
      next: (response) => {
        console.log('Doctor registrado correctamente:', response);
        this.router.navigate(['/login-doctor']);
      },
      error: (err) => {
        console.error('Error en registro doctor:', err);
      }
    });
  }
}
