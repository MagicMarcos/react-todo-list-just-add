import { useState } from 'react';

const AddTodo = ({ onAdd }) => {
	const [item, setItem] = useState('');

	const onSubmit = e => {
		//prevent the form from automatically submitting
		e.preventDefault();
		onAdd({ item });

		//The setItem() method sets the value of the specified Storage Object item, makes sure the form is cleared
		setItem('');
	};

	return (
		//returns a form with
		<form onSubmit={onSubmit}>
			<label>Add Todo:</label>
			<input
				type="text"
				placeholder="Todo Item"
				//item is the initial state
				value={item}
				//specifies that as we type it shows in the input field
				onChange={e => setItem(e.target.value)}
			/>
			<input type="submit" value="Add Todo" />
		</form>
	);
};

export default AddTodo;
