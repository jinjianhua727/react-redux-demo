import React from 'react';
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import Footer from './Footer';
import LearnLink from './LearnLink';

const App = () =>(
	<div>
		<AddTodo />
		<VisibleTodoList />
		<Footer />
		<LearnLink />
	</div>
);

export default App;

