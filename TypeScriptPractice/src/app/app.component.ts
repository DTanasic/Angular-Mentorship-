import { Job } from './models/job.model';
import { Book } from './models/book.modal';
import { Post } from './models/post.model';
import { BaseEntety } from './models/baseEntity.model';
import { Product } from './models/product.model';
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

    const candidateArray:Candidate[]= [candidate,candidate1];
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

    const product:Product=new Product(1,"Laptop",1000,"Asus");
    const product1:Product=new Product(2,"Monitor",500,"LG");
    const product2:Product=new Product(3,"Mouse",100,"Genius");
    const product3:Product=new Product(4,"Keyboard",100,"msi");
    const product4:Product=new Product(5,"Case",50,"Asus");
    const products:Product[]=[product,product1,product2,product3,product4];
    const displayProduct=product.getInformation(products);
    console.log(displayProduct);

    const product5:Product=new Product(1,"Apple",2,"Green");
    const product6:Product=new Product(2,"Banana",1.5,"Yellow");
    const user2:User=new User(1,"Petar","petar@gmail.com",38163111222);
    const user3:User=new User(2,"Nikola","nikola@gmail.com",3816844455);
    const adressUros:Address=new Address("Nikole Tesle",65,"Belgrade","Serbia");
    const customer4:Customer=new Customer(1,"Uros","uros@gmail.com",38165444585,adressUros);
    const employee2:Employee=new Employee (1,"Nemanja","nemanja@gmail.com",3816788899,"QA");
    const BaseEntety:BaseEntety={
      id:1,
      sayHello(){
      }
    }
    console.log("A class can inherit another class. An Interface cannot inherit a class.")

    const user4:User=new User(1,"Jovan","jovan@gmail.com",381654488);
    const userMessage=user4.sayHello();
    const product7:Product=new Product(1,"Egg",0.25,"White Egg")
    const productMessage=product7.sayHello();

    const post:Post= {
      id:1,
      title:"Facebook",
      description:"My Facebook Profile",
      dateCreated: new Date(),
      numberOfLikse:200,
    }
    const post2:Post= {
      id:2,
      title:"Instagram",
      description:"My Instagram Profile",
      dateCreated:new Date(),
      numberOfLikse:500,
    }
    console.log(post,post2);

    const book:Book= {
      id:1,
      title:"Hunger Games",
      description:"Hunger Games trilogy",
      dateCreated:new Date(),
      author:"Collins, Suzanne",
      numberOfStars:4,
      category:"Young Adult Fiction",
    }
    const book2:Book= {
      id:2,
      title:"Da Vinci Code",
      description:"leondardo",
      dateCreated:new Date(),
      author:"Brown, Dan",
      numberOfStars:5,
      category:"Crime, Thriller & Adventure",
    }
    console.log(book,book2);

    const job:Job = new Job(1,"FrontEnd","Design",20,50);
    const result=job.getSalary();
    console.log(result);

    const job2:Job = new Job(1,"BackEnd","Design",30,50);
    const result1=job2.getSalary();
    console.log(result1);

    const calculate=this.calculate(5,10);
    const calculate2=this.calculate(15,20);
    const calculate3=this.calculate(8,15);


  }

    calculate (a:number,b:number) {
      const sumResult=a+b;
      return console.log("a:"+ a ,"b:"+ b ,"sum:" + sumResult)
    }


  printCandidates(candidates:Candidate[]):string {
    let message:string="";
    for( let candidate of candidates) {
      message+=candidate.firstName + " "+ candidate.lastName + ":"+candidate.birthday;
    }
    return message;
  }


}


