import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-patient',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './login-patient.html',
  styleUrl: './login-patient.css'
})
export class LoginPatient {

}
