import { Injectable } from '@angular/core';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoArray : Array<string> = [
    "Angular"
  ]
  constructor(private _snackBarservice : SnackbarService) { }

  getTodo(){
    return this.todoArray
  }
  addTodoItem(item: string){
    this.todoArray.push(item)
    this._snackBarservice.opensnackbar(`${item} is Added to Todo List Successfully`);
  }

}
