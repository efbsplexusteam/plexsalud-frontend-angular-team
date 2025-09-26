import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment.model';

@Injectable({ providedIn: 'root' })
export class DoctorService {
  private apiUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  getAppointments(doctorId: number): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.apiUrl}/appointments-by-doctor/${doctorId}`);
  }
}