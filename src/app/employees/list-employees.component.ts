import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { GeneratedFile, parseHostBindings } from '@angular/compiler';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[] = [
{
  id : 1,
  name:'Aslam',
  gender:'male', 
  email: 'aslam@gmail.com',
  phoneNumber:904528,
  contactPreference:'phone', 
  dateOfBirth: new Date('05/11/2015'), 
  isActive: true,
  photoPath: 'assets/images/1.jpg',
  department:'IT'
},
{
  id: 2, 
  name : 'Khan',
  gender: 'male' , 
  email:'khan@gmail.com',
  phoneNumber: 5789545, 
  dateOfBirth: new Date('08/12/1985'),
  isActive: true, 
  photoPath: 'assets/images/2.jpg',
  department: 'MKT',
  contactPreference:'phone'
},
{
id: 3,
name: 'rita', 
gender: 'Femail',
email : 'rita@gmail.com',
phoneNumber:63844545,
dateOfBirth: new Date('06/12/2015'),
isActive: false,
photoPath: 'assets/images/3.jpg', 
department: 'SAL',
contactPreference: 'email'
}
]
;


  constructor() { }

  ngOnInit() {
  }

}
