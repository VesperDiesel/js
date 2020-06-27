// Object.assign() 浅拷贝
let age = { age: 9 }
let name = { name: 'vesper' }
let obj = {}
Object.assign(obj, name, age)
console.log(obj)
// ========>    let obj = Object.assign(name, age)
console.log({ ...name, ...age })




// __proto__   链
// console.log('1'.__proto__)  // [String: '']
let obj1 = { age: 9 }
let obj2 = { name: 'vesper' }
// obj1.__proto__ = obj2
// console.log(obj1.age)
// 先找自身, 自己没有去链中找,es6中可以在对象内直接操作链
// =======> Object.setPrototypeOf()
Object.setPrototypeOf(obj1, obj2) // 将obj2设置到obj1的链中
console.log(Object.getPrototypeOf(obj1)) //取值

// 可以在对象内操作
let obj1 = { age: 9, name: 'diesel' }
let obj = {
  name: 'vesper',
  getPname () {
    // 可以通过super关键字获取父属性
    return super.name
  },
  __proto__: obj1
}
console.log(obj.getPname())


