import { Component } from '@angular/core';
import { Todo } from './models/todo';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // todos!:Todo[];

  constructor(
    public todoService:TodoService,
  ){}

    ngOnInit():void{
      this.todoService.getTodos();
    }
}
