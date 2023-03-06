setTimeout(() => {
  console.log("222");
});
console.log("111");
requestAnimationFrame(() => {
  // 下一帧执行,可能在setTimeout前也可能在后
  console.log("333");
});
requestIdleCallback(() => {
  // 浏览器空闲的时候执行 优先级最低
  console.log("444");
});
// setImmediate(() => {
//   // 其它任务执行完了再执行,优先级低. 没有成为标准,不建议使用
//   console.log("444");
// });
