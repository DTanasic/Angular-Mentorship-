import { BaseProperty } from './base-propery.model';

export interface Post extends BaseProperty {
  dateCreated: Date;
  numberOfLikse: number;
}
