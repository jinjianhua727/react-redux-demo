import React from 'react';

export default class LearnLinkDetail extends React.Component{
	render(){
		let {title,url} = this.props
		return(
			<li>
				<a href={url} target="_blank">{title}</a>
			</li>
		)
	}
}