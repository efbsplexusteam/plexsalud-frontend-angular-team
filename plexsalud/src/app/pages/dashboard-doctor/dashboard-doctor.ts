import { Component, OnInit } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { TableDoctor } from '../../components/table-doctor/table-doctor';

@Component({
  selector: 'app-dashboard-doctor',
  imports: [ Navbar, TableDoctor ],
  templateUrl: './dashboard-doctor.html',
  styleUrl: './dashboard-doctor.css'
})
export class DashboardDoctor implements OnInit {
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
}
