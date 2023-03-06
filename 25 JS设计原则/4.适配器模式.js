class Adaptee {
  specificRequest() {
    return "德国标准插头";
  }
}
class Target {
  constructor() {
    this.adaptee = new Adaptee();
  }
  request() {
    let info = this.adaptee.specificRequest();
    return `${info} - 转换器 - 中国标准插头`;
  }
}

// 测试
let target = new Target();
let res = target.request();
console.log(res);

// （1）场景
// 封装旧接口
// 自己封装的ajax，使用方式如下：
ajax({
  url: "getData",
  type: "Post",
  dataType: "json",
  data: {
    id: "123",
  },
}).done(function () {});

// 但因为历史原因，代码中全都是：$.ajax({...})
// 做一层适配器
var $ = {
  ajax: function (options) {
    return ajax(options);
  },
};

// （2）设计原则验证
// 将旧接口和使用者进行分离
// 符合开放封闭原则
