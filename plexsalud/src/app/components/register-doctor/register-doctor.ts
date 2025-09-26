import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-doctor',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './register-doctor.html',
  styleUrls: ['./register-doctor.css']
})
export class RegisterDoctor {

}
