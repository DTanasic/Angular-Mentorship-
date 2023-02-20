import { User } from './user.model';
import { Address } from './adress.model';
export class Customer extends User {
  private address:Address;

  constructor(id:number,name:string,email:string,phone:number,adress:Address) {
    super(id,name,email,phone);
    this.address=adress;
  }

  displayCustomer():string {
    const message:string =`My name is: ${this.name}. You can contact me via email ${this.email} or phone ${this.phone}`;
    return message;
  }

  getName():string {
    return this.name;
  }

}
