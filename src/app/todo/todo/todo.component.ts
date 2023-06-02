import { Component } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../service/todo.service';
import { TestHttpService } from 'src/app/services/test-http.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent {
  todos: Todo[] = [];
  todo: Todo = new Todo();
  constructor(
    private todoService: TodoService,
    private testHttp: TestHttpService
  ) {
    this.todos = this.todoService.getTodos();
    this.testHttp.getTodos().subscribe(
      (todos) => console.log(todos)
    )
  }
  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }
  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
