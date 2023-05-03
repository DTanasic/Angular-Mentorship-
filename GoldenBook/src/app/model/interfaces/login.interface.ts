import { Roles } from '../enum/roles.emum';

export interface Login {
  email: string;
  password: string;
}
export interface Register extends Login {
  firstName: string;
  lastName: string;
  contryId: number;
  role: string;
  createdAt: string;
}
