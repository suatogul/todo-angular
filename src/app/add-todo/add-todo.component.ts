import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  todoObj!:FormGroup;

  constructor(
    private tb:FormBuilder,
  ) { }

  ngOnInit(): void {
    this.todoObj=this.tb.group({
      todoText:['',Validators.required],
    }
    )
  }

  addTodo():void{
    console.log(this.todoObj.value)
  }
}
