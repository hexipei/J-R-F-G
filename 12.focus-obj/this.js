let use = {
  name: 'Jingshi',
  age: 16,
  sayBye() {
    let user = {
      name: 'Guoguang',
    };
    console.log('bye, ', this.name)
  }
}
use.sayBye() //bye,  Jingshi
let use3 = {
  say() {
    console.log('bye', this.name)
  }
}
use3.say() //bay undefined

let use1 = {
  name: 'Jingshi',
  age: 16
}
let use2 = {
  name: 'buer',
  age: 16
}
function say() {
  console.log(this.name, '#')
}
use1.f = say;
use2.f = say;
use1.f(); //Jingshi
use2.f(); //buer
use1['f'](); //Jingshi
use2['f'](); //buer

let user = {
  name: "John",
  hi() { console.log(this.name); },
  bye() { console.log("Bye"); }
};
user.hi(); // John
(user.name == "John" ? user.hi : user.bye)(); //undefined 结果为 user.hi
console.log((user.name), '#') //John

let user1 = {
  firstName: "John"
};
function func() {
  console.log(this.firstName);
}
let funcUser = func.bind(user1);
let funcs = func(user1)
funcUser(); // John
console.log(funcs, '#') //undefined  funcs()Error--funcs not a function

let user2 = {
  firstName: 'Guoguang'
}
function func(phrame) {
  console.log(phrame + ', ' + this.firstName)
}
let funcUse = func.bind(user2)
funcUse('End') //End, Guoguang

let user3 = {
  firstName: 'Baishi',
  sayHi() {
    console.log(`Hello, ${this.firstName}`) //Hello, Baishi
  }
}
let speakHi = user3.sayHi.bind(user3) 
let speakHello = user3.sayHi(user3) 
speakHi() //Hello, Baishi
console.log(speakHello, '3') //undefined
setTimeout(speakHi, 1000) //Hello, Baishi

function mul(a, b) {
  return a * b;
}
let double = mul.bind(null, 2);
console.log( double(3), double(4), double(5) ); // 6  8  10

function part(func, ...argsBound) {
  return function(args) {
    return func.call(this, ...argsBound, ...args)
  }
}
let userpeople = {
  firstName: 'Guoguang',
  say(time, phrame) {
    console.log(`[${time}] ${this.firstName}: ${phrame}`)
  }
}
userpeople.sayNow = part(userpeople.say, new Date().getHours() + ':' + new Date().getMinutes())
userpeople.sayNow('Hello') //[11:24] Guoguang: H

let user4 = {
  name: 'R',
  say() {
    console.log(this.name)
  }
}
let hilt = user4.say
hilt() //undefined

let user5 = {
  name: 'nasa',
  sayHi() {
    let arrow = () => console.log(this.name)
    setTimeout(arrow, 2000)
  }
}
user5.sayHi() //(2 秒后)nasa

let users1 = {
  name: 'Jingshi',
  age: 16
}
let users2 = {
  name: 'buer',
  age: 16
}
function says() {
  let arrow = () => console.log(this.name, '**')
  setTimeout(arrow, 3000)
}
users1.f = says;
users2.f = says;
users1.f(); //Jingshi
users2.f(); //buer
users1['f'](); //Jingshi
users2['f'](); //buer

function makeUser() {
  return {
    name: 'baishi',
    user: this
  }
}
let other = makeUser()
console.log(other.user.name, '@@@') //Error: Cannot read property 'name' of undefined
function makeAdmin() {
  return {
    name: 'zhentian',
    user() {
      return this
    }
  }
}
let others = makeAdmin()
console.log(other.user.name, others.user().name, '@@@') //undefined zhentian

class User {
  static staticMethod() {
    console.log(this === User, '!!!')
  }
}
User.staticMethod() //true

class Animal {}
class Rabbit extends Animal {}
console.log(Rabbit.__proto__ === Animal); // true--静态
console.log(Rabbit.prototype.__proto__ === Animal.prototype); // true--常规
