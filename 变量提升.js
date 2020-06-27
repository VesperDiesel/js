// js 作用域 let 全局 函数 eval
// js 的作用域是静态的 在创建时就产生了, 执行的时候会产生执行上下文

// 全局/函数 上下文

//变量对象 variable object     vo   作用域链 this




// 全局上下文  var a = 1     全局上下文

var a = 100
function sun () {

}

// vo(globalContext) {
//   a: 100,
//   sum: ref to function sum
// }

// 执行上下文的生命周期,分为创建阶段和代码执行阶段

// VO + arguments => AO

function sum (a, b) {
  var c = 10
  var d = function () {
    function total () {
      b = 10
    }
  }
}
sum(10)
/*
  第一步 找形参,如果没有对应实参,就用undefined替代
  vo(sum){
    a:10,
    b:undefined
  }
  第二步查找函数声明,非变量声明函数,找函数声明,找到了total.  如果有相同名字的函数,会用后面的取代前面的
  vo(sum){
    a:10,
    b:undefined
    total: ref to function total
  }
  第三步 找变量声明,所以如果变量与函数同名,var不会干扰已经存在的属性,所以函数声明会提升到变量声明之前
     a:10,
    b:undefined
    total: ref to function total,
    d:undefined  =====> 再赋值 d = function
  }
*/

/*
1、
　　var   a=123；
　　function  fun(){
　　　　alert(a)　　//123
　　　}
　　fun()
2、
　　var   a=123；
　　function   fun(){
　　　　alert(a)；　　//undefined
　　　　a=456；
　　　}
　　fun()
　　alert()　　//123
3、
　　var   a=123；
　　function   fun(){
　　　　alert(a)；　　//123
　　　　a=456；
　　　}
　　fun()
　　alert(a)　　　　//456
4、
　　var   a=123；
　　function   fun(a){
　　　　alert(a)；　　//undefined
　　　　a=456；
　　　}
　　fun()；
　　alert(a)　　//123
5、
　　var   a=123；
　　function    fun(a){
　　　　alert(a)；　　//123
　　　　a=456；
　　　}
　　fun(123)
　　alert(a)　　//123
6、
　　var   a=12；
　　function   fn(){
　　　　console . log(a)　　//undefined
　　　　var   a=45；
　　　  console . log(a)　　//45
　　　}
　　fn()
7、
　　var   a=12；
　　function   fn(){
　　　　console . log(a)　　//12
　　　　a=45；
　　　　console . log(a)　　//45
　　　　}
　　fn()
8、???????????????????????????????????????????????????????????????????????????????????????????
　　function   fn(){
　　　　console . log(11)
　　　　function    ff(){
　　　　　　console . log(22)
　　　　　　}
　　　　ff()　　//22
　　}
　　fn()　　//11
9、
　　var   a=12；
　　function   fn(){
　　　　console . log(a)　　//undefined
　　　　return  4；
　　　　var  a=45；
　　　}
　　fn()
10、
　　var   a=45；
　　function    fn(a){
　　　　console . log(a)　　//undefined
　　　}
　　fn()
11、
　　console . log(total)；　　//undefined
　　var   total=0；
　　function  fn(num1，num2){
　　　　console . log(total)；　　//undefined
　　　　var  total=num1+num2；
　　　　console . log(total)　　　//300
　　　}
　　fn(100，200)
　　console . log(total)　　　　//0
12、
　　console . log(to)　　　　//undefined
　　var   to=1；
　　function   fn(n1，n2){
　　　　console . log(to)　　　//1
　　　　to=n1+n2；
　　　　console . log(to)　　　　//30
　　　}
　　fn(10，20)
　　console . log(to)　　　　//30
13、
　　function  fn(a){
　　　　console . log(a)　　//function a
　　　　var   a=123；
　　　　console . log(a)　　//123
　　　　function  a(){ }
　　　　console . log(a)　　//123
　　　　var  b=function(){ }
　　　　console . log(b)　　//function b
　　　　function b(){ }
　　　}
　　fn(1)
　　注：如果我们声明得变量和函数同名了，在预解释得时候只声明一次
14、
　　function test(a，b){
　　　　console . log(b)　　//function
　　　　console . log(a)　　//1
　　　　c=0；
　　　　a=3；
　　　　b=2；
　　　　console . log(b)；　　　　//2
　　　　function   b(){ }
　　　　function   d(){ }
　　　　console . log(b)　　　　//2
　　　}
　　test(1)

*/