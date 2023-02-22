// TODO:思路:通过原型链的混成形式来继承方法
function Student(name, subName) {
    Person.call(this, name) // 构造继承
    this.subName = subName;
}
// 用 Object.create() 将参数1通过原型的方式继承给参数2,这样的访问顺序就还是保持子类优先,同时后续添加原型也不会影响父类的原型
console.log(Object.create(Person.prototype));
Student.prototype = Object.create(Person.prototype, {
    varB : {
      value: null,
      enumerable: true,
      configurable: true,
      writable: true
    },
    doSomething : {
      value: function(){ // override
        A.prototype.doSomething.apply(this, arguments);
        // call super
        // ...
      },
      enumerable: true,
      configurable: true,
      writable: true
    }
  }); // TODO:关键点
Student.prototype.constructor = Student // 组合继承需要修复构造函数指向

// 子类实例
let instance = new Student('王五', 'sisterAn')
instance.colors.push('black')
console.log(instance.colors) // ["red", "blue", "green", "black"]
console.log(instance.sayName()) // 王五
console.log(instance.doSomething())
console.log(instance);

let instance1 = new Student('赵六', 'sisterAn1')
console.log(instance1.colors) //  ["red", "blue", "green"]
console.log(instance1.sayName()) // 赵六
console.log(instance1.doSomething())
console.log(instance1);
// 优点:解决了组合继承的缺陷,只调用一次父类的构造函数,原型链保持不变
// Student.prototype.isPrototypeOf(instance) true // 用于检测构造函数Student.prototype是否存在于另一个对象instance的原型链上
// instance instanceof Student // 用于检测实例对象instance的原型链上是否存在构造函数Student的 prototype。
