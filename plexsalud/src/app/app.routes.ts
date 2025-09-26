import { Routes } from '@angular/router';
import { DashboardDoctor } from './pages/dashboard-doctor/dashboard-doctor';
import { DashboardPatient } from './pages/dashboard-patient/dashboard-patient';
import { KickOff } from './components/kick-off/kick-off';
import { LoginPatient } from './components/login-patient/login-patient';
import { LoginDoctor } from './components/login-doctor/login-doctor';
import { RegisterPatient } from './components/register-patient/register-patient';
import { RegisterDoctor } from './components/register-doctor/register-doctor';

export const routes: Routes = [
    { path: "", redirectTo: "kickoff", pathMatch: "full" },
    { path: "kickoff", component: KickOff },
    { path: "login-patient", component: LoginPatient },
    { path: "login-doctor", component: LoginDoctor },
    { path: "register-patient", component: RegisterPatient },
    { path: "register-doctor", component: RegisterDoctor },
    { path: "dashboard-patient", component: DashboardPatient },
    { path: "dashboard-doctor", component: DashboardDoctor }
];
