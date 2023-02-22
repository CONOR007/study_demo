import TinyReact from "./TinyReact";

const root = document.getElementById("root");
// /*#__PURE__*/ React.createElement(
//   "div",
//   {
//     className: "container",
//   },
//   /*#__PURE__*/ React.createElement("h1", null, "\u4F60\u597D Tiny React"),
//   /*#__PURE__*/ React.createElement(
//     "h2",
//     {
//       "data-test": "test",
//     },
//     "(\u7F16\u7801\u5FC5\u6740\u6280)"
//   ),
//   /*#__PURE__*/ React.createElement(
//     "div",
//     null,
//     "\u5D4C\u59571 ",
//     /*#__PURE__*/ React.createElement("div", null, "\u5D4C\u5957 1.1")
//   ),
//   /*#__PURE__*/ React.createElement(
//     "h3",
//     null,
//     "(\u89C2\u5BDF: \u8FD9\u4E2A\u5C06\u4F1A\u88AB\u6539\u53D8)"
//   ),
//   2 == 1 &&
//     /*#__PURE__*/ React.createElement(
//       "div",
//       null,
//       "\u5982\u679C2\u548C1\u76F8\u7B49\u6E32\u67D3\u5F53\u524D\u5185\u5BB9"
//     ),
//   2 == 2 && /*#__PURE__*/ React.createElement("div", null, "2"),
//   /*#__PURE__*/ React.createElement(
//     "span",
//     null,
//     "\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9"
//   ),
//   /*#__PURE__*/ React.createElement(
//     "button",
//     {
//       onClick: () => alert("你好"),
//     },
//     "\u70B9\u51FB\u6211"
//   ),
//   /*#__PURE__*/ React.createElement(
//     "h3",
//     null,
//     "\u8FD9\u4E2A\u5C06\u4F1A\u88AB\u5220\u9664"
//   ),
//   "2, 3",
//   /*#__PURE__*/ React.createElement("input", {
//     type: "text",
//     value: "13",
//   })
// );
const virtualDOM = (
  <div className="container">
    <h1>你好 Tiny React</h1>
    <h2 data-test="test">(编码必杀技)</h2>
    <div>
      嵌套1 <div>嵌套 1.1</div>
    </div>
    <h3>(观察: 这个将会被改变)</h3>
    {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
    {2 == 2 && <div>2</div>}
    <span>这是一段内容</span>
    <button onClick={() => alert("你好")}>点击我</button>
    <h3>这个将会被删除</h3>
    2, 3
    <input type="text" value="13" />
  </div>
);

const modifyDOM = (
  <div className="container">
    <h1>你好 Tiny React</h1>
    <h2 data-test="test123">(编码必杀技)</h2>
    <div>
      嵌套1 <div>嵌套 1.1</div>
    </div>
    <h3>(观察: 这个将会被改变)</h3>
    {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
    {2 == 2 && <div>2</div>}
    <button onClick={() => alert("你好!!!!!")}>点击我</button>
    <input type="text" value="13" />
  </div>
);

// TinyReact.render(virtualDOM, root)

// setTimeout(() => {
//   TinyReact.render(modifyDOM, root)
// }, 2000)

function Demo() {
  return <div>Hello</div>;
}

function Heart(props) {
  return (
    <div>
      {props.title}
      &hearts; <Demo />
    </div>
  );
}

// function Heart(props) {
//   return /*#__PURE__*/ TinyReact.createElement(
//     "div",
//     null,
//     props.title,
//     "\u2665 ",
//     /*#__PURE__*/ TinyReact.createElement(Demo, null)
//   );
// }

// /*#__PURE__*/ TinyReact.createElement(Heart, {
//   title: "Hello React",
// });

// TinyReact.render(<Heart title="Hello React11" />, root);

// setTimeout(() => {
//   TinyReact.render(<Heart title="Hello React22" />, root);
// }, 2000);

class Alert extends TinyReact.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Default Title",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ title: "Changed Title" });
  }
  componentWillReceiveProps(nextProps) {
    // 将要接收pros
    console.log("componentWillReceiveProps", nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    // 是否要更新组建
    return true;
  }
  componentWillUpdate() {
    // 将要接收pros
    console.log("componentWillUpdate");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  render() {
    return (
      <div>
        {this.props.name}
        {this.props.age}
        <div>
          {this.state.title}
          <button onClick={this.handleClick}>改变Title</button>
        </div>
      </div>
    );
  }
}

const parentfn = (child) => {
  // 通过child给子组建传值
};
// TinyReact.render(<Alert name="张三" age={20}  ref={parentfn} />, root)

// setTimeout(() => {
//   TinyReact.render(<Alert name="李四" age={50} />, root)
//   // TinyReact.render(<Heart title="我是Heart组件" />, root)
// }, 2000)

class DemoRef extends TinyReact.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // console.log(this.input.value)
    console.log(this.input);
    console.log(this.alert);
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    return (
      <div>
        <input type="text" ref={(input) => (this.input = input)} />
        <button onClick={this.handleClick}>按钮</button>
        <Alert ref={(alert) => (this.alert = alert)} name="张三" age={20} />
      </div>
    );
  }
}

// TinyReact.render(<DemoRef />, root)

class KeyDemo extends TinyReact.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {
          id: 1,
          name: "张三",
        },
        {
          id: 2,
          name: "李四",
        },
        {
          id: 3,
          name: "王五",
        },
        {
          id: 4,
          name: "赵六",
        },
      ],
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const newState = JSON.parse(JSON.stringify(this.state));
    // newState.persons.push(newState.persons.shift())
    // newState.persons.splice(1, 0, { id: Math.random(10), name: "李逵" })
    newState.persons.pop();
    this.setState(newState);
  }
  render() {
    return (
      <div>
        {this.state.persons.length !== 0 ? (
          <Alert name="张三" age={this.state.persons.length} ref={parentfn} />
        ) : null}
        <Heart title={`hello react ${this.state.persons.length}`} />
        <ul>
          {this.state.persons.map((person) => (
            <li key={person.id}>{person.name}</li>
          ))}
        </ul>
        <button onClick={this.handleClick}>按钮</button>
      </div>
    );
  }
}

TinyReact.render(<KeyDemo />, root);
