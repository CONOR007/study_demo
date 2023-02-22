// 新对象的属性值与原对象的属性值不会共有同一片堆内存
const obj1 = {
    name:'lc',
    info:{
        exp:6,
        copy:{
            value:"obj1"
        }
    }
}
obj1.__proto__.aa = 123
const deepClone = function (obj) {
    const set = new Set()
    const _deepClone = function (value) {
        if(typeof value !== 'object' || value === null || set.has(value)) return value
        set.add(value)
        const res = Array.isArray(value) ? [] : {}
        for (const key in value) {
            console.log(key);
            res[key] = _deepClone(value[key])
        }
        return res
    }
    return _deepClone(obj)
}

const obj2 = deepClone(obj1)