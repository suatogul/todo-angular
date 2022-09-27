import { Component, Input, OnInit } from '@angular/core';
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
  ) { }

  ngOnInit(): void {
  }

}
