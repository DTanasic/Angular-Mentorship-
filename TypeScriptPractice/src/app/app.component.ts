import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TypeScriptPractice';

  ngOnInit(): void {
  class Candidate {
    firstName:string;
    lastName:string;
    birthday:Date;

    constructor (firstName:string,lastName:string,birthday:Date){
      this.firstName=firstName;
      this.lastName=lastName;
      this.birthday=birthday;
    }

  }


    const candidate = new Candidate('Petar','Petrovic',new Date(2001 , 1,1))
    const candidate1 = new Candidate('Marko','Markovic',new Date(1980 , 21,1))
    console.log(candidate,candidate1);


    let candidateArray:Candidate[]= [candidate,candidate1];
    console.log(candidateArray);
  }

}

