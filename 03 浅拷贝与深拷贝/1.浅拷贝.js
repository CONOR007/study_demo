// 新对象的属性值与原对象的属性值会共有同一片堆内存
const obj1 = {
    name:'lc',
    info:{
        exp:6
    }
}
const clone = function (obj) {
    const obj2 = {}
    for (const key in obj) {
        obj2[key] = obj[key]
    }
    return obj2
}

console.log(clone());