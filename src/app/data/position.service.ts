import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Position} from './position'
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private http : HttpClient) { }

  getPositions() : Observable<Position[]>{
    return this.http.get<Position[]>('/positions');
  }
}
