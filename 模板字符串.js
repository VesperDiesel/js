// es6模板字符串 取代了字符串原有的拼接功能
let name = 'zf'
let age = 9
let str = name + '今年' + age + '岁'
console.log(str)
let str1 = `${name}今年${age}岁`
console.log(str1)

// 换行,且支持取值
let ul = '<ul>' + '<li>' + name + '</li>' + '</ul>' // 且不能换行
console.log(ul)
let ul1 = `
<ul>
  <li>${name}</li>
</ul>
`
console.log(ul1)


// 如何实现一个类模板字符串的功能
// let str1 = `${name}今年${age}岁`
let str1 = '${name}今年${age}岁'
let name = 'zf'
let age = 9
str1 = str1.replace(/\$\{([^}]*)\}/g, function () {
  // console.log(arguments[1])
  return eval(arguments[1])
})
console.log(str1)

// 带标签的模板字符串
let name = 'zf'
let age = 9
// let str = `zf今年9岁了`
let str1 = whatever`${name}今年${age}岁`
function whatever () {
  // 第一个参数是字符串数组,第二个参数是第一个变量
  let strings = arguments[0]
  // 把后面的参数变成一个数组
  let values = [].slice.call(arguments, 1)
  console.log(arguments)  // [Arguments] { '0': [ '', '今年', '岁' ], '1': 'zf', '2': 9 }
  console.log(strings)  // [ '', '今年', '岁' ]
  console.log(values)  // ['zf', 9 ]
  let str = ''
  for (let i = 0; i < values.length; i++) {
    str += `${strings[i]}${values[i]}`
  }
  str += strings[strings.length - 1]
  return str
}
console.log(str1)

// 想要自定义模板 *zf*   ,可以 str += `${strings[i]}*${values[i]}*`

// 字符串的常用方法

/*
includes 是否包含  返回布尔值
startsWith   以xxx开头   返回布尔值
endsWith   以xxx结尾   返回布尔值
padStart  padEnd   补全,可以用来 时分秒补0
*/

let a = setInterval(() => {
  let date = new Date()
  let h = date.getHours()
  let m = date.getMinutes()
  let s = date.getSeconds()
  let str = `${h.toString().padStart(2, 0)}时${m.toString().padStart(2, 0)}分${s.toString().padStart(2, 0)}秒`
  console.log(str)
}, 1000);














