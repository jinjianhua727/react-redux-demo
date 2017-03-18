import Todo from "./Todo";
import React from 'react';

export default class TodoList extends React.Component{
	render(){
		let {todos,onTodoClick} = this.props
		return(
			<ul>
				{todos.map(todo =>{
					return <Todo 
						key={todo.id}
						{...todo}
						onClick = {()=>onTodoClick(todo.id)} 
					/>
				})}
			</ul>
		)
	}
}
