import { Login } from './login.interface';

export interface User extends Login {
  role: 'user';
  createdAt: string;
}
