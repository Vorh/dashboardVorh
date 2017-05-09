import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscriber, Subscription} from "rxjs";

@Component({
  selector: 'app-header-todo',
  templateUrl: './headerTodo.component.html',
  styleUrls: ['./headerTodo.component.scss']
})
export class HeaderTodo implements OnInit,OnDestroy {



  time:String;
  subscriptionTimer:Subscription;

  constructor() { }

  ngOnInit() {
    let timer = Observable.timer(500,1000);
    this.subscriptionTimer =timer.subscribe(t=>this.turnClock());
  }
  ngOnDestroy(): void {
    this.subscriptionTimer.unsubscribe();
  }

  turnClock(){
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    let mS = this.checkTime(m);
    let sS = this.checkTime(s);

    this.time = h + ":" + mS + ":" + sS;
  }

  checkTime(value:number):String{
    if(value < 10){
      return "0" + value;
    }
    return value.toString();
  }
}
