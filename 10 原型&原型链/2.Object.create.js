function A(a) {
    this.varA = a;
}
A.prototype = {
    varA: null,
    doSomething: function () {}
}
function B(a, b) {
    A.call(this, a);
    this.varB = b;
}
// 用 Object.create() 将参数1通过原型的方式继承给参数2,这样的访问顺序就还是保持B(子类)优先,同时后续添加原型也不会影响A的原型
B.prototype = Object.create(A.prototype, {
    varB: {
        value: null,
        enumerable: true,
        configurable: true,
        writable: true
    },
    doSomething: {
        value: function () { // override
            A.prototype.doSomething.apply(this, arguments);
            // call super
            // ...
        },
        enumerable: true,
        configurable: true,
        writable: true
    }
});
B.prototype.constructor = B;

var b = new B();
debugger
b.doSomething();
