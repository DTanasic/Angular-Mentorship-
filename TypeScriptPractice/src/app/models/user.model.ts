import { BaseEntety } from './baseEntity.model';

export class User implements BaseEntety {
  id:number;
  name:string;
  email:string;
  phone:number;

  constructor (id:number, name:string, email:string,phone:number){
    this.id=id;
    this.name=name;
    this.email=email;
    this.phone=phone;
  }
}
