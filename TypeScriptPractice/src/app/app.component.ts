import { Component, OnInit } from '@angular/core';
import { Candidate } from './models/candidate.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TypeScriptPractice';

  ngOnInit(): void {

    const candidate = new Candidate('Petar','Petrovic',new Date(2001 , 1,1))
    const candidate1 = new Candidate('Marko','Markovic',new Date(1980 , 21,1))
    console.log(candidate,candidate1);


    let candidateArray:Candidate[]= [candidate,candidate1];
    console.log(candidateArray);
    const candidates:Candidate[]=[candidate,candidate1]
    const displayMessage=this.printCandidates(candidates)
    console.log(displayMessage);
  }
  printCandidates (candidates:Candidate[]) {
    let message:string="";
    for( let candidate of candidates) {
      message+=candidate.firstName + " "+ candidate.lastName + ":"+candidate.birthday;
    }
    return message;
  }


}


