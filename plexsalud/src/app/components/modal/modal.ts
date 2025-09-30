import { Component, OnInit, signal } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.css'
})
export class Modal {
  specialties: any = signal<any>([]);
  doctors: any = signal<any>([]);

  constructor(private doctorService: DoctorService, private appointmentService: AppointmentService){}

  ngOnInit():void{
    this.loadSpecialties();
  }

  loadSpecialties(): void {
    this.doctorService.getSpecialties().subscribe({
      next: (data) => {
        this.specialties.set(data);
        console.log('Especialidades:', data);
      },
      error: (err) => {
        console.error('Error al cargar especialidades', err);
      }
    })
  }

  loadDoctorSpecialty(specialty: string): void {
    this.doctorService.getDoctorSpecialty(specialty).subscribe({
      next: (data) => {
        this.doctors.set(data);
        console.log('Doctores por especialidad:', data);
      },
      error: (err) => {
        console.error('Error al cargar doctores por especialidad', err);
      }
    })
  }

  onSubmit() {
    // this.appointmentService.createAppointment(date, idDoctor).subscribe({
    //   next: (response) => {
    //     console.log('Cita creada correctament:', response);
    //   },
    //   error: (err) => {
    //     console.error('Error al crear cita:', err);
    //   }
    // });
  }
}
