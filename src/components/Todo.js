// todo component - this gives us the structure of what a todo item will look like -- a div with an h2 in it containing the actual todo item from the object todo that were creating -> we then export this as our default

const Todo = ({ todo }) => {
	return (
		<div>
			<h2>{todo.item}</h2>
		</div>
	);
};

export default Todo;
