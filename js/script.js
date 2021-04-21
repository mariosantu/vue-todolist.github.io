var app = new Vue( {

	el: '#root',

	data: {
		userTodo: '',
		todoArrayList : [
			'Fare la spesa',
			'Fare i compiti',
			'Fare il bucato'
		],
	},
	methods : {
		// function that add usertodo in todolist
		addTodo() {
			// add usertodo only if its not empty 
			if( this.userTodo.length > 0 ) {
				this.todoArrayList.push(this.userTodo);
				this.userTodo = '';
			}	
		},

		removeItem(index) {
			this.todoArrayList.splice(index, 1);
		}



	}
})