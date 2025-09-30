import { Component, Input, Output, EventEmitter, OnInit, signal } from '@angular/core';
import { BtnCanc } from '../btn-canc/btn-canc';
import { AppointmentService } from '../../services/appointment.service';
import { DoctorService } from '../../services/doctor.service';
import { Observable } from 'rxjs';
import { Appointment } from '../../models/appointment.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-table-patient',
  imports: [ BtnCanc, DatePipe ],
  templateUrl: './table-patient.html',
  styleUrl: './table-patient.css'
})
export class TablePatient implements OnInit{
  appointments: any = signal<any>([]);
  doctors: any = signal<any>([]);

  constructor(private appointmentService: AppointmentService,private doctorService: DoctorService) {}

  ngOnInit(): void {
    this.loadAppointments();  
    // this.loadDoctors();
  }

  loadAppointments(): void {
    this.appointmentService.getAppointmentsPatient().subscribe({
      next: (data) => {
        this.appointments.set(data);
        console.log('Citas del paciente:', data);
      },
      error: (err) => {
        console.error('Error al cargar citas del paciente', err);
      }
    });
  }
 
  canceledState(id: number, status: string): void{
    if (status === 'CONFIRM' || 'CREATED') {
      this.appointmentService.deleteAppointment(id).subscribe({
        next: (update) => {
          console.log('Cita cancelada:', update);
          this.loadAppointments();
        },
        error: (err) => {
          console.error('Error al  cancelar cita:', err);
        }
      })
    }
  }


}
