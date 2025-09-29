import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';
 
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  constructor(private auth: AuthService, private router: Router) {}
 
  get isLoggedIn(): boolean {
    return !!this.auth.getToken();
  }
 
  get role(): string | null {
  if (typeof window === 'undefined') return null; // 👈 evitar error en SSR
  return localStorage.getItem('role');
}
 
  logout() {
    this.auth.logout();
    localStorage.removeItem('role');
    this.router.navigate(['/kickoff']);
  }
}