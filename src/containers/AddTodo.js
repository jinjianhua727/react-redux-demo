import { connect } from "react-redux";
import React from 'react';
import { addTodo } from "../actions/index"

class AddTodo extends React.Component{
	onSubmit(e){
		let input =this.refs.input
		e.preventDefault();
		if (!input.value.trim()) {return}
		this.props.dispatch(addTodo(input.value))
		input.value = ""
	}
	render (){
		return(
			<div>
				<form onSubmit = {this.onSubmit.bind(this)}>
					<input ref="input" />
					<button type="submit">
						Add Todo
					</button>
				</form>
			</div>
		)
	}
}


AddTodo = connect()(AddTodo)
export default AddTodo