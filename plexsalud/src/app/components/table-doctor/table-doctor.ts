import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BtnCanc } from '../btn-canc/btn-canc';
import { BtnConf } from '../btn-conf/btn-conf';
import { Appointment } from '../../models/appointment.model';

@Component({
  selector: 'app-table-doctor',
  imports: [ BtnCanc, BtnConf ],
  templateUrl: './table-doctor.html',
  styleUrl: './table-doctor.css'
})

export class TableDoctor {
 appointments: Appointment[] = [
    { id: 1, date: '25/09/2025', time: '12:12', namePatient: 'Pablo', agePatient: 33, genderPatient: 'Masculino', emailPatient: 'luisito@gmail.com', state: 'Pendiente' },
    { id: 2, date: '28/09/2025', time: '15:42', namePatient: 'Marcos', agePatient: 27, genderPatient: 'Masculino', emailPatient: 'marcos@gmail.com', state: 'Confirmada' },
    { id: 3, date: '30/09/2025', time: '10:02', namePatient: 'Ainara', agePatient: 26, genderPatient: 'Femenino', emailPatient: 'ainara@gmail.com', state: 'Cancelada' }
  ];
 
  updateState(index: number, newState: 'Confirmada' | 'Cancelada') {
    this.appointments[index].state = newState;
  }
}
