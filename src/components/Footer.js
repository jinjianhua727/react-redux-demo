import FilterLink from "../containers/FilterLink"
import React from 'react';

export default class Footer extends React.Component{
	render(){
		return(
			<p>
				show:
				{" "}
				<FilterLink filter="SHOW_ALL">
					ALL
				</FilterLink>
				{", "}
				<FilterLink filter="SHOW_ACTIVE">
					active
				</FilterLink>
				{", "}
				<FilterLink filter="SHOW_COMPLETED">
					completed
				</FilterLink>
			</p>
		)
	}
}
