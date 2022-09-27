import { Inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos!:Todo[];
  constructor(
    @Inject('apiUrl') private apiUrl:string,
    private http:HttpClient,
  ) { }

  getTodos(){
    this.http.get<Todo[]>(this.apiUrl + '/todo')
    .subscribe((res:Todo[])=>{
      this.todos=res;
    })
    
  }

  addTodo(todo:Todo){
    return this.http.post(this.apiUrl + '/todo', todo)
  }

  deleteTodo(todoId:number):Observable<any>{
    return this.http.delete(this.apiUrl + '/todo/' + todoId);
  }


}
