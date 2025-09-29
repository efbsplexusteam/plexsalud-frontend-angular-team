import { Component, Input, Output, EventEmitter, OnInit, signal } from '@angular/core';
import { BtnCanc } from '../btn-canc/btn-canc';
import { Appointment } from '../../models/appointment.model';
import { AppointmentService } from '../../services/appointment.service';
import { DoctorService } from '../../services/doctor.service';

@Component({
  selector: 'app-table-patient',
  imports: [ BtnCanc,  ],
  templateUrl: './table-patient.html',
  styleUrl: './table-patient.css'
})
export class TablePatient implements OnInit{
  appointments: any = signal<any>( []);
  doctors: any[] = [];

  constructor(private appointmentService: AppointmentService,private doctorService: DoctorService) {}

  ngOnInit(): void {
    this.loadAppointments();
    this.loadDoctors();
  }

  loadAppointments(): void {
    this.appointmentService.getAppointmentsDoctor().subscribe({
      next: (data) => {
        this.appointments.set(data);
        console.log('Citas del paciente:', data);
      },
      error: (err) => {
        console.error('Error al cargar citas del paciente', err);
      }
    });
  }

  loadDoctors(): void {
    this.doctorService.getDoctorSpecialty().subscribe({
      next: (data) => {
        this.appointments = data;
        console.log('Doctores disponibles:', data);
      }
    })
  }
 
  updateState(index: number, newState: 'Confirmada' | 'Cancelada') {
    this.appointments[index].state = newState;
  }

}
