import { Component, OnInit, OnDestroy } from '@angular/core';
import {Position} from '../data/position';
import {PositionService} from '../data/position.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit, OnDestroy{
  positions : Position[];
  getPositionsSub : any;
  loadingError : boolean = false;
  constructor(private service : PositionService, private router: Router) { }

  ngOnInit() {
    this.getPositionsSub = this.service.getPositions().subscribe(positions => this.positions = positions);
  }

  routePosition(id : string){
    this.router.navigate(['/position', id]);
  }

  ngOnDestroy(){
    if(this.getPositionsSub){
      this.getPositionsSub.unsubscribe();
    }
  }

}
