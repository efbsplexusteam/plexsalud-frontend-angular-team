import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BtnCanc } from '../btn-canc/btn-canc';
import { Appointment } from '../../models/appointment.model';

@Component({
  selector: 'app-table-patient',
  imports: [ BtnCanc ],
  templateUrl: './table-patient.html',
  styleUrl: './table-patient.css'
})
export class TablePatient {
  appointments: Appointment[] = [
    { id: 1, date: '25/09/2025', time: '12:12', namedoctor: 'Miguel', specialty: 'Cardiólogo', email: 'luisito@gmail.com', state: 'Pendiente' },
    { id: 2, date: '28/09/2025', time: '15:42', namedoctor: 'Pablo', specialty: 'Dermatólogo', email: 'marcos@gmail.com', state: 'Confirmada' },
    { id: 3, date: '30/09/2025', time: '10:02', namedoctor: 'Lucas', specialty: 'Ginecólogo', email: 'ainara@gmail.com', state: 'Cancelada' }
  ];
 
  updateState(index: number, newState: 'Confirmada' | 'Cancelada') {
    this.appointments[index].state = newState;
  }
}
