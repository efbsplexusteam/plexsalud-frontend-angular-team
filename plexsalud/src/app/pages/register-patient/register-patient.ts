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

  register() {
    this.authSevice.registerPatient(this.patient).subscribe({
      next: () => {
        alert('Paciente registrado con éxito');
        this.router.navigate(['/login-patient']);
      },
      error: () => alert('Error al registrar paciente')
    });
  }
}
