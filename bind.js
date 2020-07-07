
// bind的使用
let obj = {
    name:'vesper'
}
function fn () {
    console.log(this.name)
}
fn()   // undefined
// fn.bind(obj)  // 返回绑定后的方法
// let bindFn = fn.bind(obj) 
// bindFn()  // vesper
/**
 * 1. bind可以绑定this指向   bind可以绑定参数
 * 
 * 2.bind方法返回绑定后的函数
 * 
 * 3.绑定函数被new了，当前函数this就是当前实例
 * 
 * 4.new出来的结果，可以找到原有类的原型
 * 
 */
// Function.prototype.bind = function(context) {
//     let that = this
//     return function(){
//         return that.apply(context)
//     }
// }
// let bindFn = fn.bind(obj) 
// bindFn()  // vesper

let obj = {
    name:'vesper'
}

function fn (name,age) {
    console.log(name,'name')
    console.log(age,'age')
    console.log(this.name +'养一只' + name+age+'岁了')
}
let bindFn = fn.bind(obj,'猫')
// console.log(bindFn)
bindFn(9)  // 参数可以分两批传

//=======================================================================>

Function.prototype.bind = function(context) {
    let that = this
    let bindArgs = Array.prototype.slice.call(arguments)  // 拿到除了第一个以外的参数  ['猫]
    return function(){
        let args = Array.prototype.slice.call(arguments)
        return that.apply(context,bindArgs.concat(args))
    }
}


// 如果绑定的函数被当做类 new一个实例， 当前函数的this就是当前实例而不再是obj
//=======================================================================>

Function.prototype.bind = function(context) {
    let that = this
    let bindArgs = Array.prototype.slice.call(arguments)  // 拿到除了第一个以外的参数  ['猫]
    function fBound(){
        let args = Array.prototype.slice.call(arguments)
        // this是不是指向当前fBound，如果是，就是new出来的，指向当前实例，不是就指向上下文
        return that.apply(this instanceof fBound? this:context,bindArgs.concat(args))
    }
    return fBound
}


// fn.prototype.flag = '哺乳'
// let instance = new bindFn(9)
// console.log(instance.flag)      // undefined
// new 出来的实例，拿不到原型挂载的属性

//=======================================================================>

Function.prototype.bind = function(context) {
    let that = this
    let bindArgs = Array.prototype.slice.call(arguments)  // 拿到除了第一个以外的参数  ['猫]

    Function fn () {
        // Object.create

    }

    function fBound(){
        let args = Array.prototype.slice.call(arguments)
        // this是不是指向当前fBound，如果是，就是new出来的，指向当前实例，不是就指向上下文
        return that.apply(this instanceof fBound? this:context,bindArgs.concat(args))
    }
    // 让创建类的原型 等于最早类的原型，实现原型的公用
    // fBound.prototype = this.prototype
    // 通过第三方变量连接了原型，两个类的原型并没有公用
    fn.prototype = this.prototype
    fBound.prototype = new fn()
    return fBound
}


