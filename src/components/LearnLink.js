import LearnLinkDetail from "../components/LearnLinkDetail"
import React from 'react';
import { fetchPostsIfNeeded } from '../actions/index'
import { connect } from "react-redux";

class LearnLink extends React.Component{
	componentDidMount(){
    	fetchPostsIfNeeded()
	}
	render(){
		let {json,fetchPostsIfNeeded} = this.props
		console.log(json)
		return(
			<ul >
				<li onClick={fetchPostsIfNeeded}>测试点击</li>
				{json.map((data,index) =>{
					return <LearnLinkDetail 
						key={index}
						{...data}
					/>
				})}
			</ul>
		)
	}
}
const getData = state => {
    return {
        json: state.getData
    }
}

export default connect(
    getData, 
    {fetchPostsIfNeeded}
)(LearnLink)
