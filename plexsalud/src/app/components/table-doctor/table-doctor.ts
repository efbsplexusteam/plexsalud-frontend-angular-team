import { Component, Input, Output, EventEmitter, OnInit, signal } from '@angular/core';
import { BtnCanc } from '../btn-canc/btn-canc';
import { BtnConf } from '../btn-conf/btn-conf';
import { AppointmentService } from '../../services/appointment.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-table-doctor',
  imports: [ BtnCanc, BtnConf, DatePipe ],
  templateUrl: './table-doctor.html',
  styleUrl: './table-doctor.css'
})

export class TableDoctor implements OnInit {
  appointments: any = signal<any>([]);

  constructor(private appointmentService: AppointmentService){}

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments(): void {
    this.appointmentService.getAppointmentsDoctor().subscribe({
      next: (data) => {
        this.appointments.set(data);
        console.log('Citas del doctor:', data);
      },
      error: (err) => {
        console.error('Error al cargar citas del doctor', err);
      }
    });
  }
 
  updateState(index: number, newState: 'Confirmada' | 'Cancelada') {
    this.appointments[index].state = newState;
  }
}
