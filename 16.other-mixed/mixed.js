let obj, method
obj = {
  go: function() {
    console.log(this)
  }
};
obj.go();
(obj.go)();

function makor() {
  return {
    name: 'Baishi',
    ref: this
  }
}
let make = makor()
console.log(make.ref.name) //undefined  严格模式下 Error: Cannot read property 'name' of undefined
function makors() {
  return {
    name: 'Buer',
    ref() {
      return this
    }
  }
}
let makes = makors()
console.log(makes.ref.name, makes.ref().name) //ref Buer

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() {
    console.log(this.step)
    return this;
  }
}
//没有返回 this 会报错 TypeError: Cannot read property 'up' of undefined
ladder.up().up().down().showStep()//1
let str = 'hello'
console.log('hello'.toUpperCase(), str.toUpperCase()) //HELLO HELLO
let n = 68.618886
console.log(n.toFixed(4)) //68.6189
console.log( typeof 0, typeof new Number(0) ); // "number" "object"
let zero = new Number(0);
if (zero) { // zero is true, because it's an object
  console.log( "zero is truthy!?!" );
}
let num = Number("123"); //
let str1 = "Hello";
str1.test = 5; // (*)
console.log(str1.test); //undefined 严格模式 TypeError: Cannot create property 'test' on string 'Hello'
let billion = 1e9
console.log(7.3e9)
console.log(0xff, 0xFF) //255 255
console.log(0b11111111, 0o377)
let a = 0b11111111
let b = 0o377
console.log(a = b) //true
console.log(Math.floor(3.1), Math.floor(-3.1) ) //向下舍入 3 -4
console.log(Math.floor(Math.PI), Math.floor(-Math.PI)) //向上舍入 3 -4
console.log(Math.ceil(3.1), Math.ceil(-3.1)) //4 -3
console.log(Math.ceil(Math.PI), Math.ceil(-Math.PI)) //4 -3
console.log(Math.round(3.4), Math.round(-3.4)) //取最接近的整数  3 -3
console.log(Math.round(3.6), Math.round(-3.6)) // 4 -4
console.log(Math.round(Math.PI), Math.round(-Math.PI)) //3 -3
console.log(Math.round(Math.E), Math.round(-Math.E)) //3 -3
console.log(Math.trunc(3.1), Math.trunc(-3.1)) //删除小数点 3 -3
console.log(Math.trunc(Math.E), Math.trunc(-Math.E)) //2 -2
console.log(0.1.toFixed(20), 0.2.toFixed(20), 0.1+0.2) //0.10000000000000000555 0.20000000000000001110 0.30000000000000004 相加时精度会损失
console.log((0.28 * 100 + 0.14 * 100) / 100) //0.4200000000000001 乘除会减少误差，不会消除误差
console.log(9999999999999999) //10000000000000000 64 位的数字 52 位来存储数字却还不够，所以最低有效数字消失了
console.log(0.0000, -0.0000) //0 -0
console.log(isFinite('15'), isFinite(15), -isFinite('618'), -isFinite(886)) //true true -1 -1
console.log(-isFinite('618', -isFinite(886))) //-1
console.log(isFinite('str'), isFinite(Infinity)) //false[因为是 NaN] false[因为是 Infinity]
console.log(NaN == NaN, NaN === NaN, NaN === undefined) //false false
console.log(Object.is(NaN, NaN), Object.is(0, -0)) //true false 
let a1 = 1, b1 = 2
console.log(Object.is(a1, b1)) // false
console.log(NaN === NaN, 0 === -0) //false true 两个错误的结果
console.log(+' ', +'100px', ' 01', '01 ') //0 NaN 01 01
console.log( parseInt('100px'), parseInt('12.3') ); // 100 12 只返回整数部分
console.log( parseFloat('12.5em'), parseFloat('12.3.4') ); // 12.5 12.3 第二个点停止读取
console.log( parseInt('0xff', 16), parseInt('ff', 16), parseInt('2n9c', 36) ); // 255 255 123456
console.log( parseInt('a', 16))
console.log(Math.random(), Math.max(3, 5, 10, 0 , -1)) //0.15560056870107797 10
console.log(Math.random(), Math.min(3, 5, 10, 0 , -1)) //0.49566763474143793 -1
console.log(Math.random(), Math.pow(2, 10)) //0.08145755696637713 1024
console.log(Math.random(1, 5)) //1
function sum(a, b) {
  return a + b;
}
console.log(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.
let guestList = `Guests: * John * Pete * Mary`;
console.log(guestList); //Guests: * John * Pete * Mary
let str3 = "Hello\nWorld";
let str4 = `Hello
World`;
console.log(str3 == str4); // true
console.log("\u00A9", "\u{20331}", "\u{1F60D}") //© 𠌱 😍
console.log(`The backslash: \\`) //The backslash: \
console.log(`My\n`.length) //3
let str5 = `Hello`;
console.log(str5[0], str5.charAt(0)) //H H
console.log(str5[str.length - 1]) //o
let str0 = 'Widget with id';
console.log( str0.indexOf('Widget'), str0.indexOf('widget'), str0.indexOf("id")); //0 -1 1
let str6 = 'As sly as a fox, as strong as an ox';
let target = 'as'; // let's look for it
let pos = 0;
while (true) {
  let foundPos = str6.indexOf(target, pos);
  if (foundPos == -1) break;
  console.log( `Found at ${foundPos}` );
  pos = foundPos + 1; // Found at 7 Found at 17 Found at 27
}
let str7 = "As sly as a fox, as strong as an ox";
let target1 = "as";
let pos1 = -1;
while ((pos1 = str7.indexOf(target1, pos1 + 1)) != -1) {
  console.log( pos1 ); //7 17 27
}
console.log(~3, ~0, ~-1, ~-12) // -4 -1 0 11
console.log(~3.1, ~-1.2, ~-12.5) //-4 0 11
let str8 = "stringify";
console.log( str8.slice(0, 5), str8.slice(0,1));//strin s
console.log( str8.slice(1,1), '#' ) //未输出
//2～结尾  从右边开始第四个到右边第一个
console.log( str8.slice(2), str8.slice(-4, -1) )//ringify gif
let stror = "stringify";
console.log( stror.substring(2, 6), stror.substring(6, 2) ); // "ring" ring
console.log( stror.slice(2, 6), stror.slice(6, 2), '#' ); // "ring" ""(空)
console.log( stror.substr(2, 4), stror.substr(-4, 2) ) //ring  gi
console.log( stror.substr(-4, -2), '#' ) //""(空)
console.log("zt".codePointAt(0), "zt".codePointAt(1), "zt".codePointAt(3)) //122 116 undefined
console.log("ZT".codePointAt(0), "ZT".codePointAt(1), "ZT".codePointAt(3)) //90 84 undefined
console.log(String.fromCodePoint(90), '\u005a') //Z Z
console.log("Ö".codePointAt(0)) //214
console.log( '𝒳'.length, '😂'.length, '𩷶'.length  ); // 2 2 2
console.log( '𝒳'[0], '𝒳'[1] ); // � �
console.log( '𝒳'.charCodeAt(0).toString(16) ); // d835
console.log( '𝒳'.charCodeAt(1).toString(16) ); // dcb3
console.log('S\u0307', 'S\u0307\u0323') //Ṡ Ṩ
console.log( "S\u0307\u0323".normalize() == "S\u0323\u0307".normalize() ); // true
console.log( "S\u0307\u0323".normalize() === "S\u0323\u0307".normalize() ); // true
console.log( "S\u0307\u0323".normalize(), "S\u0323\u0307".normalize() ); //Ṩ Ṩ
console.log( "S\u0307\u0323".normalize().length ); // 1
console.log( "S\u0307\u0323".normalize() == "\u1e68" ); // true

function extractCurrencyValue(str) {
  return +str.slice(1);
}
console.log( extractCurrencyValue('$120') === 120 ); // true

function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}
