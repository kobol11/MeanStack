import { Component, OnInit, OnDestroy } from '@angular/core';
import {Employee} from '../data/employee';
import {EmployeeService} from '../data/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit, OnDestroy {
  employees : Employee[];
  loadingError : boolean = false;
  getEmployeesSub : any;
  constructor(private service : EmployeeService) { }

  ngOnInit() {
    this.getEmployeesSub = this.service.getEmployees().subscribe(users => {
      this.employees = users;
      console.log(users);
    });
    
  }

  ngOnDestroy(){
    if(this.getEmployeesSub){
      this.getEmployeesSub.unsubscribe();
    }
  }
}
