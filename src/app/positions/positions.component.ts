import { Component, OnInit, OnDestroy } from '@angular/core';
import {Position} from '../data/position';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit, OnDestroy {
  positions : Position[];
  getPositionsSub : any;
  loadingError : boolean = false;
  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(){

  }

}
