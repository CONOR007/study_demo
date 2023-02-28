// ==================================================== 全局环境下的this指向 ====================================================
// 在全局作用域下，this始终指向全局对象window，无论是否是严格模式！
// 'use strict'
console.log(this); // 无论是不是严格模式, 浏览器=>window node=>{}

// ==================================================== 函数内this ====================================================
// 普通函数内的this分为两种情况，严格模式下和非严格模式下。
function test1(params) {
  // 严格模式
  "use strict";
  console.log(this);
}
test1(); // undefined
window.test1(); // window
// console.log(this === module.exports) // true
// console.log(global)

function test2(params) {
  // 非严格模式
  console.log(this);
}
test2(); // window
window.test2(); // window

// ==================================================== 对象中的this ====================================================
// 对象内部方法的this指向调用这些方法的对象，也就是谁调用就指向谁。
// 1.函数的定义位置不影响其this指向，this指向只和调用函数的对象有关。
// 2.多层嵌套的对象，内部方法的this指向离被调用函数最近的对象。
let obj = {
  name: "aaa",
  skill: function () {
    let name = "bbb";
    console.log(this.name); // aaa
  },
  obj2: {
    name: "ccc",
    skill: function () {
      console.log(this.name); // ccc
    },
  },
};
obj.skill(); // this指向obj
obj.obj2.skill(); // this指向obj2

// ==================================================== j箭头函数中的this ====================================================
// this指向于函数作用域所用的对象。
// 1.箭头函数中没有this和arguments。它里面的this继承自外层执行环境
// 2.箭头函数的this指向在被定义的时候就确定了，之后永远都不会改变。即使使用call()、apply()、bind()等方法改变this指向也不可以
let obj2 = {
  a: "ddd",
  functions: () => {
    console.log(this);
  },
  obj3: {
    name: "eee",
    functions: () => {
      console.log(this);
    },
  },
};
obj2.functions(); // windows
obj2.obj3.functions(); // windows

// ==================================================== 构造函数中的this ====================================================
// 构造函数中的this是指向实例。 可以看实现原理
function Test3(name) {
  this.name = name;
}
const test3 = new Test3("fff");
console.log(test3.name); // fff

// ==================================================== 原型链中的this ====================================================
// this这个值在一个继承机制中，仍然是指向它原本属于的对象，而不是从原型链上找到它时，它所属于的对象。

// ==================================================== 改变this指向的方法call apply bind ====================================================
// 相同点：
// call、apply和bind都是JS函数的公有的内部方法，他们都是重置函数的this，改变函数的执行环节。
// 不同点：
// bind是创建一个新的函数，而call和aplay是用来调用函数；
// call和apply作用一样，只不过call为函数提供的参数是一个个地罗列出来，而apply为函数提供的参数是一个数组
function fn(n1, n2) {
  console.log(this);
  console.log(n1, n2);
}
//=============================调用call()方法
fn.call(); //=>this:window;
let obj5 = { fn: fn };
fn.call(obj5); //=>this:obj;n1,n2:undefined
fn.call(1, 2); //=>this: 1;n1=2,n2=undefined;
fn.call(obj5, 1, 2); //=>this: obj;n1=1,n2=2;

//Call方法的几个特殊属性
//非严格模式下
fn.call(undefined); //this=>window
fn.call(null); //this=>window
//严格模式下
("use strict");
fn.call(undefined); //this=>undefined
fn.call(null); //this=>null

//=============================apply()的传参方式
fn.apply(obj5, [1, 2]);
//============================= bind()
fn.call(obj5, 1, 2);
//bind()方法：改变fn中的this，fn并不执行
fn.bind(obj5, 1, 2);