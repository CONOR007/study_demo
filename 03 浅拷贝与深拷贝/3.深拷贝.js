// 新对象的属性值与原对象的属性值不会共有同一片堆内存
const obj1 = {
    name: 'lc',
    info: {
        exp: 6,
        copy: {
            value: 'xx'
        }
    },
    date: new Date(),
    reg: new RegExp()
    // fn:()=>{} // 函数不行
    // o: obj1 // 报错
}
obj1.__proto__.aa = 123
obj1.o = obj1
const deepClone = function (obj) {
    return new Promise((resolve) => {
        // MessageChannel创建了一个通信的管道，这个管道有两个端口，每个端口都可以通过postMessage发送数据，而一个端口只要绑定了onmessage回调方法，就可以接收从另一个端口传过来的数据。
        const msg = new MessageChannel()
        msg.port1.postMessage(obj)
        msg.port2.onmessage = (res) => {
            resolve(res.data)
        }
    })
}
let obj2
deepClone(obj1).then(res => {
    console.log(res);
    obj2 = res
})