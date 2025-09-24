import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardDoctor } from './pages/dashboard-doctor/dashboard-doctor';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DashboardDoctor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('plexsalud');
}
