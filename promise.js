// promise generator async await
// koa axios redux-saga fetch
// promise是一种异步流程控制手段
/*
回调地狱,代码难以维护 promise 链式调用
promise可以支持多个并发请求,获取并发请求的数据
promise 可以解决异步的问题
*/


// promise的关键字  resolve reject pending
// 一旦promise状态确定了就不能改变,只有pending状态才可以转化状态
// promise只有一个参数executor 执行器 默认new时调用, 同步调用
// 每一个promise实例上都有一个then方法,then方法两个参数,一个成功时函数,一个失败时函数,
let p = new Promise((resolve, reject) => {
  // resolve('ok')
  // reject('not ok')
  // throw new Error();  // 有错误会走reject
  setTimeout(() => {  // promise可以实现不再传递回调函数,可以异步执行then
    resolve('ok')
  }, 1000)
})
// then方法是异步调用的
p.then((value) => { // 成功的原因
  console.log(value)
}, (err) => { // 失败的原因
  console.log(err)
})