import { BaseProperty } from './base-property.model';

export interface Book extends BaseProperty {
  dateCreated: Date;
  author: string;
  numberOfStars: number;
  category: string;
}
