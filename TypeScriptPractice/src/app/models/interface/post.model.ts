import { BaseProperty } from './basepropery.model';

export interface Post extends BaseProperty {
  dateCreated: Date;
  numberOfLikse: number;
}
