import { BaseEntity } from './interfaces/base-entity.model';

export class User implements BaseEntity {
  id: number;
  name: string;
  email: string;
  phone: number;

  constructor(id: number, name: string, email: string, phone: number) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  sayHello(): void {
    console.log('Hello from User Class');
  }
}
