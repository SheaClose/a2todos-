export class Init{
	load(){
		if ( !(localStorage.getItem("todos")) || localStorage.getItem("todos") == "[]") {
			console.log("no Todos Found")
			var todos = [
				{
					text: "Load todos"
				},
				{
					text: "Striket through todos"
				},
				{
					text: "Delete some todos"
				},
				{
					text: "Add Other todos"
				},
				{
					text: "Strike through new todos"
				},
				{
					text: "Delete ALL todos"
				},
				{
					text: "Re load list of todos"
				},
				{
					text: "Verify LocalStorage is working"
				}
			];

			localStorage.setItem('todos', JSON.stringify(todos))
			return;
		}
		else {
			console.log("found Todos.")
		}
	}
}
