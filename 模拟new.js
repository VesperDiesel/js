function Animal (type) {
  this.type = type // 实例上的属性
  // 如果当前构造函数返回的是一个引用类型 需要把这个对象返回 
}
Animal.prototype.say = function () {
  console.log('say')
}
let animal = new Animal('哺乳类')
console.log(animal.type)
animal.say()

/*

  类 Animal                                         原型 prototype
     |   (this.type = type)                                 say()
    new
     |
     |
     |
     |
 实例  animal
          (type = type)
          __proto__(指向prototype)

*/

//--------------------------模拟new-------------------------------------
function mockNew () {
  // Constructor==> animal  剩余的arguments就是其他参数
  let Constructor = [].shift.call(arguments) //arguments伪数组
  let obj = {}   // 返回的结果
  obj.__proto__ = Constructor.prototype // 原型上的方法
  let r = Constructor.apply(obj, arguments)
  return r instanceof Object ? r : obj
}