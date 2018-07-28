import { Component, OnInit, OnDestroy } from '@angular/core';
import {Employee} from '../data/employee';
import {EmployeeService} from '../data/employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit, OnDestroy {
  employees : Employee[];
  loadingError : boolean = false;
  getEmployeesSub : any;
  constructor(private service : EmployeeService, private router : Router) { }

  ngOnInit() {
    this.getEmployeesSub = this.service.getEmployees().subscribe(users => {
      this.employees = users;
      console.log(users);
    });
    
  }

  routeEmployee(id : string){
    this.router.navigate(['/employee', id]);
  }

  ngOnDestroy(){
    if(this.getEmployeesSub){
      this.getEmployeesSub.unsubscribe();
    }
  }
}
