// http://www.javascriptpeixun.cn/my/course/822   940   1792-25   911公开课



// 原型 prototype    原型链__proto__
// 每个函数都有一个prototype属性
// 每个对象都有__proto__属性

function Animal () {
  this.type = '哺乳类'
}
console.log(Animal.prototype)   // Animal {}
Animal.prototype.type = '哺乳'
let animal = new Animal()
console.log(animal.__proto__) // Animal {} 指向类的原型  与AniMal.protype相等
console.log(animal.type)  // 哺乳类  先查找自身属性, 如果没有再去原型上查找(哺乳)

console.log(Animal.prototype.constructor)  //指向类

//链并不是无穷无尽的  Object.__proto__  就到头了 null


// 特殊的Function Object // 可以充当对象 也可以充当函数
Function.__proto__ === Function.prototype  // true

Object.__proto__ === Function.prototype    // true  所属类的原型

Object.__proto__ === Function.__proto__   // true




//hasownProperty 可以判断当前属性在不在实例上
function Animal () {
  // this.a = 1
}
Animal.prototype.a = 2
let animal = new Animal()
console.log(animal.hasOwnProperty('a'))  // 注释掉this.a = 1   false  不会去找原型上的属性,只看是否存在于当前实例上
console.log('a' in animal)   // true   in 关键字判断当前属性是否属于原型或实例上






