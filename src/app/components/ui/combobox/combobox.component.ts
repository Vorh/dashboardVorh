import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.scss']
})
export class ComboBox implements OnInit {

  @Input() items: Item[];

  constructor(){

  }


  ngOnInit(): void {
  }

  show(isShow: boolean) {
    let data = document.getElementById("test");

    if (isShow) {
      data.classList.toggle("show");
    } else {
      data.classList.remove("show")
    }
  }

  select(item:Item){

  }

}

export  interface Item {
  select();
  getValue(): string;
}
