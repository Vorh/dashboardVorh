import {Component, Input, OnInit} from "@angular/core";
import {Month} from "../../models/month";
import {CalCellObject} from "../../models/CalCellObject";
/**
 * Created by vorh on 6/17/17.
 */


@Component({
  selector: 'calendar',
  templateUrl: 'calendar.html',
  styleUrls: ['calendar.scss']
})

export class Calendar implements OnInit {


  @Input()
  month: Month;

  cells: CalCellObject[] = [];


  ngOnInit(): void {
    for (let i = 1; i < 38; i++){
      let object = new CalCellObject();
      object.day = i;
      this.cells[i]= object;
    }



  }


  getCell(start:number , end:number){
    let tempCell = [];
    let count = 0;
    for (;start != end; start++){
      tempCell[count] = this.cells[start];
      count++;
    }
    return tempCell;
  }




}

