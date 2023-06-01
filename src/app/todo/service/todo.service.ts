import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { LoggerService } from 'src/app/services/logger.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  constructor(private logger: LoggerService) { }

  // Récupérer tous les todos
  getTodos(): Todo [] {
    return this.todos;
  }
  // Ajouter un Todo
  addTodo(todo: Todo): void {
    if (this.todos.length) {
      todo.id = this.todos[this.todos.length - 1].id + 1;
    } else {
      todo.id = 1;
    }
    this.todos.push(todo);
  }
  // Suprimer un Todo
  deleteTodo(todo: Todo): boolean {
    const index = this.todos.indexOf(todo);
    if (index != -1) {
      this.todos.splice(index, 1);
      return true;
    }
    return false;
  }
  // logger les todos
  logTodos() {
    this.logger.log(this.todos);
  }
}
