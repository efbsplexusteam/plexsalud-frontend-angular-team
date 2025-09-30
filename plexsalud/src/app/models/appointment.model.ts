export interface Appointment {
  id?: number;
  date: string;
  time: string;
  name?: string;
  age?: number;
  gender?: string;
  email?: string;
  specialty?: string;
  state: 'Pendiente' | 'Confirmada' | 'Cancelada';
}