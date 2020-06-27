// 数组的常见方法
//map some every filter forEach
// findIndex find reduce
// for of
// from    of()


//reduce 收敛 叠加 函数的返回结果会作为下一次循环的prev
let arr = [1, 2, 3, 4, 5]
let result = arr.reduce((prev, next, currentIndex, arr) => {
  console.log(prev, next, currentIndex, arr)
  if (arr.length - 1 === currentIndex) {
    // 循环到最后一个的时候 取平均数
    return (prev + next) / arr.length
  }
  return prev + next
})
console.log(result)
//reduce 如果多加一个参数0,就多循环一次,从prev为0 开始reduce(fn,0),应用:永远保证prev是个数字


// reduce原理
Array.prototype.myReduce = function (fn, prev) {
  // this 指这个数组
  for (let i = 0; i < this.length; i++) {
    // this[i]
    if (typeof prev === 'undefined') {
      // 没传第二个参数
      prev = fn(this[i], this[i + 1], i + 1, this)
      i++
    } else {
      prev = fn(prev, this[i], i, this)
    }
  }
  return prev
}
let total = [1, 2, 3].myReduce((prev, next, currentIndex, arr) => {
  return prev + next
})
console.log(total)

// 实现展开数组
let flat = [[1, 2, 3], [4, 5, 6]].reduce((prev, next, index, arr) => {
  return [...prev, ...next]
})
console.log(flat)





// forEach
Array.prototype.forEach = function (fn) {
  for (let i = 0; i < this.length; i++) {
    fn(this[i], i)
  }
};

[1, 2, 3].forEach((item, index) => {
  console.log(item, index)
})


// map  有返回值,返回值是一个新数组
let array = [1, 2, 3].map(item => {
  return item * 2
})
console.log(array)
Array.prototype.map = function (fn) {
  let arr = []
  for (let i = 0; i < this.length; i++) {
    arr.push(fn(this[i], i))
  }
  return arr
}

// filter 返回true 留下 返回false删除
let arr = [1, 2, 3]
let filterArr = arr.filter(item => {
  return item > 2
})
console.log(filterArr)

//find 返回查找的那一项,找到后停止查找,找不到返回undefined 
let f = [1, 2, 3].find(item => {
  return item === 2
})
console.log(f)  // 2


// some 有符合条件的返回true 找到后停止查找
let s = [1, 2, 3].some(item => {
  return item === 2
})
console.log(s)  // true




// every 所有都符合条件返回true ,有一个false就false
let s = [1, 2, 3].every(item => {
  return item === 2
})
console.log(s)  // false


// includes 是否包含 返回布尔值
let i = [1, 2, 3].includes(3)
console.log(i)



// from 将类数组转换为数组   常见类数组: htmlCollection  arguments {0:1,1:1,2:3,length:3}
function a () {
  // eval(arguments.join('+'))
  // console.log(eval(arguments.join('+')))  // 类数组,没有join方法
  console.log(eval(Array.from(arguments).join('+')))
}
a(1, 2, 3)




//of
let ary = new Array(3)     //[,,]
let ary = Array.of(3)    // [3]
