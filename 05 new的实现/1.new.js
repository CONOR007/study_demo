function _new() {
    // 创建一个新的对象
    const obj = Object.create(null)
    // 拿到传入进来的参数
    var [func, ...args] = [...arguments];
    // 将obj的原型指向构造函数的原型对象，这样obj就可以访问构造函数原型上的属性
    obj.__proto__ = func.prototype
    // 将构造函数的this指向obj，这样Animal函数内部this.name = name其实就是在给obj赋值
    var result = func.call(obj, ...args);
    // 最后判断结果,当res为数组,对象或者函数时
    if (result && (typeof (result) === 'object' || typeof (result) === 'function')) {
        return result;
    }
    // 构造函数没有返回的话,返回 obj
    return obj;
}

// function new2() {
//     const obj = Object.create(null)
//     const [fn,...arg] = [...arguments]
//     obj.__proto__ = fn.prototype
//     const res = fn.call(obj,...arg)
//     if(res && typeof res === 'object' || typeof res === 'function') return res
//     return obj
// }

function Animal(name, age) {
    this.name = name;
    this.age = age;
    // return {
    //     a: 1,
    //     b: 2
    // }
}

//通过new创建构造实例
let dog1 = new Animal('dog1', 2);
console.log(dog1.name) // dog1
console.log(dog1.age)//2

//通过_new方法创造实例
let dog2 = _new(Animal, 'dog2', 3);
console.log(dog2.name)//dog2
console.log(dog2.age) //3
Animal.xx = 'xx' // 这里不会影响实例,因为在实例化的时候将构造函数的this指向了obj
Animal.prototype.age = 12 // 这会影响实例,因为实例继承了构造函数的原型
console.log(dog2);


