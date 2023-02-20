import { User } from './models/user.model';
import { Address } from './models/adress.model';
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

    const adress:Address=new Address("Pere Perica",15,"Belgrade","Serbia")
    const customer =new Customer(1,"Petar","petar@gmail.com",38144444,adress);
    const displayCustomer=customer.displayCustomer();
    console.log(displayCustomer);

    const adress1:Address=new Address("Mike Alasa",68,"Belgrade","Serbia")
    const customer1 =new Customer(2,"Marko","marko@gmail.com",3811111,adress1);
    const displayName=customer1.getName();
    console.log(displayName);
    console.log(customer1)

    const user:User=new User(1,"Pera","pera@gmail.com",38164111);
    const adressStefan:Address=new Address("Lole Ribara",198,"Belgrade","Serbia");
    const customer3:Customer=new Customer(1,"Stefan","stefan@gmail.com",3816765521,adressStefan);
    const employeeMarko:Employee=new Employee(3,"Marko","marko@gmail.com",38162555888,"FullStack");


  }

  printCandidates(candidates:Candidate[]):string {
    let message:string="";
    for( let candidate of candidates) {
      message+=candidate.firstName + " "+ candidate.lastName + ":"+candidate.birthday;
    }
    return message;
  }


}


