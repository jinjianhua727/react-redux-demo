let nextTodoId = 0
export const addTodo = (text)=>{
	return{
		type : "ADD_TODO",
		id : nextTodoId++,
		text
	}
}
export const setVisibility = (filter) =>{
	return {
		type:"SET_VISIBILITY",
		filter
	}
}
export const toggleTodo = (id) =>{
	return {
		type:"TOGGLE_TODO",
		id
	}
}

export const getSuccess = (json) => {
    return {
        type: "GET_SUCCESS",
        json
    }
}

function fetchPosts() {
    return dispatch => {
        return fetch('data.json')
            .then((res) => { console.log(res.status); return res.json() })
            .then((data) => {
                dispatch(getSuccess(data))
            })
            .catch((e) => { console.log(e.message) })
        }
}
export function fetchPostsIfNeeded() {
    console.log('function:fetchPostsIfNeeded')
    return (dispatch) => {
        return dispatch(fetchPosts())
    }
}