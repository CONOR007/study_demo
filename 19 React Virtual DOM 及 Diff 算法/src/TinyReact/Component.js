import diff from "./diff"

export default class Component {
  constructor(props) {
    this.props = props
  }
  setState(state) {
    this.state = Object.assign({}, this.state, state)
    // 获取最新的要渲染的 virtualDOM 对象
    let virtualDOM = this.render()
    // 获取旧的 virtualDOM 对象 进行比对
    let oldDOM = this.getDOM()
    // 获取容器
    let container = oldDOM.parentNode
    // 实现对象
    diff(virtualDOM, container, oldDOM)
  }
  setDOM(dom) {
    this._dom = dom
  }
  getDOM() {
    return this._dom
  }
  updateProps(props) {
    this.props = props
  }

  // 生命周期函数
  componentWillMount() {
    console.log('当组件将要挂载')
  }
  componentDidMount() {
    console.log('当组件挂载完成')
  }
  componentWillReceiveProps(nextProps) {
  // 1.组件初次渲染时不会执行componentWillReceiveProps；
  // 2.当props发生变化时执行componentWillReceiveProps；
  // 3.在这个函数里面，旧的属性仍可以通过this.props来获取；
  // 4.此函数可以作为 react 在 prop 传入之后， render() 渲染之前更新 state 的机会。即可以根据属性的变化，通过调用this.setState()来更新你的组件状态，在该函数中调用 this.setState() 将不会引起第二次渲染。
  // 5.也可在此函数内根据需要调用自己的自定义函数，来对prop的改变做出一些响应。
  console.log('当props发生变化时执行')
  }
  shouldComponentUpdate(nextProps, nextState) {
  // shouldComponentUpdate() 方法会返回一个布尔值，指定 React 是否应该继续渲染，默认值是 true， 即 state 每次发生变化组件都会重新渲染。
  // shouldComponentUpdate() 的返回值用于判断 React 组件的输出是否受当前 state 或 props 更改的影响，当 props 或 state 发生变化时，shouldComponentUpdate() 会在渲染执行之前被调用。
  console.log('是否应该继续渲染')
    return nextProps != this.props || nextState != this.state
  }
  componentWillUpdate(nextProps, nextState) {
    // 组间将要更新
    console.log('组间将要更新')
  }
  componentDidUpdate(prevProps, preState) {
    // 组间更新完成
    console.log('组间更新完成')
  }
  componentWillUnmount() {
    // 组件将要被卸载
    console.log('组件将要被卸载')
  }
}
