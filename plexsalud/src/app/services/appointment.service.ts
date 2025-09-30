import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Appointment } from '../models/appointment.model';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AppointmentService {
  private apiUrl = 'http://localhost:8080/api/v2/appointment';

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  getAllAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.apiUrl}/}`, { headers: this.getHeaders() });
  }
  patchAppointment(id: number): Observable<Appointment[]> {
    return this.http.patch<Appointment[]>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }

  getAppointmentsDoctor(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.apiUrl}/doctor`, { headers: this.getHeaders() });
  }

  getAppointmentsPatient(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.apiUrl}/patient`, { headers: this.getHeaders() }).pipe(
      tap( data => {
          console.log(data);
      })
    )
    
    ;
  }
}
