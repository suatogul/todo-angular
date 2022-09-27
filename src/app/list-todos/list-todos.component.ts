import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent implements OnInit {

  @Input() todo!:Todo;

  constructor(
    private todoService:TodoService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  deleteTodo(){
    this.todoService.deleteTodo(this.todo.id)
    .subscribe((res:any)=>{
      this.todoService.getTodos();
      this._snackBar.open(this.todo.todoText + ' is deleted', '',{duration:1000});
    });
   
  }
}
