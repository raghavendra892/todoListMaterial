import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {
  todoArray1 : Array<string> = []
  constructor(private _todoservice : TodoService) { }

  ngOnInit(): void {
    console.log(this._todoservice.getTodo())
    this.todoArray1 = this._todoservice.getTodo()
  }

  
}
