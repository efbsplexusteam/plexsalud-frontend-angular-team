import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-doctor',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './login-doctor.html',
  styleUrls: ['./login-doctor.css']
})
export class LoginDoctor {

}
