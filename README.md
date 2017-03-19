##安装
```html
git clone https://github.com/jinjianhua727/react-redux-demo.git
```
##运行
```html
npm install
```

```html
webpack-dev-server --open
```
##总结

用户的行为：action

通过dispatch把action传输到reducer,dispatch通过connet关联component组件与container组件

reducer根据当前的state和action生成新的state，reduce是纯方法不用自己调用，生成store时把reducer方法传入createStore

reducer其实是作用在store上，store包含state，reducer执行后，store更新state

state的变化引起视图变化

归根到底，视图与state一一对应