function logger (store) {
  return function (next) {
    return function (action) {
      console.log('logger');
      console.log(action)
      console.log(next)
      console.log(store)
      next(action)
    }
  }
}