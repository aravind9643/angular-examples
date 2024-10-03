import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  @Input() todoTitle: string = "";
  @Input() buttonName: string = "";
  @Output() addTodoEmit = new EventEmitter();

  addTodo() {
    this.addTodoEmit.emit(this.todoTitle);
    this.todoTitle = "";
  }
}
