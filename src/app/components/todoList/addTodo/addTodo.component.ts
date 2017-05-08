import {Component, OnInit} from "@angular/core";


@Component({
  selector: "add-todo",
  templateUrl: './addTodo.component.html',
  styleUrls: ['./addTodo.component.scss']
})
export class AddTodo implements OnInit{
  type:number = 1;

  ngOnInit(): void {
  }

  setVisibleModal(isVisible : boolean) {
    let modal = document.getElementById('modalAddTodo');

    if (isVisible){
      modal.style.display = 'block';
    }else {
      modal.style.display = 'none';
    }
  }

  setTypeTodo(){
    alert(this.type);
  }

}
