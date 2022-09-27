import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    ListTodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [
    {
      provide:'apiUrl',
      useValue:'http://localhost:8080/api'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
