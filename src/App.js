import { useState } from 'react';
import Header from './components/Header';
import List from './components/List';
import AddTodo from './components/AddTodo';

// intializes our app
function App() {
	// use array destructuring and set equal to the useState method which has another destructured array containing our todo items and their ids as objects

	//first element (todos) is the initial state and the second one (setTodos) is a function that is used for updating the state.

	const [todos, setTodos] = useState([
		{
			// we set these ids to avoid errors
			id: 1,
			item: 'Drink Water',
		},
		{
			id: 2,
			item: 'Make Healthy Dinner',
		},
		{
			id: 3,
			item: 'Exercise',
		},
	]);

	//declare addTodo const, set it equal to a function that takes todo as a parameter, creates a randomized id and generates a newTodo object that contains an id and our todo (using spread operator)
	const addTodo = todo => {
		const id = Math.ceil(Math.random() * 100000);
		const newTodo = { id, ...todo };
		//call the setTodos function, passing in a destructured array containing todos and newTodo
		// appends newTodo to existing todo
		setTodos([...todos, newTodo]);
	};

	return (
		<div className="container">
			// we determined the content of our header title
			<Header title="Todo List" />
			// we add function to onAdd by setting it equal to an object containing
			our addTodo constant
			<AddTodo onAdd={addTodo} />
			//we place our todos array of object as a parameter in our function in the
			todo component
			<List todos={todos} />
		</div>
	);
}

export default App;
