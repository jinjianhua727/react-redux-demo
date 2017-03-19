const getData = (state=[], action) =>{
	switch(action.type){
		case 'GET_SUCCESS':
			return Object.assign([], state, action.json )
		default:
		 	return state;
	}
}

export default getData;