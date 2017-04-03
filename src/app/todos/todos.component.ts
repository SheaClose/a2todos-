import { Component, OnInit } from '@angular/core';
import { TodoService } from "../todo.service"

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
	todos;
	text;
	style1;
	oldText = "";
	appState = 'default';

  constructor(private _todoService : TodoService) { }

  ngOnInit() {
		this.todos = this._todoService.getTodos();

  }

	addTodo(){
		let textObj = {text : this.text}
		this.todos = this._todoService.addTodo(textObj)
		// this.todos.push(textObj)
		this.text = "";
	}
	crossThrough(i){
		let span = document.getElementById(`${i}`)
		if (span.style.textDecoration === "line-through"){
			span.style.textDecoration = "none";
		}
		else {
			span.style.textDecoration = "line-through";
		}
	}
	removeToDo(i){
		this.todos = this._todoService.removeToDo(i)
		// this._todoService.getTodos();
	}
	editTodo(todo){
		this.appState = "edit";
		this.text = todo.text;
		this.oldText = todo.text;
	}
	updateTodo(txt){
		this.todos = this._todoService.updateTodo({newText: txt, oldText: this.oldText})
		this.appState = "default";
		this.text = "";
	}

}
