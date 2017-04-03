import { Injectable } from '@angular/core';
import { Init } from "./init-todos"

@Injectable()
export class TodoService extends Init{

  constructor() {
		super();
		console.log("todo Service initialized")
		this.load();
	}
	getTodos(){
		return JSON.parse(localStorage.getItem("todos"))
	}
	addTodo(txt){
		let todos = this.getTodos();
		todos.push(txt);
		localStorage.setItem("todos", JSON.stringify(todos));
		return todos;
	}
	removeToDo(i){
		let todos = this.getTodos();
		todos.splice(i,1);
		localStorage.setItem("todos", JSON.stringify(todos));
		return todos;
	}
	updateTodo(obj){
		let todos = this.getTodos();
		todos.forEach((c,i,a)=>{
			if (c.text === obj.oldText){
				todos.splice(i,1,{text: obj.newText})
			}
		})
		localStorage.setItem("todos", JSON.stringify(todos));
		return todos;
	}
}
