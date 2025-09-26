import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-patient',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './register-patient.html',
  styleUrl: './register-patient.css'
})
export class RegisterPatient {

}
