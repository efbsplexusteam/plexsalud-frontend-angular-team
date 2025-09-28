import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from "@angular/forms";
import { Patient } from '../../models/patient.model';


@Component({
  selector: 'app-register-patient',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './register-patient.html',
  styleUrl: './register-patient.css'
})
export class RegisterPatient {
  patient: Patient = {
    name: '',
    age: 0,
    gender: '',
    email: '',
    password: ''
  };

  constructor(private authSevice: AuthService, private router: Router) {}

  onRegister(): void {
    const patientData = {
      name: this.patient.name,
      email: this.patient.email,
      password: this.patient.password,
      age: this.patient.age,
      gender: this.patient.gender
    }

    this.authSevice.registerPatient(patientData).subscribe({
      next: (response) => {
        console.log('Paciente registrado correctamente:', response);
        this.router.navigate(['/login-patient']);
      },
      error: (err) => {
        console.error('Error en registro paciente:', err);
      }
    });
  }
}
