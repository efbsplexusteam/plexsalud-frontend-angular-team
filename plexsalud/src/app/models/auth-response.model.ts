import { Doctor } from "./doctor.model";
import { Patient } from "./patient.model";

export interface AuthResponse {
    accessToken: string;
    fullName?: string;
    doctor?: Doctor;
    patient?: Patient;
}