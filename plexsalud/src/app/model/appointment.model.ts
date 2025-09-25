export interface Appointment {
  id: number;
  date: string;
  time: string;
  namedoctor?: string;
  namepatient?: string;
  specialty?: string;
  age?: number;
  gender?: string;
  email?: string;
  state: string;
}