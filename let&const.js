// i++是先进行表达式运算，再进行自增运算,++i是先进行自增或者自减运算
/*
  a = i ++ //将i的值赋给a ， 即a = i,之后再执行i = i + 1;

  a = ++ i //将i+1 的值赋给a，即a = i + 1 ,之后再执行i = i + 1;
*/



// var不支持封闭作用域,会声明到全局,可以放在自执行函数中,形成闭包
// for (var i = 0; i < 3; i++) {
//   // 0 in  ,1 in  , 2 in
//   console.log(i, 'in')
// }
// console.log(i, 'out')   // 3 out
// console.log(window.i, 'window.i')  // 3 window.i


for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i, 'in')
  }, 1000)
}
console.log(i, 'out')
// 先打印出3 out 一秒后打印3个3

for (var i = 0; i < 3; i++) {
  (function (i) {
    setTimeout(() => {
      console.log(i, 'in')
    }, 1000)
  })(i)
}
console.log(i, 'out')
// 先打印出3 out 一秒后打印0,1,2 in

// let 配合{}可以产生作用域,支持块级作用域,声明的变量只会在当前作用域内, 可以解决作用域污染和局部作用域
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i, 'in')
  }, 1000)
}
console.log(i, 'out')
// 先报错i not defined 一秒后打印0,1,2 in



// var可以重复声明变量, let const 不允许 ,let声明过的,也不可以用vzr重新声明
// var可以变量提升,let const有暂存死区
let a = 1
{
  console.log(a)
  let a = 2
}
// 会报错undefined, 如果同一作用域内let定义了一个变量,不会向上级作用域找


// 通过const声明的变量不能被修改,不能被修改引用空间
const a = {
  name: 'aaa'
}
a.age = 9
console.log(a)
// 值改变,地址不变

// 关于变量提升
console.log(a)
var a;
console.log(a)
a = 10
console.log(a)
function a () {
  let c = 1;
}
console.log(a)
/*
  f()
  f()
  10
  10
*/
 //1） 变量声明存在提升，函数声明存在提升，但函数声明比变量声明更置顶

// 2） 声明过的变量不会重复声明













