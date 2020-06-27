//typeOf和instanceOf的区别

// 1. typeOf 可以用来校验原始数据类型(null undefined boolean string number symbol)
/*
typeOf null === 'object'    
[] {} reg function 
console.log(typeOf [])   // object
console.log(typeOf new RegExp('/A/'))   // object
console.log(typeOf funvtion () {})  // typeOf 如果函数就返回函数  其他引用类型返回 object
*/


// Object.prototype.toString.call()    不能校验自定义类型
// class A {}
// let a = new A ()
// Object.prototype.toString.call(a)   // [object Object]


// 2.instanceOf
/*
console.log([] instanceOf Array)
console.log([] instanceOf Object)
*/









