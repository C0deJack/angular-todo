import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from 'src/app/models/ToDo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

    @Input() toDo: ToDo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  // Dynamically set the classes
  setClasses() {
      const classes = {
          todo: true,
          'is-complete': this.toDo.completed
      };
      return classes;
  }

  onToggle(toDo) {
      this.toDo.completed = !this.toDo.completed;
      this.todoService.toggleCompleted(toDo).subscribe(todo => {
          console.log(todo);
      });
  }

  onDelete(toDo) {
      console.log('delete');
  }

}
