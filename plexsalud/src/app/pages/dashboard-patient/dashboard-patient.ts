import { Component, OnInit } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { TablePatient } from '../../components/table-patient/table-patient';
import { Modal } from '../../components/modal/modal';

declare var bootstrap: any;

@Component({
  selector: 'app-dashboard-patient',
  standalone: true,
  imports: [ Navbar, TablePatient, Modal ],
  templateUrl: './dashboard-patient.html',
  styleUrls: [ './dashboard-patient.css' ]
})
export class DashboardPatient implements OnInit {
  name: string = '';
  
  get dateToday(): string {
    return new Date().toLocaleDateString('es-ES');
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      const tempName  = localStorage.getItem('name');
      if(tempName!==null){
        this.name = tempName;
      }
    }
  }

  
  openModal() {
    const modal = new bootstrap.Modal(document.getElementById('modalNewAppointment'));
    modal.show();
  }


  
}
