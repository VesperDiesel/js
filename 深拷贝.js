//














// 引用关系


// 浅拷贝 改变拷贝前的内容会影响拷贝后的内容, 拷贝的是引用地址
let obj = { name: 'vesper' }
let o = { ...obj }
console.log(o)  // vesper
console.log(obj)  // vesper
console.log(obj === o) // false 
obj.name = 'hello'
console.log(o)  // vesper
console.log(obj)  // hello
// 只有一层的时候是深拷贝,多层的时候就是浅拷贝


// slice()也是浅拷贝
let a = [1, 2, 3]
let arr = [a]
let newArr = arr.slice()
newArr[0][0] = 100
console.log(arr)  // [[100,2,3]]
console.log(newArr)  // [[100,2,3]]





// 深拷贝, 拷贝后的结果更改不会影响拷贝前的,拷贝前后是没有关系的
let obj = { a: 1 }
JSON.parse(JSON.stringify(obj))   // 只针对json对象,如果有函数或正则,或空对象就忽略了 a:{}

// 实现深拷贝 保留继承关系 可以实现各种类型拷贝 实现递归拷贝
function deepClone (obj) {
  // 普通值或函数 不需要深拷贝 
  if (typeof obj !== 'object') return obj
  if (obj == null) return null  // null或者undefined就不拷贝了
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)
  Object.prototype.toString.call(obj) === '[object Array]'
  let o = new obj.constructor() // 保留类的继承关系
  for (let key in obj) {
    o[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
  }
  return o
}



// 如果已经深拷贝过了 就无需再重新深拷贝, 在第一次深拷贝时就存一份到hash中,再次深拷贝直接去hash中取
function deepClone (obj, hash = new WeakMap()) {
  // 普通值或函数 不需要深拷贝 
  if (typeof obj !== 'object') return obj
  if (obj == null) return null  // null或者undefined就不拷贝了
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)
  Object.prototype.toString.call(obj) === '[object Array]'
  if (hash.get(obj)) return hash.get(obj)
  let o = new obj.constructor() // 保留类的继承关系
  hash.set(obj, o)
  for (let key in obj) {
    o[key] = typeof obj[key] === 'object' ? deepClone(obj[key], hash) : obj[key]
  }
  return o
}