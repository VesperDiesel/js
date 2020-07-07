class Child {
    // constructor构造器
    constructor() {
        this.age = 9  // 私有属性
    }
    smoke(){ // 原型上的方法
        console.log('smoke')
    }
    static a() { // 静态方法，属于类
        return 1
    }
}
let child = new Child()
console.log(child.age)
console.log(child.smoke)
console.log(Child.a())  // 1

class Parent {
    // constructor构造器
    constructor() {
        this.name = 'parent'  // 私有属性
    }
    eat(){ // 原型上的方法
        console.log('eat')
    }
    static b() { // 静态方法，属于类而不是实例  Parent.b
        return 2
    }
}

// 子类继承父类
class Child extends Parent {  // 继承父亲的私有和公有
    // constructor构造器
    constructor() {
        super()  // 相当于Parent.call(this)
        this.age = 9  // 私有属性
    }
    smoke(){ // 原型上的方法
        console.log('smoke')
    }
    static a() { // 静态方法，属于类
        return 1
    }
}


// 类只能new 不能执行
// 类可以继承公有，私有和静态方法
// 父类的构造函数中，返回了一个引用类型，会把这个引用类型作为子类的this,新增属性都新增到对象中了
// 不支持静态属性





// // 手动babel class es5
// // 定义属性
function defineProperties(target,arr) {
    for(let i = 0; i <arr.length; i++) {
        Object.defineProperty(target,arr[i].key,{
            ...arr[i],
            enumerable:true,  // 可枚举
            configurable:true,
            writable:true
        })
    }
}

// 类的调用检测,检测实例是否是new出来的
function _classCallCheck(instance,constructor) {
    if(!(instance instanceof constructor)) {
        throw new Error('Class constructor Child cannot be invoked without new')
    }
}
// 创建类,constructor是构造函数，protoProperty是原型方法的描述，staticProperty是静态方法的描述
function _createClass(constructor,protoProperty,staticProperty) {
    if (protoProperty.length > 0) {
        defineProperties(constructor.prototype,protoProperty)
    }
    if (staticProperty.length > 0) {
        defineProperties(constructor,staticProperty)
    }
}
let Parent = function() {
    function P () {
        // 类的调用检测
        _classCallCheck(this,P)
        this.name = 'parent'
    }
    // 创建类
    _createClass(P,[
        {
            key:'eat',
            value:function(){
                console.log('eat')
            }
    }
    ],[
        {
            key:'b',
            value:function(){
                return 2
            }
        }
    ])
    return P
}()

let p = new Parent()
console.log(p)
console.log(Parent.b)





