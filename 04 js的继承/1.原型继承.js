// TODO:思路:将父类的实例作为子类的原型
function Student() {
    this.type = "学生"
    this.name = "张三"
}

Student.prototype = new Person('人') //TODO:关键点 通过原型继承父类 =>无法实现多继承,即一个子类不能同时继承多个父类
Student.prototype.xx = 123
Student.prototype.fn = ()=>{}

const zhangsan = new Student()
console.log(zhangsan);

Person.prototype.eat = function () {
    console.log('吃东西')
}
console.log(zhangsan);

// TODO:缺点
// 1 无法实现多继承,即一个子类不能同时继承多个父类
// 2 所有实例共享同一个父类的原型
function Student2() {
    this.type = "学生"
    this.name = "张三"
}
Student2.prototype = new Person('人2')
// 3 创建子类实例时，无法向父类构造函数传参
const lisi = new Student2()