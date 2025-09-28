import { Doctor } from "./doctor.model";
import { Patient } from "./patient.model";

export interface AuthResponse {
    token: string;
    doctor?: Doctor;
    patient?: Patient;
}