import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment.model';
import { AuthService } from './auth.service';
import { Doctor } from '../models/doctor.model';

@Injectable({ providedIn: 'root' })
export class DoctorService {
  private apiUrl = 'http://localhost:8080/api/v2/doctor';

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  getSpecialties(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/specialties`, { headers: this.getHeaders() });
  }

  getDoctorSpecialty(specialty: string): Observable<{fullName:string,id:number}[]> {
    const params = new HttpParams().append("specialty", specialty)
    return this.http.get<{fullName:string,id:number}[]>(`${this.apiUrl}/doctors-by-specialty`, { headers: this.getHeaders(), params });
  }
}