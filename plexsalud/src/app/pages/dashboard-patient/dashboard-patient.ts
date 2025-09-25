import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { TablePatient } from '../../components/table-patient/table-patient';

@Component({
  selector: 'app-dashboard-patient',
  standalone: true,
  imports: [ Navbar, TablePatient ],
  templateUrl: './dashboard-patient.html',
  styleUrls: [ './dashboard-patient.css' ]
})
export class DashboardPatient {
  get dateToday(): string {
    return new Date().toLocaleDateString('es-ES');
  }
}
