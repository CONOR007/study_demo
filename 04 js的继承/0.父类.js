function Person(name) {
    this.name = name
    this.say = function () {
        console.log('1 + 1 = 2')
    }
    this.colors = ["red", "blue", "green"];
}

Person.prototype.listen = function () {
    console.log('エウテルペ')
}

Person.prototype.sayName = function () { // 父类原型方法
    return this.name;
  };