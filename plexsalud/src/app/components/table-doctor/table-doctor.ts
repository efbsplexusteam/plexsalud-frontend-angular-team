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
    { id: 1, date: '25/09/2025', time: '12:12', namepatient: 'Pablo', age: 33, gender: 'Masculino', email: 'luisito@gmail.com', state: 'Pendiente' },
    { id: 2, date: '28/09/2025', time: '15:42', namepatient: 'Marcos', age: 27, gender: 'Masculino', email: 'marcos@gmail.com', state: 'Confirmada' },
    { id: 3, date: '30/09/2025', time: '10:02', namepatient: 'Ainara', age: 26, gender: 'Femenino', email: 'ainara@gmail.com', state: 'Cancelada' }
  ];
 
  updateState(index: number, newState: 'Confirmada' | 'Cancelada') {
    this.appointments[index].state = newState;
  }
}
