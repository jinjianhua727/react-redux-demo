import React from 'react';

export default class Todo extends React.Component{
	render(){
		let {onClick,completed,text} = this.props
		return(
			<li
				onClick = {onClick}
				style={{textDecoration:completed?"line-through":"none"}}>
				{text}
			</li>
		)
	}
}