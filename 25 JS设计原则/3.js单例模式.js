class SingleObject {
  login() {
    console.log("login...");
  }
}
SingleObject.getInstance = (function () {
  let instance;
  return function () {
    if (!instance) {
      instance = new SingleObject();
    }
    return instance;
  };
})();

// 测试
let obj1 = SingleObject.getInstance();
obj1.login();
let obj2 = SingleObject.getInstance();
obj2.login();

console.log("obj1 === obj2", obj1 === obj2); // true

let obj3 = new SingleObject();
obj3.login();
console.log("obj1 === obj3", obj1 === obj3); // false

/**
系统中被唯一使用
一个类只有一个实例
（1）使用场景：
登录框
购物车
（2）说明：
单例模式需要用到java的特性（private）
ES6中没有（typescript除外）
（4）场景
jQuery只有一个$
模拟登录框
vuex和redux中的store
（5）设计原则验证
符合单一职责原则，只实例化唯一的对象
没法具体体现开放封闭原则，但是绝对不违反开放封闭原则
*/