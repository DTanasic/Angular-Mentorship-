import { BaseEntity } from './interfaces/base-entity.model';

export class Product implements BaseEntity {
  readonly id: number;
  readonly title: string;
  readonly price: number;
  readonly description: string;

  constructor(id: number, title: string, price: number, description: string) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
  }

  sayHello(): void {
    console.log('Hello from Product class');
  }

  getTitle() {
    return this.title;
  }

  getPrice() {
    return this.price;
  }

  getDescriprtion() {
    return this.description;
  }
}
