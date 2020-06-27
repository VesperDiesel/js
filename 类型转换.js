//js中类型转化的规则

// if () 括号里面布尔值 --- true/false
// 为false的值 false undefined null '' 0 NaN  其他为true
// !  可以转换为布尔类型


// 运算导致类型转换
// - * /            
console.log(1 / 'a')  //  ------- NaN
// + 字符串拼接 加法 ,如果有一方是字符串就会转换为字符串拼接
// 1. 数字和非字符串相加 
console.log(1 + true)    //--------2
console.log(1 + null)    //--------0
console.log(1 + undefined)    //--------NaN
console.log(1 + {})    //--------1[object Object]
// 2.非数字相加
console.log(true + true)  // 2
console.log(true + {})   // true[object Object]

// 对象中有两个方法 valueOf  toString
let obj = {
  // 可以重新定义方法
  [Symbol.toPrimitive] () {
    return 500
  },
  valueOf () {
    // return 100     
    return {}
  },
  toString () {
    return 200
  }
}
console.log(true + obj)    //101
console.log({}.valueOf())   // {}
// valueOf返回的还不是一个字符串,会调toString方法
// console.log(true + obj)    //201
// 如果valueof返回一个原始数据类型,直接采用结果,否则调用toString方法
// 对象类型转化,先去找symbol方法,找不到找valueof,返回的不是原始数据类型,调用tostring方法




/*
Undefined	    抛出TypeError异常
Null	        抛出TypeError异常
Number      	创建一个Number对象，它内部的初始值为传入的参数值
String      	创建一个String对象，它内部的初始值为传入的参数值
Boolean	      创建一个Boolean对象，它内部的初始值为传入的参数值
Object	      返回传入的参数（无转换）
*/








// + - 类似于! 会转换为数字类型
console.log(+'a')      // NaN
console.log(1 + '123')      // 1123  字符串类型
console.log(1 + +'123')      // 124


// 比较运算符 > = <  
// 字符串与字符串的比较
console.log('a' < 'b')     // true   转换为ascii码,比较字符串的第一位
console.log('a'.charCodeAt(0))   //97
console.log('b'.charCodeAt(0))   //98


console.log(1 < '123')   //true  如果字符串可以转换为数字就数字比较, 如果不能转换为数字就返回false

// ==
console.log(null == undefined)  // true
console.log(undefined == 0) // null和undefined 和其他类型比较返回的都是false
console.log({} == {})    // false   比较的是引用空间 所指向的地址不同
console.log(NaN == NaN)    // false  NaN和任何类型比较都不相等
//字符串和数字比较,将字符串转换为数字,如果是布尔类型,会把布尔转换为数字
console.log('1' == 1)  // true
console.log(true == 1)  // true
//对象与字符串 数字 symbol比较,会把对象转换为原始数据类型
console.log({} == '[object Object]')




// [] == ![]  单目运算优先级最高,先算!
// [] true ------> ![] ------------>false
// => [] == false  比较中有布尔类型,会转换为数字
// => [] == 0
// => [].valueof()还是数组,继续调用toString
// =>[].toString == 0
// => '' == 0 字符串与数字比较,将字符串转换为数字
// => 0 == 0    // true 
