
// 定义属性
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


// //  -----------------------------------------------
function _inherits(subClass,superClass) {
    // 继承公有属性
    subClass.prototype = Object.create(superClass.prototype,{constructor:{value:subClass}})
    // 继承静态方法
    Object.setPrototypeOf(subClass,superClass)
}

let Child = (function(){
    // 先实现继承父类的公有属性和静态方法
    _inherits(C,Parent)
    function C () {
        _classCallCheck(this,C)
        let obj = Parent.call(this)
        let that = this
        if (typeof obj === 'object') {
            // 返回了一个引用类型，会把这个引用类型作为子类的this,新增属性都新增到对象中了
            // obj.age = 9
            that = obj
        }
        that.age = 9
    }
    return C
})(Parent)
let child = new Child()
Child.b()