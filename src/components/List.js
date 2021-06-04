// we import our todo component
import Todo from './Todo';

//we pass in a destructured object --todos-- as a paramemter to a function that returns a div containing all our todos
const List = ({ todos }) => {
	return (
		<div>
			//map through our todos giving it an id and content // when using map in
			react we need to include an id otherwise react will throw an error
			{todos.map(todo => (
				<Todo key={todo.id} todo={todo} />
			))}
		</div>
	);
};

export default List;
