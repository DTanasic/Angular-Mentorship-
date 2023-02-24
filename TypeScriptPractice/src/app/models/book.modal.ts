import { Same } from './same.modal';

export interface Book extends Same{
  dateCreated:Date,
  author:string;
  numberOfStars:number;
  category:string;
}
