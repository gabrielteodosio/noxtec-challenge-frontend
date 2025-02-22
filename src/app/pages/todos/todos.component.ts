import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { catchError } from 'rxjs';

import { Todo } from '../../model/todo.type';

import { TodosService } from '../../services/todos.service';

import { FilterTodosPipe } from '../../pipes/filter-todos.pipe';

import { TodoItemComponent } from "../../components/todo-item/todo-item.component";

@Component({
  selector: 'app-todos',
  imports: [TodoItemComponent, FormsModule, FilterTodosPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);

  searchTerm = signal<string>('');

  ngOnInit(): void {
    this.todoService
      .fetchTodosFromApi()
      .pipe(
        catchError((err) => {
          console.error(err);
          throw err;
        })
      )
      .subscribe((todos) => {
        this.todoItems.set(todos);
      })
  }

  updateTodoItem(todoItem: Todo) {
    this.todoItems.update((todos) => {
      return todos.map((todo) => {
        if (todo.id === todoItem.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    });
  }
}
