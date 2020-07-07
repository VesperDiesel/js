function fn1(){
    console.log(this)
}



// call特点
//1. 可以改变当前函数this指向
//2. 可以让当前函数执行
// 传入的第一个参数是this，后面的是arguments

fn1.call('hello')    // this 指向字符串hello



//===================================================
function fn1 () {
    console.log(1)
}
function fn2 () {
    console.log(2)
}
fn1.call(fn2)  // 让fn1的this指向fn2 并且执行fn1   1
fn1.call.call(fn2)  // 先找到fn1.call方法，不管多少个都是找到call方法，会让Function.prototype.call中的this变成fn2,,this()变成fn2()，   2

function fn1 () {
    console.log(this,arguments)
}
function fn2 () {
    console.log(2)
}

Function.prototype.call = function(context) {
    context = context?Object(context):window
    context.fn = this
    let args = []
    console.log(arguments)
    for(let i = 1;i<arguments.length;i++) {
        args.push('arguments['+i+']')
    } 
        // 利用数组toString特性
        console.log(args,'args')    // ["arguments[1]",...,...]
        let r = eval('context.fn('+args+')') // 字符串与数组拼接，会调用toString方法，将字符串放进参数中，相当于一个一个传参
        delete context.fn
        return r
}
fn1.call('hello','1','2','3') 
fn1.call(fn2) // this指向fn2


fn1.call.call(fn2)  // 此时call方法中args变成了fn2， 会让r 执行， 里面没有 .调用， this指向window

// 如果只有一个call，会指向传入的第一个值，如果有多个call,call中的this改变并执行call方法



// =============================================================================
// call一个一个传参  apply第二个参数是一个数组,所以不用去循环参数列表

Function.prototype.apply = function(context,args) {
    context = context?Object(context):window
    context.fn = this
    if(!args) {
        // 如果没有参数 就不往下走 直接执行fn
        return context.fn()
    }
    // 利用数组toString特性
    let r = eval('context.fn('+args+')') // 字符串与数组拼接，会调用toString方法，将字符串放进参数中，相当于一个一个传参
    delete context.fn
    return r
}




