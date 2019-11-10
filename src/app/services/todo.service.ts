import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToDo } from '../models/ToDo';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

    todosUrl = 'https://jsonplaceholder.typicode.com/todos';
    todosLimit = '?_limit=10';

  constructor(private http: HttpClient) { }

  getToDos(): Observable<ToDo[]> {
      return this.http.get<ToDo[]>(this.todosUrl + this.todosLimit);
  }

  toggleCompleted(toDo: ToDo): Observable<any> {
      const url = `${this.todosUrl}/${toDo.id}`;
      return this.http.put<ToDo[]>(url, toDo, httpOptions);
}
}
