import { Country } from './country.interface';

export interface Login {
  email: string;
  password: string;
}
export interface Register extends Login {
  firtsName: string;
  lastName: string;
  id: number;
  contryid: Country;
}
