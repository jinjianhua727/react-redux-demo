## 安装
```html
git clone https://github.com/jinjianhua727/react-redux-demo.git
```
## 运行
```html
npm install
```

```html
webpack-dev-server --open
```
## 总结
写redux5步骤

- 根据视觉效果抽象行为action
- 根据行为抽象相应reducer
- 然后把ui效果抽象出来component
- 根据ui组件把容器组件抽象出来container
- 最后把根据在入口文件引入reducer和container，生成store，并传给Provider

归根到底，视图与state一一对应
