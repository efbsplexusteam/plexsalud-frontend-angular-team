import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Table } from '../../components/table/table';

@Component({
  selector: 'app-dashboard-doctor',
  imports: [ Navbar, Table ],
  templateUrl: './dashboard-doctor.html',
  styleUrl: './dashboard-doctor.css'
})
export class DashboardDoctor {
  get dateToday(): string {
    return new Date().toLocaleDateString('es-ES');
  }
}
