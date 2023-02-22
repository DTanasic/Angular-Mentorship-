import { Same } from './same.modal';

export interface Post extends Same {
  dateCreated:Date,
  numberOfLikse:number;
}
