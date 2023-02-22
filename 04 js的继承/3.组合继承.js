// TODO:思路:顾名思义，组合继承就是将原型链继承与构造函数继承组合在一起，从而发挥两者之长的一种继承模式。
function Student(name, subName) {
    Person.call(this, name) // 构造继承 第一次调用构造函数
    this.subName = subName;
}
Student.prototype = new Person() // TODO:关键点 原型继承 第二次调用构造函数
// Student.prototype = Person.prototype
Student.prototype.constructor = Student // 组合继承需要修复构造函数指向?
Student.prototype.saySubName = function () { // 子类原型方法
    return this.subName;
}

// 子类实例
let instance = new Student('王五', 'sisterAn')
instance.colors.push('black')
console.log(instance.colors) // ["red", "blue", "green", "black"]
console.log(instance.sayName()) // 王五
console.log(instance.saySubName()) // sisterAn
console.log(instance);

let instance1 = new Student('赵六', 'sisterAn1')
console.log(instance1.colors) //  ["red", "blue", "green"]
console.log(instance1.sayName()) // 赵六
console.log(instance1.saySubName()) // sisterAn1
console.log(instance1);
// 优点:解决了构造继承的缺陷,可以继承原型属性/方法,实现复用
// TODO:缺点:调用了两次父类的构造函数