import { BaseProperty } from './base-property.model';

export interface Post extends BaseProperty {
  dateCreated: Date;
  numberOfLikse: number;
}
