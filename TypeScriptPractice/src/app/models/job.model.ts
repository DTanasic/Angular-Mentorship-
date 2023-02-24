import { BaseProperty } from './interfaces/base-propery.model';

export class Job implements BaseProperty {
  id: number;
  title: string;
  description: string;
  workHours: number;
  pricePerHour: number;

  constructor(
    id: number,
    title: string,
    description: string,
    workHours: number,
    pricePerHour: number
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.workHours = workHours;
    this.pricePerHour = pricePerHour;
  }

  getSalary(): number {
    const result = this.pricePerHour * this.workHours;
    return result;
  }
}
