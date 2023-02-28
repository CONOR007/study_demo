// 规定在一个单位时间内只能触发一次函数.如果在单位时间内触发多次,只执行一次.
// 场景:拖拽,缩放,滚动条

// 定时器实现
const throttle = function (fun, time, ...params) {
  let timeout = null;
  return function () {
    if (!timeout) {
      console.log("节流开始");
      timeout = setTimeout(() => {
        timeout = null;
        fun.apply(this, params);
      }, time);
    } else {
      console.log(`${time}ms之内只能触发一次`);
    }
  };
};

// 时间戳实现1,先执行
const throttle2 = function (fun, time, ...params) {
  let pre = 0;
  return function () {
    if (Date.now() - pre >= time) {
      console.log("首次执行");
      fun.apply(this, params);
      pre = Date.now();
    } else {
      console.log(`${time}ms之内只能触发一次`);
    }
  };
};

// 时间戳实现2
const throttle3 = function (fun, time, ...params) {
  let state = null;
  return function () {
    if (!state) {
      console.log("节流开始");
      state = true;
      const now = Date.now();
      while (Date.now() - now < time) {} // 会阻塞主线程,不推荐
      state = null;
      fun.apply(this, params);
    } else {
      console.log(`${time}ms之内只能触发一次`);
    }
  };
};
