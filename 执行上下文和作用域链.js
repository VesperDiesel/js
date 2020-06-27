// 执行上下文是栈型结构

function a () {
  b()
}
function b () {
  c()
}
function c () {
  console.log('cccccccc')
}
a()
/*
　当函数执行时，会创建一个称为执行期上下文的内部对象。一个执行期上下文定义了一个函数执行时的环境，函数每次执行时对应的执行上下文都是独一无二的，所以多次调用一个函数会导致创建多个执行上下文，当函数执行完毕，执行上下文被销毁
 ECS = [
   globalContext
 ]
 ECS.push(functionAContext)
 ECS.push(functionB Context)
 ECS.push(functionCContext)
 // c执行完后,弹出,然后b,a
 ECS.pop()
 ECS.pop()
 ECS.pop()
 // 先进后出(栈)
 */

/*
什么是作用域（Scope）
　　[[scope]]:每个javascript函数都是一个对象，对象中有些属性我们可以访问，但有些不可以，这些属性仅供javascript引擎存取，[[scope]]就是其中一个。[[scope]]指的就是我们所说的作用域,其中存储了运行期上下文的集合。即作用域决定了代码区块中变量和其他资源的可见性。


作用域是在函数定义时就决定了,函数会保存一个内部属性[[scope]],保存了所有父变量属性

作用域会在当前上下文变量中查找,找不到向上级查找
函数AO(Activation Object)
*/

function a () {
  function b () {
    function c () {

    }
  }
}
/*
a.[[scope]] = [
  globalContext.VO
]
b.[[scope]] = [
  aContext.AO,
  globalContext.VO
]
c.[[scope]] = [
  aContext.AO,
  bContext.AO,
  globalContext.VO
]

*/


var a = 1
function sum () {
  var b = 2
  return a + b
}
sum()
/*
sum.[[scope]] = {
  globalContext.VO
}

ECS = [
  globalContext,
  sumContext
]

sunContext = {
  AO:{
    arguments:{
      length:0
    },
    b:undefined
  },
  Scope:[AO,sum.[[scope]]]
}
AO:{
  arguments:{
    length:0
  },
  b:2
}
ECS.pop()

*/

// 作用域链,函数内部保留一个scope属性,会保存所有父变量对象,函数执行时会把AO对象加进去,在函数执行的时,会先找自己的AO对象,找不到会通过链向上查找






