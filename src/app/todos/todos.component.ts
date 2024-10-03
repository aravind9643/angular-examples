import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../shared/services/global.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];
  todoTitle: string = "";
  todoIndex: any = null;
  btnName: string = "Add";

  constructor(
    private globalService: GlobalService
  ) { }

  ngOnInit(): void {
    this.todos = this.getTodosFromLocalStorage();
    // this.todos.push("john");
    // this.todos.push(123);
    // this.todos.push({ name: "John" });
  }

  addTodo() {
    if (this.todoTitle == "") {
      this.globalService.error("Error", "Missing Todo");
      return;
    }
    const date = new Date();
    if (this.todoIndex == null) {
      const existedTodos = this.todos.filter(t => t.title == this.todoTitle);
      if (existedTodos.length > 0) {
        this.globalService.error("Error", "Todo is already exists");
        return;
      }
      this.todos.push({
        uid: Date.now(), //93434343633333
        title: this.todoTitle, // Entered data in input
        date: date.toLocaleString(), // current date time
        update_date: date.toLocaleString(), // current date time
        completed: false
      });
      this.globalService.success("Success", "Successfully Added");
    }
    else {
      const existedTodos = this.todos.filter((t, i) => i != this.todoIndex && t.title == this.todoTitle);
      if (existedTodos.length > 0) {
        this.globalService.error("Error", "Todo is already exists");
        return;
      }
      this.todos[this.todoIndex].title = this.todoTitle;
      this.todos[this.todoIndex].update_date = date.toLocaleString();
      this.globalService.success("Success", "Successfully Edited");
    }
    this.todoIndex = null;
    this.todoTitle = "";
    this.btnName = "Add";
    this.setTodosToLocalStorage();
  }

  editTodo(index: number) { // 0,1,2
    this.todoIndex = index; // 1
    const todo = this.todos[index];
    this.todoTitle = todo.title;
    this.btnName = "Edit";
  }

  deleteTodo(index: number) {
    const isConfirmed = confirm("Are you sure");
    if (isConfirmed) {
      this.todos.splice(index, 1);
      this.globalService.success("Success", "Successfully Deleted");
    }
    this.setTodosToLocalStorage();
  }

  setTodosToLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }


  getTodosFromLocalStorage() {
    const stringfiedTodos = localStorage.getItem("todos");
    if (!stringfiedTodos)
      return [];
    else
      return JSON.parse(stringfiedTodos);
  }

  toggleCompleted(event: any, index: number) {
    const todo = this.todos[index];
    todo.completed = event.target.checked;
    this.setTodosToLocalStorage();
  }

  childEmit(event: any) {
    this.todoTitle = event;
    this.addTodo();
  }

}

export interface Todo {
  uid: number;
  title: string;
  date: string;
  update_date: string;
  completed: boolean;
}
