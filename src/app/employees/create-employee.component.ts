import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.model';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  datePickerConfig: Partial<BsDatepickerConfig>;

  departments: Department[] = [
    { id: 1, name: 'HelpDesk' },
    { id: 2, name: 'IT' },
    { id: 3, name: 'Payrolls' }
  ];
  constructor() {
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue', showWeekNumbers: false,
      dateInputFormat: "DD/MM/YYYY", minDate: new Date(2019, 9, 1)
    }
    );
  }

  ngOnInit() {
  }
  previewPhoto:boolean= false;
  contactPreference: 'phone';
  isActive:boolean = true;
  department = "3"

  employee:Employee=
    {
      id: null,
      name : null,
      gender:null,
      phoneNumber:null,
      contactPreference:null,
      dateOfBirth:null,
      department: null,
      isActive:null,
      photoPath:null
      
    }
  


  saveEmployee(employee: Employee) {
    // debugger;
    alert('hi');
    console.log(employee);
  }


  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }
}
