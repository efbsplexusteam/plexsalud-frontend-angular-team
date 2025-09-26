export interface Appointment {
  id: number;
  date: string;
  time: string;
  namePatient?: string;
  agePatient?: number;
  genderPatient?: string;
  emailPatient?: string;
  nameDoctor?: string;
  emailDoctor?: string;
  specialtyDoctor?: string;
  state: 'Pendiente' | 'Confirmada' | 'Cancelada';
}