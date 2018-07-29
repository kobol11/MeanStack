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
  filteredEmployees: Employee[];
  constructor(private service : EmployeeService, private router : Router) { }

  ngOnInit() {
    this.getEmployeesSub = this.service.getEmployees().subscribe(users => {
      this.employees = users;
      this.filteredEmployees = users;
    });
    
  }

  routeEmployee(id : string){
    this.router.navigate(['/employee', id]);
  }

  onEmployeeSearchKeyUp(event: any){
    this.filteredEmployees = this.employees.filter(employee =>{
    if(event.target.value){
      return  employee.FirstName.toUpperCase().indexOf(event.target.value.toUpperCase()) > -1 || employee.LastName.toUpperCase().indexOf(event.target.value.toUpperCase()) > -1 || employee.Position.PositionName.toUpperCase().indexOf(event.target.value.toUpperCase()) > -1;
    }else{
      return employee;
    }
    });
  }

  ngOnDestroy(){
    if(this.getEmployeesSub){
      this.getEmployeesSub.unsubscribe();
    }
  }
}
