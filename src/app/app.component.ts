import { Component } from '@angular/core';
import { Todo } from './models/todo';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  todos!:Todo[];
  // todos=[
  //   {
  //     text:"test todo"
  //   },
  //   {
  //     text:"test2 todo"
  //   },
  //   {
  //     text:"test3 todo"
  //   }
  // ]

  constructor(
    private todoService:TodoService,
  ){}

    ngOnInit():void{
      this.getTodos();
    }

  getTodos():void{
    this.todoService.getTodos()
    .subscribe((res:Todo[])=>{
      console.log("res is  " + res)
      this.todos=res;
    })
  }
}
