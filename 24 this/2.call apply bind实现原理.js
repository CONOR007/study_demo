// call的实现
Function.prototype.newCall = function (context, ...arg) {
  const ctx = context || window;
  ctx.fn = this; // 重要! this就是当前执行的函数. 给对象添加一个函数,那么这个函数内部的this就指向这个对象了
  const res = ctx.fn(...arg); // 执行这个函数
  delete ctx.fn;
  return res;
};
function fn(n1, n2) {
  console.log(this);
  console.log(n1, n2);
}
let obj5 = { a: 1, b: 2 };
fn.newCall(obj5, 1, 2); //=>this: obj5;n1=1,n2=2;

// apply的实现
Function.prototype.newApply = function (context, arg) {
  const ctx = context || window;
  ctx.fn = this; // 重要! this就是当前执行的函数. 给对象添加一个函数,那么这个函数内部的this就指向这个对象了
  const res = ctx.fn(arg); // 执行这个函数
  delete ctx.fn;
  return res;
};
fn.newApply(obj5, [1, 2]);

// bind的实现
Function.prototype.myBind = function (context, ...arg) {
    const ctx = context || window;
    ctx.fn = this; // 重要! this就是当前执行的函数. 给对象添加一个函数,那么这个函数内部的this就指向这个对象了
    return function () {
      const res = ctx.fn(...arg,...arguments); // 执行这个函数
      delete ctx.fn;
      return res;
    };
  };
  
  var test = function(a,b){
      console.log('作用域绑定 '+ this.value)
      console.log('testBind参数传递 '+ a.value2)
      console.log('调用参数传递 ' + b)
  }
  var obj = {value:'ok'}
  var newFn = test.myBind(obj,{value2:'also ok'})
   
  newFn ('hello bind')
