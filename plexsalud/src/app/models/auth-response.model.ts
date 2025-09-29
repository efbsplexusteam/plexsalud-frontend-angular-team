import { Doctor } from "./doctor.model";
import { Patient } from "./patient.model";

export interface AuthResponse {
    accessToken: string;
    doctor?: Doctor;
    patient?: Patient;
}