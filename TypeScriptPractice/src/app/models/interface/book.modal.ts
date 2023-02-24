import { BaseProperty } from './basepropery.model';

export interface Book extends BaseProperty {
  dateCreated: Date;
  author: string;
  numberOfStars: number;
  category: string;
}
