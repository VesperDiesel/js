// 箭头函数  可以解决this的问题
// 函数 高阶函数 



// 普通函数
function fn (a) {
  console.log('普通函数')
  return a
}
fn()

// 箭头函数
/* 
箭头函数没有function关键字
小括号与大括号之间有个箭头
如果参数是一个 可以省略小括号,如果没有return 可以不写大括号
*/

let fn = (a) => { return a }  // let fn = a => a


function a (c) {
  return function (d) {
    return c + d
  }
}
// ==================================>
let a = (c) => (d) => c + d
console.log(a(1)(2))
// 如果返回的是个对象,用括号保住 let a = (c) => (d) => ({sum: c + d})


// 箭头函数解决this问题 看this指向是谁, 看谁调用(.前面是谁)
let obj = {
  a: function () {
    console.log(this, 'this')
  }
}
// obj.a()
let fn = obj.a    // fn = function() {console.log(this)}
fn()   // Object [global] window











// 定时器中的this是window
let obj = {
  a: function () {
    setTimeout(function () {
      console.log(this)
    }, 1000)
  }
}
obj.a()  // window,想要指向对象, 1. let that = this 变量接收一下  2. bind  (call,apply会立即执行)  3. 箭头函数,箭头函数没有this

let obj = {
  a: function () {
    setTimeout(function () {
      console.log(this)
    }.bind(this), 1000)
  }
}
obj.a() // obj

//箭头函数解决this问题,箭头函数没有this,会指向上级作用域
let obj = {
  a: function () {
    setTimeout(function () {
      console.log(this)
    }, 1000)
  }
}
obj.a()  // window



let a = 1
let obj = {
  b: () => {
    console.log(a)
  }
}
obj.b()  // 1

let a = 1
let obj = {
  a: 2,
  b: () => {
    console.log(a)
  }
}
obj.b()  // 1 

//因为箭头函数没有this,指向上级作用域window
let a = 1
let obj = {
  a: 2,
  b: () => {
    console.log(this.a)
  }
}
obj.b()  // undefined,this指向window,但是let不会挂载到window上





function fn () {
  [].slice.call(arguments, 1)
}
fn('x', 1, 2, 3, 4, 5)

// 箭头函数中没有arguments, ...剩余运算符,把多余的全部放入数组中
let fn = (x, ...args) => {
  console.log(args)
}
fn('x', 1, 2, 3, 4, 5)

// 函数可以附默认参数
let fn = (a = 1, b = 2) => {
  console.log(a)
}
fn()






