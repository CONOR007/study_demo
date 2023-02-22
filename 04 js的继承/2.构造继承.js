// TODO:思路:在子类型的构造函数内部调用父类构造函数并改变构造函数的this指向。
function Student(name) {
    // this.person = new Person(name)
    Person.call(this,name) // TODO:关键点
    this.age = 16
}
Student.prototype.run = '跑路'
const lisi = new Student('李四') // 能实现多继承 可以向父类传递参数
// 优点
// 解决了所有实例共享同一个父类的原型，实现多继承，创建子类实例时，可以向父类传递参数
// TODO:缺点
// 1 父类原型上的属性没有继承过来
function Student2(name) {
    Person.call(this,name)
    this.age = 18
}
// 2 因为原型没有继承过来所以无法实现函数复用，每个子类都有父类构造函数的副本，影响性能

// 3 实例并不是父类的实例，只是子类的实例(只是实例化了Student,根本就没有实例化Person)
const zhangsan = new Student('张大帅')
