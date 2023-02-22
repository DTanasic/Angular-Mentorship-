import { BaseEntety } from './baseEntity.model';


export class Product implements BaseEntety {
  readonly id:number;
  readonly title:string;
  readonly price:number;
  readonly description:string;

  constructor (id:number, title:string, price:number, description:string) {
    this.id=id;
    this.title=title;
    this.price=price;
    this.description=description;
  }
  getInformation(products:Product[]):string {
    let info:string="";
    for(let product of products) {
      info+=product.title + " " +  "$"+product.price + " " + product.description + " ," + " ";
    }
    return info;
  }
  }

