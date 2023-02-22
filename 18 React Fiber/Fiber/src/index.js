import React, { render, Component } from "./react";

const root = document.getElementById("root");

const jsx = (
  <div>
    <p>Hello React</p>
    <p>Hi Fiber</p>
  </div>
);

// 创建fible是广度优先的（从上往下，按层级创建），然后当话是可以被打断当
// root
// div
// p1 p2
// test1 test2

render(jsx, root);

setTimeout(() => {
  const jsx = (
    <div>
      <div>奥利给</div>
    </div>
  );
  debugger
  render(jsx, root);
}, 2000);

// class Greating extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       name: "张三"
//     }
//   }
//   render() {
//     return (
//       <div>
//         {this.props.title}hahahaha {this.state.name}
//         <button onClick={() => this.setState({ name: "李四" })}>button</button>
//       </div>
//     )
//   }
// }

// render(<Greating title="奥利给" />, root)

// function FnComponent(props) {
//   return <div>{props.title}FnComponent</div>
// }

// render(<FnComponent title="Hello" />, root)
