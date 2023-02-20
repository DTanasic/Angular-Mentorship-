import { Customer } from './models/customer.model';
import { Employee } from './models/employee.model';
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

    const employee=new Employee(1 ,"Marko","marko@gmail.com",38169111222,"FrontEnd");
    const employee1=new Employee(2,"Petar","petar@gmail.com",381654444,"BackEnd");
    console.log(employee,employee1);

    const customer =new Customer(1,"Petar","petar@gmail.com",38144444,"Pere Perica 21");
    const displayCustomer=customer.displayCustomer();
    console.log(displayCustomer);
  }

  printCandidates(candidates:Candidate[]):string {
    let message:string="";
    for( let candidate of candidates) {
      message+=candidate.firstName + " "+ candidate.lastName + ":"+candidate.birthday;
    }
    return message;
  }


}


