const obj = { name: "xxx" };
obj.__proto__.age = 18;

const Person = function () {
    this.sex = "男";
};
Person.__proto__.age = 28;
Person.prototype.love = "james";
const student = new Person();
console.log(student);
console.log(student.age); // undefined
console.log(student.love); // 'james
console.log(student.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(student)); // true
console.log(student instanceof Person); // true

const arr = [];
console.log(arr.age); // undefined
arr.__proto__.msg = "xxx";
console.log(arr);
console.log([]);
const arr2 = [];
console.log(arr2.msg); // xxx

const a = { name: "a" };
console.log(a);

// 原型链是根据 __proto__ 一层一层查找数据的
// 对象{}默认是没有prototype属性的
// 对象和函数如果需要在原型上添加属性,都需要通过__proto__
// 构造函数默认会有prototype属性,prototype属性是用来继承的,实例化之后__proto会指向构造函数的prototype
// 我们看到的[[Prototype]]其实就可以理解为隐式原型

// 结论: 尽量不要通过__proto__设置原型,如果它作用在Object上,那么会污染全局. 所以这也是叫它隐式原型的原因,因为它一般只用来查找属性