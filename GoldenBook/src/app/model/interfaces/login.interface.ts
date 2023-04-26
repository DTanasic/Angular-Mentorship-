export interface Login {
  email: string;
  password: string;
}
export interface Register extends Login {
  firtsName: string;
  lastName: string;
  country: string;
  role: string;
  id: number;
}
