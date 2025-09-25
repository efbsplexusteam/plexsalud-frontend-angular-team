import { Routes } from '@angular/router';
import { DashboardDoctor } from './pages/dashboard-doctor/dashboard-doctor';
import { DashboardPatient } from './pages/dashboard-patient/dashboard-patient';

export const routes: Routes = [
    { path: 'dashboard-patient', component: DashboardPatient },
    { path: 'dashboard-doctor', component: DashboardDoctor }
];
