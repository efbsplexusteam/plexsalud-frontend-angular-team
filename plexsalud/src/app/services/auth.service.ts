import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Doctor } from '../models/doctor.model';
import { Patient } from '../models/patient.model';
import { AuthResponse } from '../models/auth-response.model';


@Injectable({ providedIn: 'root'})
export class AuthService {
    private apiUrl = 'http://localhost:8080/api/v2';

    constructor(private http: HttpClient){}

    loginDoctor(credentials: { email: string; password: string; }): Observable<AuthResponse>{
        return this.http.post<AuthResponse>(`${this.apiUrl}/doctor/login`,credentials).pipe(
            tap(response => {
                if(response && response.accessToken && response.fullName){
                    localStorage.setItem('token', response.accessToken);
                    localStorage.setItem('name', response.fullName);
                }
            })
        );
    }

    loginPatient(credentials: {email: string, password: string}): Observable<AuthResponse>{
        return this.http.post<AuthResponse>(`${this.apiUrl}/patient/login`, credentials).pipe(
            tap(response => {
                if(response && response.accessToken && response.fullName){
                    localStorage.setItem('token', response.accessToken);
                    localStorage.setItem('name', response.fullName);
                }
            })
        );
    }

    registerDoctor(doctor: Doctor): Observable<Doctor>{
        return this.http.post<Doctor>(`${this.apiUrl}/doctor/signup`, {...doctor, fullName: doctor.name});
    }

    registerPatient(patient: Patient): Observable<Patient>{
        return this.http.post<Patient>(`${this.apiUrl}/patient/signup`, {...patient, fullName: patient.name});
    }

    logout(): void {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
    }

    getToken(): string | null {
        if (typeof window !== 'undefined' && window.localStorage) {
            return localStorage.getItem('token');
        }
        return null;
    }
}