import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from './employee';
import { Observable } from '../../../node_modules/rxjs';
//import { Observable } from "rxjs";

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class EmployeeService {

  url : string = "https://guarded-falls-24522.herokuapp.com";

  constructor(private http : HttpClient) { }

  getEmployees() : Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.url}/employees`);
  }
}
