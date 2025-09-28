import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Doctor } from '../models/doctor.model';
import { Patient } from '../models/patient.model';
import { AuthResponse } from '../models/auth-response.model';


@Injectable({ providedIn: 'root'})
export class AuthService {
    private apiUrl = 'http://localhost:8080';

    constructor(private http: HttpClient){}

    loginDoctor(credentials: { email: string; password: string; }): Observable<AuthResponse>{
        return this.http.post<AuthResponse>(`${this.apiUrl}/login-doctor`,credentials).pipe(
            tap(response => {
                if(response && response.token){
                    localStorage.setItem('token', response.token);
                }
            })
        );
    }

    loginPatient(credentials: {email: string, password: string}): Observable<AuthResponse>{
        return this.http.post<AuthResponse>(`${this.apiUrl}/login-patient`, credentials).pipe(
            tap(response => {
                if(response && response.token){
                    localStorage.setItem('token', response.token);
                }
            })
        );
    }

    registerDoctor(doctor: Doctor): Observable<Doctor>{
        return this.http.post<Doctor>(`${this.apiUrl}/signup-doctor`, doctor);
    }

    registerPatient(patient: Patient): Observable<Patient>{
        return this.http.post<Patient>(`${this.apiUrl}/signup-patient`, patient);
    }

    logout(): void {
        localStorage.removeItem('token');
    }

    getToken(): string | null {
        return localStorage.getItem('token');
    }
}