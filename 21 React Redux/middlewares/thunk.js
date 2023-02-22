function thunk (store) {
  return function (next) {
    return function (action) {
      console.log('thunk');
      console.log(action)
      console.log(next)
      next(action)  // dispatch({ type: "increment" });
    }
  }
}