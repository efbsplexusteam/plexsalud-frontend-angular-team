import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardDoctor } from './pages/dashboard-doctor/dashboard-doctor';
import { DashboardPatient } from './pages/dashboard-patient/dashboard-patient';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('plexsalud');
}
