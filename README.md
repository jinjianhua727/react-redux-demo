##安装
```html
https://github.com/jinjianhua727/react-redux-demo.git
```
##运行
```html
npm install
```

```html
webpack-dev-server
```
##react-redux-demo
不习惯老师react的写法，我用自己习惯的方式从头写到尾，调试时是简直噩梦，好在有付出就有回报。

补充下老师实战能力很强这能看出来，直接写代码跟大家一样容易出错。
##下面是我完成后的总结

用户的行为：action

通过dispatch把action传输到reducer,dispatch通过connet关联component组件与container组件

reducer根据当前的state和action生成新的state，reduce是纯方法不用自己调用，生成store时把reducer方法传入createStore

可以理解为reducer作用在store，store包含state，reducer执行后，store更新state

state的变化引起视图变化

归根到底还是那句话，视图与state一一对应