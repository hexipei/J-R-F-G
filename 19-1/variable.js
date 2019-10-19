// 1 申明 let
let message0;
message0 = 'N';
console.log(message0,'1');
let message1 = 'a'
console.log(message1, '2')
const mes = 'b' // 和 let 的区别是什么
console.log(mes,'21')
let user = 'Z', age = 44, message2 = 'hi'
console.log(user, age, message2, '3')
// 修改
let mess;
mess = 'a'
mess = 'b'//更改值后，旧的值被丢弃---如果还想要老的值(在不申明其他变量的情况下)怎么办？
console.log(mess, '31')
// 拷贝数据
let hello = 'hello world'
let message = hello
console.log(message, hello, '4')
// 特殊符号
let $ = 1
let _ = 2
console.log($+_, '5')
let 我 = '...';
let имя = '...';
console.log(我, имя, '6')
let num = 5;
//不严格方式，如果 num 不存在，则创建，如果存在则修改
num = 6
console.log(num, '7')

//2 const
const time = '18.04.1982'
console.log(time,'1')
const COLOR_A = '#FF7F00';
let color = COLOR_A;
console.log(color, '8')

//3 var
function Hi() {
  var phrase = "Hello";
  console.log(phrase, '9'); // Hello
}
Hi();
function SHi() {
  let phraser = "Hello"; 
  console.log(phraser, '10'); // Hello
}
SHi();
if (true){
  var test = true 
}
console.log(test, '11')
if (true){
  let test1 = true 
  console.log(test1, '12')
}
function sHi() {
  if (true)
  var pher = 'Hello';
  console.log(pher, '13')
}
sHi();
