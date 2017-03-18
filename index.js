/*
用户的行为：action
通过dispatch把action传输到reducer,dispatch通过connet关联component组件与container组件
reducer根据当前的state和action生成新的state，reduce是纯方法不用自己调用，生成store时把reducer方法传入createStore，
可以理解为reducer作用在store，store包含state，reducer执行后，store更新state
state的变化引起视图变化
归根到底还是那句话，视图与state一一对应
 */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from "./src/reducers/index"
import App from "./src/components/App"

let store = createStore(todoApp)
// 每次state变化都会触发此方法
store.subscribe(function () {
	// 打印状态树
	console.log(store.getState())
})
render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
)