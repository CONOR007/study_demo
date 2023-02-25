// 当事件触发n秒后执行回调,如果在n秒内又被触发,则重新计时.
// 场景:按钮提交,搜索框联想

// 延时器实现 非立即执行
const debounce = function (cb, time, ...params) {
  let timeout = null;
  return function () {
    timeout && clearTimeout(timeout); // 重新计时
    timeout = setTimeout(() => {
      cb.apply(this, params);
    }, time);
  };
};

// 延时器实现 立即执行
const debounce2 = function (cb, time, ...params) {
  let timeout = null;
  return function () {
    console.log(time);
    timeout && clearTimeout(timeout); // 重新计时
    !timeout && cb.apply(this, params);
    timeout = setTimeout(() => {
      console.log(`${time}ms时间到了，可以重新触发了`);
      timeout = null;
    }, time);
  };
};
