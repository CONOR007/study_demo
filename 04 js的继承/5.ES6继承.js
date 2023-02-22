class People {
    constructor(name) {
        this.name = name
    }
    run() { }
}

// extends 相当于方法的继承
// 替换了上面的3行代码
class Man extends People {
    constructor(name) {
        // super 相当于属性的继承
        // 替换了 People.call(this, name)
        super(name)
        this.gender = '男'
    }
    fight() { }
}

// extends 继承的核心代码如下，其实和寄生组合式继承方式一样
function _inherits(subType, superType) {
    // 创建对象，Object.create 创建父类原型的一个副本
    // 增强对象，弥补因重写原型而失去的默认的 constructor 属性
    // 指定对象，将新创建的对象赋值给子类的原型 subType.prototype
    subType.prototype = Object.create(superType && superType.prototype, {
        constructor: { // 重写 constructor
            value: subType,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superType) {
        Object.setPrototypeOf
            ? Object.setPrototypeOf(subType, superType)
            : subType.__proto__ = superType;
    }
}