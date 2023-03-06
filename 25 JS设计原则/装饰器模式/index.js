class Circle {
  draw() {
    console.log("画一个圆形");
  }
}
class Decorator {
  constructor(circle) {
    this.circle = circle;
    this.setRedBorder(circle);
  }
  setRedBorder(circle) {
    console.log("设置红色边框");
  }
}

// 测试
let circle = new Circle();
circle.draw();

let dec = new Decorator(circle);
dec.circle.draw();

// 场景2 ES7装饰器
// 为对象添加新功能
// 不改变其原有的结构和功能
@testDec(false)
class Demo {
  // ...
}
function testDec(isDec) {
  return function (target) {
    // target===Demo 为对象添加isDec
    target.isDec = isDec;
  };
}

// 装饰器的原理：
// @decorator
// class A{}

// // 等同于
// class A{}
// A = decorator(A) || A

function readonly(target, name, descriptor) {
  // descriptor属性描述对象(Object.defineProperty中会用到)，原来的值如下：
  // {
  // 		value: specifiedFunction,
  // 		enumerable: false,
  // 		configurable: true,
  // 		writable: true
  // }
  descriptor.writable = false;
  return descriptor;
}

class Person {
  constructor() {
    this.first = "A";
    this.last = "B";
  }

  // 装饰方法
  @readonly
  name() {
    return `${this.first} ${this.last}`;
  }
}

var p = new Person();
console.log(p.name());
p.name = function () {
  console.log("阿阿斯顿");
}; // 这里会报错，因为name是只读属性
console.log(p.name());

class Math {
  // 装饰方法
  @log
  add(a, b) {
    return a + b;
  }
}

const math = new Math();
const result = math.add(2, 4); // 执行add时，会自动打印日志，因为有@log装饰器
console.log("result", result);

function log(target, name, descriptor) {
  var oldValue = descriptor.value; // descriptor.value就是add(a, b)方法
  descriptor.value = function () {
    console.log(`Calling ${name} with`, arguments);
    return oldValue.apply(this, arguments);
  };
  return descriptor;
}
