// 类的继承  三种属性 公有属性（__proto__）  私有属性  静态方法（静态属性）
// 实现一个类

function Parent() {
    // 构造函数中this new调用的就指向实例
    this.name = 'parent'
}
// 公有属性放在类的原型上
Parent.prototype.eat = function () {
    console.log('eat')
}

// 每个原型上会有一个constructor属性，指向这个类
let parent = new Parent()
// 实例上有name属性，实例上有__proto__，指向所属类的原型（prototype),是通过__proto__找到公有方法
parent.__proto__.eat()  // eat  会先找私有属性，找不到去找公有属性

function Child () {
    this.age = 9
}
let child = new Child()
child.__proto__.constructor.age  // child.__proto__指向Child的原型，原型的constructor指向Child这个类，但是此时 .age的this并不是child实例，而是类 所以不能这么直接用 ， Child.age == undefined,age是定义在实例上的







// 1.只继承私有属性 
function Parent() {
    // 构造函数中this new调用的就指向实例
    this.name = 'parent'
}
function Child () {
    this.age = 9
    // 此时this是子类，通过call改变this指向
    Parent.call(this)
}
let child = new Child()
console.log(child.name)  // parent







// 2.只继承公有属性（prototype） , 不能用赋值prototype的方法，不是继承，是兄弟关系，一个改变另一个也会改变，子可以拿到父的属性，父也可以拿到子的属性
function Child () {
    this.age = 9
}
Child.prototype.smoke = function() {
    console.log('smoke')
}
function Parent() {
    // 构造函数中this new调用的就指向实例
    this.name = 'parent'
}
// 公有属性放在类的原型上
Parent.prototype.eat = function () {
    console.log('eat')
}
// 第一种方法 操作__proto__
Child.prototype.__proto__ = Parent.prototype
let child = new Child()
child.eat()
// 第二种方法 Object.setPrototypeOf(), es6
Object.setPrototypeOf(Child.prototype,Parent.prototype)
let child = new Child()
child.eat()
// 第三种方法 Object.create()
Child.prototype = Object.create(Parent.prototype)
let child = new Child()
child.eat()
// Object.create()原理
function create (parentPrototype) {
    function fn () {}
    fn.prototype = parentPrototype
    return new fn()  // 这个fn实例上只有父类的公有属性
}
Child.prototype = Object.create(Parent.prototype)  // Child的prototype本来指向Child的原型，改成指向fn实例 ，child的__proto指向所属类的原型， fn的原型， 自身属性没有，想父级去找，相当于一个中转站
// 缺点 child.constructor 变成了 Parent， 为避免这一点 ，给fn实例加一个constructor属性，指向子类
Child.prototype = Object.create(Parent.prototype,{constructor:{value: Child}}) 


// {constructor:{value: Child}} 通过defineProperty()赋值， 这个方法不可枚举，可以加一个enumerable:true
let a = {}
Object.defineProperty(a,'name',{
    enumerable:true,  // 可枚举
    value:1,
    configurable:true,  // 可配置，是否可被删除
    writable:true 
})
console.log(a)
// value可替换成set get ，替换后不能writable：true, 不能有value值
let a = {}
Object.defineProperty(a,'name',{
    enumerable:true,  // 可枚举
    configurable:true,  // 可配置，是否可被删除
    get() {
        console.log('get')
        return 1
    },
    set(val) {
        console.log(val)
    }
})
console.log(a.name) // 取值时，会调get方法 get 1
a.name = 200 // 赋值调set方法

// create()原理完整版
function create (parentPrototype,props) {
    function Fn () {}
    Fn.prototype = parentPrototype
    let fn = new Fn()
    for (let key in props) {
        Object.defineProperty(fn,key,{...props[key],enumerable:true})
    }
    return fn  // 这个fn实例上只有父类的公有属性
}








// 3.继承公有和私有属性 
Child.prototype = new Parent()  // 方法不好








