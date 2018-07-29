import { Component, OnInit, OnDestroy } from '@angular/core';
import {EmployeeRaw} from '../data/employeeRaw';
import {Position} from '../data/position';
import {ActivatedRoute} from '@angular/router';
import {EmployeeService} from '../data/employee.service';
import {PositionService} from '../data/position.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnDestroy {
  paramSubscription : any;
  employeeSubscription : any;
  getPositionsSubscription : any;
  saveEmployeeSubscription : any;
  employee : EmployeeRaw;
  positions : Position[];
  successMessage : boolean = false;
  failMessage : boolean = false;
  constructor(private empService : EmployeeService, private positionService : PositionService, private route : ActivatedRoute) { }

  ngOnInit() {
    let id;
    this.paramSubscription =  this.route.params.subscribe(params =>{id = params['_id']});
    this.employeeSubscription = this.empService.getEmployee(id).subscribe(user => this.employee = user[0]);
    this.getPositionsSubscription = this.positionService.getPositions().subscribe(positions => this.positions = positions);
  }

  onSubmit(f : NgForm) : void{
    this.saveEmployeeSubscription = this.empService.saveEmployee(this.employee).subscribe((success) =>{
      this.successMessage = true;
      setTimeout(() => {
        this.successMessage = false;
      }, 2500);
    }, (fail) =>{ 
      this.failMessage = true;
      setTimeout(()=>{
        this.failMessage = false;
      }, 2500); 
      
    })
  }

  ngOnDestroy(){
    if(this.saveEmployeeSubscription){
      this.saveEmployeeSubscription.unsubscribe();
    }
    if(this.paramSubscription){
      this.paramSubscription.unsubscribe();
    }
    if(this.employeeSubscription){
      this.employeeSubscription.unsubscribe();
    }
  if(this.getPositionsSubscription){
    this.getPositionsSubscription.unsubscribe();
  }
  }
}
