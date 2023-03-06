// 打车时，可以打专车或者快车，任何车都有车牌号和名称。
// 不同车价格不同，快车每公里1元，专车每公里2元。行程开始时，显示车辆信息。行程结束时，显示打车金额（假定行程就5公里）。
// 用ES6语法写出该示例
class Car {
  constructor(num, name) {
    this.num = num;
    this.name = name;
  }
}

class Kuai extends Car {
  constructor(num, name) {
    super(num, name);
    this.amout = 1;
  }
}

class Zhuan extends Car {
  constructor(num, name) {
    super(num, name);
    this.amout = 2;
  }
}

class Trip {
  constructor(car) {
    this.car = car;
  }
  start() {
    console.log(`车辆信息:${this.car.num},${this.car.name}`);
  }
  end() {
    console.log(`价格:${this.car.amout * 5}`);
  }
}

const kuai = new Kuai(123,'kc')
const trip = new Trip(kuai)
trip.start()
trip.end()