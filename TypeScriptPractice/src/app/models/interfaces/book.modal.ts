import { BaseProperty } from './base-propery.model';

export interface Book extends BaseProperty {
  dateCreated: Date;
  author: string;
  numberOfStars: number;
  category: string;
}
