import { Same } from "./same.modal";

export class Job implements Same {
  id: number;
  title: string;
  description: string;
  workHours:number;
  pricePerHour:number;


  constructor (id: number, title: string, description: string,workHours:number,pricePerHour:number) {
    this.id=id;
    this.title=title;
    this.description=description;
    this.workHours=workHours;
    this.pricePerHour=pricePerHour;
  }

  getSalary():number {
    const result=this.pricePerHour * this.workHours;
    return result;
  }
}


