function spread (x, ...args) {
  sum.apply(null, args)  // apply可以把参数用数组的方式传入,一个一个传
}
/*
function spread (x, ...args) {
  sum(...args)
}
 */
function sum (a, b, c, d) {
  console.log(a, b, c, d)
}
spread('x', 1, 2, 3, 4, 5)




let arr = [1, 2, 3, 4].concat([5, 6, 7])
// ====================================>
// let arr = [...[1, 2, 3, 4], ...[5, 6, 7]]



// ...是浅拷贝
let name = { name: 'vesper' }
let age = { age: '9' }
let school = { ...name, ...age }



// 浅拷贝和深拷贝,slice有浅拷贝的功能. 深拷贝,改变值对原来没影响,浅拷贝会变化
let b = [1, 2, 3]
let a = [b]
let c = a.slice(0)
b[0] = 100
console.log(c) // [[100,2,3]]  浅拷贝,只拷贝一层,可以看作深拷贝








let name = { name: { name: 'vesper' } }
let age = { age: '9' }
let school = { ...name, ...age }
name.name.name = 'aaa'
console.log(school)   // { name: { name: 'aaa' }, age: '9' }   ...是浅拷贝




// 深拷贝的实现
let obj = { a: 1 }
JSON.parse(JSON.stringify(obj))   // 只针对json对象,如果有函数或正则,或空对象就忽略了 a:{}

// 实现深拷贝 保留继承关系 可以实现各种类型拷贝 实现递归拷贝
function deepClone (obj) {
  if (typeof obj !== 'object') return obj
  if (obj == null) return null
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)
  Object.prototype.toString.call(obj) === '[object Array]'
  let o = new obj.constructor() // 保留类的继承关系
  for (let key in obj) {
    o[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
  }
  return o
}
// let arr = [[1, 2, 3, [123]]]
// arr.__proto__ = { a: 1 }
// console.log(arr.a) // 1
let o = { a: { a: 1 } }
let newObj = deepClone(o)
console.log(newObj)
o.a.a = 2
console.log(newObj)