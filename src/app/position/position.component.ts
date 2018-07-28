import { Component, OnInit, OnDestroy } from '@angular/core';
import {Position} from '../data/position';
import {PositionService} from '../data/position.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit, OnDestroy {
  paramSubscription: any;
  positionSubscription : any;
  savePositionSubscription : any;
  position : Position;
  successMessage : boolean = false;
  failMessage : boolean = false;
  constructor(private route : ActivatedRoute, private service : PositionService) { }

  ngOnInit() {
    let id;
    this.paramSubscription = this.route.params.subscribe(params =>{
      id = +params['_id'];
    });
    this.positionSubscription = this.service.getPosition(id).subscribe(position => this.position = position[0]);
  }

  onSubmit(){
    this.savePositionSubscription = this.service.savePosition(this.position).subscribe(
      (success) => {
        this.successMessage = true;
        setTimeout( () => { 
          this.successMessage = false;
        }, 2500);
      },
      (fail) =>{
        this.failMessage = true;
        setTimeout(()=>{
          this.failMessage = false;
        }, 2500);
      }
    )
  }
  ngOnDestroy(){
    if( this.paramSubscription){
      this.paramSubscription.unsubscribe();
    }
    if(this.positionSubscription){
      this.positionSubscription.unsubscribe();
    }
  }
}
