function pow(x, n) {
  if(n == 1) {
    return x
  }else{
    return x * pow(x, n-1)
  }
}
console.log(pow(2, 10), '#') //1024

function pows(x, n) {
  let result = 1
  for(let i=1; i<=n; i++) {
    result *= x
    console.log(result, '@')
  }
  return result
}
console.log(pows(2, 3), '%') //8

function hi() {
  console.log('hi', '#')
  return 'HH'
}
function welcome() {
  console.log('hello, ilter');
  setTimeout(() => hi(),2000)
  hi()
}
welcome()
hi()// hello, ilter   hi #    hi #    (两秒后)hi #
hi()
welcome() //hi #    hello, ilter    hi #    (两秒后)hi #

let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
console.log(list, '^') // { value: 1, next: { value: 2, next: { value: 3, next: [Object] } } }
list = { value: "new item", next: list };
console.log(list, '!') /*{ value: 'new item',  next: { value: 1, next: { value: 2, next: [Object] } } } */
list.next = list.next.next
console.log(list, '#') /*{ value: 'new item',  next: { value: 2, next: { value: 3, next: [Object] } } }  */

let list1 = {
  value: 1,next: {
    value: 2,next: {
      value: 3,next: {
        value: 4,next: null
      }
    }
  }
};
console.log(list1, '##') /*{ value: 1,  next: { value: 2, next: { value: 3, next: [Object] } } }  */
list1 = { value: "new item", next: list1 };
console.log(list1, '@@') /*{ value: 'new item', next: { value: 1, next: { value: 2, next: [Object] } } }  */
list1.next = list1.next.next
console.log(list1, '!!') /*{ value: 'new item', next: { value: 2, next: { value: 3, next: [Object] } } } */

function sumTo(n) {
  if(n==1) return 1
  else { n + sumTo(n-1)}
}
console.log(sumTo(100)) //undefined

function sumTo1(n) {
  if(n==1) return 1
  else {return n + sumTo1(n-1)}
}
console.log(sumTo1(100)) //5050

function Tosum(n) {
  return n * (n + 1) / 2 //5050
}
console.log(Tosum(100))
function Tosum1(n) {
  n * (n + 1) / 2
}
console.log(Tosum1(100)) //undefined

function fib(n) {
  let f = 1, s = 1
  for(let i = 3; i <= n; i++) {
    let w = f + s
    f = s
    s = w
  }
  return s //返回下一个元素  如果填写两个元素，在栈任务中，因为只申请了一个空间，会把前面的覆盖掉
}
console.log(fib(3), ',', fib(6), ',', fib(8), ',', fib(18))// 2，8，21，2584

function fib1(n) {
  let f = 1, s = 1
  for(let i = 3; i <= n; i++) {
    let w = f + s
    f = s
    s = w
  }
  return s, f //返回下一个元素  如果填写两个元素，在栈任务中，因为只申请了一个空间，会把前面的覆盖掉
}
console.log(fib1(3), ',', fib1(6), ',', fib1(8), ',', fib1(18))// 1, 5, 13, 1597

function fib2(n) {
  let f = 1, s = 1
  for(let i = 3; i <= n; i++) {
    let w = f + s
    f = s
    s = w
  }
  return f, s //返回下一个元素  如果填写两个元素，在栈任务中，因为只申请了一个空间，会把前面的覆盖掉
}
console.log(fib2(3), ',', fib2(6), ',', fib2(8), ',', fib2(18))// 2，8，21，2584

let obj = "hello"
console.log([...obj], Array.from(obj))//[ 'h', 'e', 'l', 'l', 'o' ] [ 'h', 'e', 'l', 'l', 'o' ]
let object = 'hello'
console.log([...object], Array.from(object))//[ 'h', 'e', 'l', 'l', 'o' ] [ 'h', 'e', 'l', 'l', 'o' ]
let obje = ['hello']
console.log([...obje], Array.from(obje))//[ 'hello' ] [ 'hello' ] 本身就是数组，没有再分解
let objec = ["hello"]
console.log([...obje], Array.from(obje))//[ 'hello' ] [ 'hello' ]

function count() {
  let count = 2
  return function() {
    return (count = count * count)
  }
}
let counter = count()
let recounter = count()
console.log(count(), counter())//[Function] 4
console.log(count(), counter())//[Function] 16
console.log(count(), recounter())//[Function] 4
console.log(count(), recounter())//[Function] 16

function makeCounter() {
  function counter() {
    return counter.count++;
  };
  counter.count = 0;
  return counter;
}
let counter2 = makeCounter();
counter2.count = 10;
console.log( counter2() ); // 10

let sayHi = function func(who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    func("Guest"); // Now all fine
  }
};
let welcomer = sayHi;
sayHi = null; //null
welcomer(); // Hello, Guest

let sayHi1 = function func1(who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    func1("Guest"); // Now all fine
  }
};
let welcomer1 = sayHi1;
console.log(sayHi1) //[Function: func1]
welcomer1(); // Hello, Guest

let say = function func(who) {
  console.log(`Hello, ${who}`);
};
say("John"); // Hello, John

function getFunc() {
  let value = "test";
  let func = new Function(console.log(value));
  return func;
}
getFunc()(); //test

function getFuncs() {
  let value = "test";
  let func = function() { 'console.log(value);' };
  return func;
}
getFuncs()(); //未执行，没有报错

function getFunces() {
  let value = "test";
  let func = function() { console.log(value); };
  return func;
}
getFunces()(); //test

let timerId = setTimeout(() => console.log("hello"), 1000);
console.log(timerId, '#'); //hello  '0': [Function: listOnTimeout], _list: [Object]
clearTimeout(timerId);
console.log(timerId, '##'); //Id 没变 '0': null

let timeId = setInterval(() => console.log('tick'), 2000); //tick(两秒重复一次)
setTimeout(() => { clearInterval(timeId); console.log('stop'); }, 5000); //stop(5 秒后)

setTimeout(() => console.log("World"), 0); 
console.log("Hello"); // hello // world
