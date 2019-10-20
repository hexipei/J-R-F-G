// function showMessage() {
//   let message = 'hello'
//   console.log(message)
// }
// showMessage()
// console.log(showMessage, '1')

// let userName = 'John'
// function showMessage1() {
//   userName = 'Bob'
//   let message1 = 'hello'+ ' ' + userName;
//   console.log(message1)
// }
// showMessage1()
// console.log(userName, '11')//Bob

// let userName1 = 'John';
// function showMessage2() {
//   let userName1 = "Bob";
//   let message2 = 'Hello, ' + userName1; // Bob
//   console.log(message2);
// }
// showMessage2();
// console.log( userName1, '1' );//John

// function showMessage0(from, text) {
//   from = '*' + from + '*'
//   console.log(from + ':' + text)
// }
// showMessage0()//*undefined*:undefined

// function showMessage3(from, text) {
//   from = '*' + from + '*'
//   console.log(from + ':' + text)
// }
// let from = "Ann"
// showMessage3(from, "hello")//*Ann*:hello
// console.log( from, '1' )//Ann 1

// function showMessage4(from, text) {
//   let from = "Ann"
//   console.log(from + ':' + text)
// }
// from = '*' + from + '*'
// showMessage3(from, "hello")//**Ann**:hello
// console.log( from, '1' )//*Ann* 1

// function doNothing() { /* 里面是空的 */ }
// console.log( doNothing() === undefined ); // true，空的时候是未定义
// function doNothing() {return;}
// console.log( doNothing() === undefined ); // true，'return;' 的时候也是未定义

// function showPrimes(n) {
//   nextPrime: for (let i = 2; i < n; i++) {
//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) continue nextPrime;
//     }
//     console.log(i, '素数'); // a prime
//   }
//   return;
// }
// showPrimes(5)

// function showPrimes1(n) {
//   for (let i = 2; i < n; i++) {
//     if (!isPrime(i)) continue;
//     console.log(i, '&');  // a prime
//   }
// }
// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if ( n % i == 0) return false;
//   }
//   return true;
// }
// showPrimes1(5)
// console.log(isPrime(23))

// sayHi("John"); // Hello, John
// function sayHi(name) {
//   console.log( `Hello, ${name}` );
// }

// let age = ("What is your age?", 18);
// let welcome;
// if (age < 18) {
//   welcome = function() {
//     console.log("Hello!");
//   };
// } else {
//   welcome = function() {
//     console.log("Greetings!");
//   };
// }
// welcome(); 

// let age1 = ("What is your age?", 18);
// if (age1 < 18) {
//   function welcome1() {
//     console.log("Hello!");
//   }
// } else {
//   function welcome1() {
//     console.log("Greetings!");
//   }
// }
// welcome1(); // Error: welcome is not defined

// let age2 = ("What is your age?", 18)
// let welcome2 = (age2 < 18) ? 
// function() {console.log("hello")} : function(){console.log("Greeting!")};
// welcome2()
// 箭头函数
// let age3 = ("what is your age?", 18)
// let welcome3 = (age3 < 18) ?
// () => console.log("hello") : () => console.log("greeting!")
// welcome3()

// const functionName = fn => (console.debug(fn.name), fn);
// functionName(Math.max); // max (logged in debug channel of console)

// let arr = [function() {}];
// console.log( arr[0].name );//输出为空

// function ask(question, ...handlers) {
//   let isYes = confirm(question)
//   for(let handler of handlers){
//     if(handler.length == 0){
//       if(isYes) handler();
//     }
//     else {
//       handler(isYes);
//     }
//   }
// }

// function say(){
//   console.log("hi")
//   say.counter ++
// }
// say.counter = 0
// say()
// say()
// console.log(`called ${say.counter} times`) //hi hi called 2 times

// function makeCounter() {
//   function counter() {
//     return counter.count ++
//   }
//   counter.count = 0
//   return counter
// }
// let counter = makeCounter()
// console.log( counter() )//0
// console.log( counter() )//1
// console.log(makeCounter())//{ [Function: counter] count: 0 }
// console.log(makeCounter().count)//0
// console.log(makeCounter().count)//0

// function makeCounter() {
//   function counter() {
//     return counter.count++;
//   };
//   counter.count = 0;
//   return counter;
// }
// let counter1 = makeCounter();
// counter1.count = 10;
// console.log( counter1(), '4' ); // 10

// let sayHi1 = function func(who) {
//   console.log(`Hello, ${who}`);
// };
// sayHi1("hiltor")//Hello, hiltor


// let sayHi3 = function func3(who) {
//   if (who) {
//     console.log(`Hello, ${who}`);
//   } else {
//     func3("Guest"); // Now all fine
//   }
// };
// sayHi3(); 

// let sayHi4 = function func4(who) {
//   if (who) {
//     console.log(`Hello, ${who}`);
//   } else {
//     func4("Guest"); // Now all fine
//   }
// };
// let welcome4 = sayHi4;
// sayHi4 = null;
// welcome4(); // Hello, Guest (nested call works

function ask(question, ...handlers) {
  let isYes = confirm(question);
  for(let handler of handlers) {
    if (handler.length == 0) {
      if (isYes) handler();
    } else {
      handler(isYes);
    }
  }
}
// for positive answer, both handlers are called
// for negative answer, only the second one
ask("Question?", () => console.log('You said yes'), result => console.log(result));
