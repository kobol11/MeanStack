import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Position} from './position'
import { Observable } from '../../../node_modules/rxjs';
//import { Observable } from "rxjs";

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class PositionService {

  url : string = "https://guarded-falls-24522.herokuapp.com";

  constructor(private http : HttpClient) { }

  getPositions() : Observable<Position[]>{
    return this.http.get<Position[]>(`${this.url}/positions`);
  }

  savePosition(position : Position) : Observable<any>{
    return this.http.put<any>(`${this.url}/position/` + position._id, position);
  }

  getPosition(id) : Observable<Position[]>{
    return this.http.get<Position[]>(`${this.url}/position/` + id);
  }
}
