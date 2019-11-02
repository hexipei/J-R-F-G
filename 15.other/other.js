const BIRTHDAY = '18.04.1982';
console.log(1/0) //Infinity
let eat = true, jump = null, x = undefined
console.log(eat, jump, x) //true null undefined
console.log(typeof undefined, typeof 0) //undefined number
console.log(typeof true, typeof Symbol("id")) //boolean symbol
console.log(typeof Math, typeof null) //object object
console.log(typeof console.log) //function

let value = true
console.log(typeof value) //boolean
let valueone = String(value)
console.log(typeof valueone) //string
let num = Number(valueone)
let numone = Number(value)
let str = '123'
console.log(valueone, num, typeof str) //true, number, string
let nums = Number(str)
console.log(typeof num, typeof numone, typeof nums, '#') //number number number
let numtwo = Boolean(num)
console.log(typeof numtwo) // boolean
let age = Number("an arbitrary string instead of a number");
console.log(typeof age, '3') //NaN
console.log(Boolean('0'), Boolean(' ')) //true true
console.log("" + 1 + 0, "" - 1 + 0) //10 -1
console.log(true + false, 6 / "3", "2" * "3") //1 2 6
console.log(4 + 5 + "px", "$" + 4 + 5, "4" - 2) //9px $45 2
console.log("4px" - 2, 7 / 0, "  -9  " + 5) //NaN Infinity    '  -9  5'
console.log(' 9 '-5, ' 9 '+5) //4 ' 9 5'
console.log("  -9  " - 5, null + 1) //-14 1
console.log(undefined + 1, " \t \n" - 2) //NaN -2

let apples = '2'
let oranges = '3'
console.log(apples + oranges, +apples + +oranges) //'23' 5
console.log(Number(apples) + Number(oranges)) //5
let a = b = c = +'25' * +'25'
let a1 = b1 = c1 = '25' + '25'
console.log(a, b, c, a1, b1, c1) //625 625 625 '2525' '2525' '2525'
console.log('25' ** '2', '25' ** 2, 25 ** 2) //625 625 625
let counter = 0;
console.log( ++counter, --counter ); // 1 0
console.log(counter++, counter--) //0 1
let n = 2000.5678
console.log(n << 2) //8000
console.log(n >> 2) //500
console.log(n >>> 2) //500 ***
n *= 3 + 5
console.log(n) //16004.5424
let aqie = (8 * 8, 25 * 25)
console.log(aqie) //625
console.log( 'Z' > 'A', 'Glow' > 'Glee', 'Bee' > 'Be' ); // true

console.log( '2' > 1 ); // true, string '2' becomes a number 2
console.log( '01' == 1 ); // true, string '01' becomes a number 1
console.log( true == 1, false == 0 ); // true false 对于布尔值，true变得 1 和 false 变 0
let as = 0;
console.log( Boolean(as) ); // false
let bs = "0";
console.log( Boolean(bs) ); // true
console.log(as == bs); // true! 比较时把值 '0' 转换成了数字 0
console.log(''== false, ''=== false) //true, false 严格相等需要类型也相同
console.log(null == undefined, null === undefined) //true false
console.log(null > 0, null < 0, null == 0, null <= 0, null >= 0) //false false false true true ***
console.log(undefined > 0, undefined < 0, undefined == 0, undefined >= 0, undefined <=0) //false false false false false
console.log(true || true, false || false) //true false
console.log(1 && 2 && 3, 1 & 2 & 3) //3 0
console.log(1 && 0 & 0, 1 & 0 & 0, 1 && 1 && 1, 1 & 1 & 1) //0 0 1 1
console.log( console.log(1) || 2 || console.log(3) ); //1 2

for(let i = 0; i < 5; i++) {
  console.log(i, '#') //0 1 2 3 4
}
for(let i = 0; i < 5; ++i) {
  console.log(i, '!') //0 1 2 3 4
}
let i = 3
while(i) {
  console.log(i--, '$') //3 2 1
}
let j = 3
while(j) {
  console.log(--j, '#') //2 1 0
}
let d = 0
while(++d <5) {
  console.log(d, '@') //1 2 3 4
}
let y = 0
while(y++ <5) {
  console.log(y, '^') //1 2 3 4 5
}
console.log(0 == false, 0 == '') //true true

for (n = 1; n < 10; n++) {
  n => n * 2
  let double = n
  console.log(double, '#') //1 2 3 4 5 6 7 8 9 let double = n => n * 2 ******
}
for (n = 1; n < 10; n++) {
  n = n * 2
  let double = n
  console.log(double, '@') //2 6 14
}
let m = 2
let doubletwo = m => m * 2
console.log(doubletwo()) //NaN

function isEmpty(obj) {
  for(let key in obj) {
    console.log(obj)
    return false
  }
  return true
}
let time = {}
console.log(isEmpty(time)) //true
time['7: 30'] = 'getup'
console.log(isEmpty(time), '#') //{ '7: 30': 'getup' } false
isEmpty(time)
let idone = Symbol("id")
let idtwo = Symbol('id')
console.log(idone == idtwo) //false
console.log(idone.toString() == idtwo.toString()) //true
console.log(idone.toString == idtwo.toString) //true
let idthree = Symbol("id")
let idfour = Symbol('id1')
console.log(idthree == idfour) //false
console.log(idthree.toString() == idfour.toString()) //false
console.log(idthree.toString == idfour.toString) //true ******
console.log(idthree.toString(), idfour.toString()) //Symbol(id) Symbol(id1)
console.log(idthree.toString, idfour.toString) //[function toString() {[native code]}] [function toString() {[native code]}]
console.log(idthree.description, idfour.description) //id id1
console.log(idthree.description == idfour.description) //false

let ids = Symbol("id");
let users = {
  name: "John",
  age: 30,
  [ids]: 123
};
for (let key in users) console.log(key); // name, age
console.log( "Direct: " + users[ids] ); //Direct: 123
let idagain = Symbol.for("id"); 
let idAgain = Symbol.for("id");
console.log( idagain === idAgain ); // true
let idagain1 = Symbol.for("id"); 
let idAgain1 = Symbol.for("id1");
console.log(idagain1.toString(), idAgain1.toString()) //Symbol(id) Symbol(id1)
console.log(idagain1, idAgain1) //Symbol(id) Symbol(id1)
console.log( idagain1 === idAgain1 ); // false
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");
console.log( Symbol.keyFor(sym) ); // name
console.log( Symbol.keyFor(sym2) ); // id
let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");
console.log( Symbol.keyFor(globalSymbol), '#' ); // name  全局
console.log( Symbol.keyFor(localSymbol), '#' ); // undefined 非全局
console.log( localSymbol.description, '#' ); // name
