var f = function () {
  // 因为函数可以在不同的运行环境执行，
  // 所以需要有一种机制，能够在函数体内部获得当前的运行环境（context）。
  // 所以，this就出现了，它的设计目的就是在函数体内部，指代函数当前的运行环境。
  console.log(this.x); 
 // console.log(window.x);
 // console.log(obj.x);
};

var x = 1;
// 单独执行
f(); // 1

var obj = {
  f: f,
  x: 2,
};
// obj 环境执行
obj.f(); // 2
