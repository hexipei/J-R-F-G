class User {
  constructor(name) {
    this.name = name
  }
  sayHi() {
    console.log(this.name) 
  }
}
let user = new User('Buer')
user.sayHi() //Buer
console.log('------')
new User().sayHi()
console.log(typeof User, User.prototype.sayHi) //function sayHi(){}
console.log(User == User.prototype.constructor) //true
console.log(Object.getOwnPropertyNames(User.prototype))//[ 'constructor', 'sayHi' ]
console.log(Object.getOwnPropertyDescriptor(User.prototype))//undefined
console.log(Object.getOwnPropertySymbols(User.prototype))//[]

function Use(name) {
  this.name = name
}
Use.prototype.sayHi = function() {
  console.log(this.name)
}
let use = new Use('Jingshi')
use.sayHi() //Jingshi
console.log('------')

class Uses {
  constructor(name) {
    this.name = name
  }
  get name() {
    return this._name
  }
  set name(value) {
    if(value.length < 4) {
      console.log('name is too short')
      return
    }
    this._name = value
  }
}
let uses = new Uses('')
console.log(uses.name) //Buer
uses1 = new Uses('Bushi') //name is too short
console.log(uses1.name, '#') //undefined
uses2 = new Uses('Baishi') 
console.log(uses2.name, '#') //Baishi
let uses4 = new Uses('Zhentian')
console.log(uses4.name) //Zhentian
uses3 = new Uses('') //name is too short
console.log(uses3.name, '#') //undefined

class Users {
  constructor(name) {
    this.name = 'Zhentian'
  }
  sayHi() {
    console.log(`Hello ${this.name}`)
  }
}
new Users().sayHi()//Hello Zhentian

class Clock {
  constructor({ template }) {
    this.template = template
  }
  render() {
    let date = new Date()
    let hours = date.getHours()
    if (hours < 10) hours = '0' + hours;
    let mins = date.getMinutes()
    if (mins < 10) mins = '0' + mins;
    let secs = date.getSeconds()
    if (secs < 10) secs = '0' + secs;
    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);
    console.log(output)
  }
  stop() {
    clearInterval(this.timer)
  }
  start() {
    this.render()
    this.timer = setTimeout(() => this.render(), 1000)
  }
}
let clock = new Clock({template: 'h:m:s'})
clock.start() //当前时间

class PowerArray extends Array {
  isEmpty() {
    return this.length === 0
  }
}
let arr = new PowerArray(2, 4, 8, 16, 32, 64)
console.log(arr.isEmpty()) //false
let filterArr = arr.filter(item => item >= 10)
console.log(filterArr, filterArr.isEmpty())//PowerArray [ 16, 32, 64 ] false
console.log(arr.constructor === PowerArray) //true

class Rabbit {}
let rabbit = new Rabbit();
console.log( rabbit instanceof Rabbit, '#' ); // true
function Rabbit1() {}
console.log( new Rabbit1() instanceof Rabbit1, '3' ); // true
let arr1 = [1, 2, 3];
console.log( arr1 instanceof Array, arr1 instanceof Object );//true true
class Animal {
  static [Symbol.hasInstance](obj) {
    if(obj.canEat) return true
  }
}
let obj = { canEat: true }
console.log(obj instanceof Animal, '#')
class Color {}
class Red extends Color {}
let red = new Red()
console.log(red instanceof Color, '&') //true
console.log(Color.prototype.isPrototypeOf(red), '&')//true
console.log(red.__proto__ === Red.prototype, '#') //true
console.log(red.__proto__ == Red.prototype, '@') //true
console.log(red.__proto__ === Animal.prototype, '#') //false
console.log(red.__proto__ == Animal.prototype, '@') //false
console.log(red.__proto__.__proto__ === Red.prototype, '#') //false
console.log(red.__proto__.__proto__ == Red.prototype, '@') //false
console.log(red.__proto__.__proto__ === Animal.prototype, '#')//false
console.log(red.__proto__.__proto__ == Animal.prototype, '@')//false
console.log(red.__proto__.__proto__.__proto__ === Red.prototype, '#') //false
console.log(red.__proto__.__proto__.__proto__ == Red.prototype, '@') //false
console.log(red.__proto__.__proto__.__proto__ === Animal.prototype, '#') //false
console.log(red.__proto__.__proto__.__proto__ == Animal.prototype, '@') //false
console.log(Object.prototype.toString.call([]),Object.prototype.toString.call(1))
console.log(Object.prototype.toString.call(true),Object.prototype.toString.call(null))
console.log(Object.prototype.toString.call(undefined))
//[object Array] [object Number]  [object Boolean] [object Null] [object Undefined]
let username = {
  [Symbol.toStringTag]: 'User'
}
console.log({}.toString.call(username)) //[Object User]

function A() {}
function B() {}
A.prototype = B.prototype = {};
let a = new A();
console.log( a instanceof B, '#' ); // true

let helloMixins = {
  helloHi() {
    console.log(`hello ${this.name}`)
  },
  helloBye() {
    console.log(`bye ${this.name}`)
  }
}
class Userone {
  constructor(name) {
    this.name = name
  }
}
Object.assign(Userone.prototype, helloMixins)
new Userone('Jingshi').helloHi()//hello Jingshi
new Userone('Buer').helloBye() //bye Buer

let sayMixins = {
  say(what) {
    console.log(what)
  }
}
let sayHelloMixins = {
  __proto__: sayMixins,
  helloHi() {
    super.say(`Hello ${this.name}`)
  },
  helloBye() {
    super.say(`Bye ${this.name}`)
  }
}
class Usertwo {
  constructor(name) {
    this.name = name
  }
}
Object.assign(Usertwo.prototype, sayHelloMixins)
new Usertwo('Baishi').helloHi() //hello Baishi
new Usertwo('Baishi').helloHi//未执行
new Usertwo('Baishi').helloBye//未执行
console.log(new Usertwo('Baishi').helloHi())//undefined
console.log(new Usertwo('Baishi').helloHi)//[Function: helloHi]
new Usertwo('Baishi').helloBye() //Bye Baishi
console.log(new Usertwo('Baishi').helloBye())//undefined
