import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from '../models/doctor.model';
import { Patient } from '../models/patient.model';

@Injectable({ providedIn: 'root'})
export class AuthService {
    private apiUrl = 'http://localhost:8080';

    constructor(private http: HttpClient){}

    loginDoctor(email: string, password: string): Observable<Doctor>{
        return this.http.post<Doctor>(`${this.apiUrl}/login-doctor`, { email, password });
    }

    loginPatient(email: string, password: string): Observable<Patient>{
        return this.http.post<Patient>(`${this.apiUrl}/login-patient`, { email, password });
    }

    registerDoctor(doctor: Doctor): Observable<Doctor>{
        return this.http.post<Doctor>(`${this.apiUrl}/register-doctor`, doctor);
    }

    registerPatient(patient: Patient): Observable<Patient>{
        return this.http.post<Patient>(`${this.apiUrl}/register-patient`, patient);
    }
}