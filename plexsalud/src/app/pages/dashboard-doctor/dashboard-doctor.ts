import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { TableDoctor } from '../../components/table-doctor/table-doctor';

@Component({
  selector: 'app-dashboard-doctor',
  imports: [ Navbar, TableDoctor ],
  templateUrl: './dashboard-doctor.html',
  styleUrl: './dashboard-doctor.css'
})
export class DashboardDoctor {
  get dateToday(): string {
    return new Date().toLocaleDateString('es-ES');
  }
}
