import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar';
import { TodoService } from '../services/todo.service';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  todoObj!:FormGroup;

  constructor(
    private tb:FormBuilder,
    private todoService:TodoService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.todoObj=this.tb.group({
      todoText:['',Validators.required],
    }
    )
  }

  addTodo():void{
    console.log(this.todoObj.value)
    this.todoService.addTodo(this.todoObj.value)
    .subscribe((res:any)=>{
      console.log(res);
      this.todoService.getTodos();
      this.todoObj.patchValue({todoText:''});
      this._snackBar.open(res.todoText + ' todo added', '',{duration:2000});
    })
  }
}
