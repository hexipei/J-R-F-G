let user = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  }
};
setTimeout(user.sayHi, 1000); // Hello, undefined!

let user1 = {
  firstName: "John",
  sayHi1() {
    console.log(`Hello, ${this.firstName}!`);
  }
};
let f = user1.sayHi1
setTimeout( f, 1000); // Hello, John

let user2 = {
  firstName: "John",
  sayHi1() {
    console.log(`Hello, ${this.firstName}!`);
  }
};
setTimeout(() => user2.sayHi1(), 1000)
user2 = { sayHi1() {console.log("1")}}

let user3 = {
  firstName1: "hi"
};
function func() {
  console.log(this.firstName1);
}
let funcUser = func.bind(user3)
funcUser()

let user4 = {
  firstName: "John",
  say() {
    console.log(`Hello, ${this.firstName}!`);
  }
};
let say = user4.say.bind(user4)
say()
setTimeout(say, 1000)

let user5 = {
  firstName: "John",
  says(phrase) {
    console.log(`${phrase}, ${this.firstName}!`);
  }
};
let says = user5.says.bind(user5)
says("hello")
says("bay")

function mul(a, b) {
  return a * b;
}
let double = mul.bind(2, 2);
console.log( double(3), '3' );

function partial(func, ...argsBound) {
  return function(...args) {
    return func.call(this, ...argsBound, ...args)
  }
}
//Usage
let user6 = {
  firstName: "xiaoming",
  say(time, phrase) {
    console.log(`[${time}] ${this.firstName}: ${phrase}!`)
  }
};
// add a partial method with fixed time
user.sayNow = partial(
  user6.say, 
  new Date().getHours() + ':' + new Date().getMinutes()+ ':' + new Date().getSeconds())
user.sayNow("Hello")//[21:42] John: Hello!
