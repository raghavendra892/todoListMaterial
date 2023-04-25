import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  constructor(private _todoservice : TodoService) { }

  ngOnInit(): void {
  }
  onTodoAdd(todo : HTMLInputElement){
   let value = todo.value;
    this._todoservice.addTodoItem(value)
    todo.value = " ";
  }
}
