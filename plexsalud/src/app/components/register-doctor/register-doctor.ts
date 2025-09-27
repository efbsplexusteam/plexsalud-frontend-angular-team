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

  register(){
    this.authService.registerDoctor(this.doctor).subscribe({
      next: () => {
        alert('Médico registrado ocn éxito');
        this.router.navigate(['/login-doctor']);
      },
      error: () => alert('Error al registrar médico')
    });
  }
}
