import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ToDo } from '../../models/ToDo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

    toDos: ToDo[];

  constructor(private toDoService: TodoService) { }

  ngOnInit() {
      this.toDoService.getToDos().subscribe(todos => {
          this.toDos = todos;
      });
  }

}
