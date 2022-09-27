import { Inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoService {


  constructor(
    @Inject('apiUrl') private apiUrl:string,
    private http:HttpClient,
  ) { }

  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(this.apiUrl + '/todo')
  }
}
