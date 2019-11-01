function makeWorker() {
  let name = 'Buer'
  return function() {
    console.log(name)
  }
}
let name = 'Baishi'
let work = makeWorker()
work()  //Buer

function sayBye(firstName, lastName) {
  function getFulName() {
    return firstName + ' ' + lastName
  }
  console.log('hi, ' + getFulName())
  console.log('Baishi, ' + getFulName())
}
sayBye() //hi, undefined undefined    Baishi, undefined undefined
sayBye('Shouzhong', 'Guoguang') //hi, Shouzhong Guoguang    Baishi, Shouzhong Guoguang

function count() {
  return function() {
    return count++
  }
}
let counts = count()
let countrs = count()
console.log(counts(), counts(), counts()) //NaN NaN NaN
console.log(countrs(), countrs(), countrs()) //NaN NaN NaN
function count1() {
  let count = 0
  return function() {
    return count++
  }
}
let counts1 = count1()
let countrs1 = count1()
console.log(counts1(), counts1(), counts1()) // 0 1 2
console.log(countrs1(), countrs1()) //0 1

function f1() {
  let value1 = 123;
  let value2 = 456;
}
f();
function f() {
  let value = 123;
  function g() { console.log(value); }
  return g;
}
let func1 = f1(); 
console.log(func1, '#') //undefined

function Counter() {
  let count = 0
  this.up = function() {
    return ++count
  }
  this.down = function() {
    return --count
  }
}
let counter = new Counter()
console.log(counter.up(), counter.up(), counter.down()) //1 2 1

function getF() {
  let value = 'test'
  let func = function() {
    console.log(value)
  }
  return func
}
let gets = getF()
console.log(getF) //[Function: getF]
getF()() //test
gets() //test

function doesCounter() {
  function counter() {
    return counter.count++
  }
  counter.count = 0
  return counter
}
let countdoes = doesCounter()
console.log(countdoes(), countdoes()) //0 1
countdoes() //未执行
countdoes() // 未执行

function doCounter() {
  function counter() {
    return counter.count++
  }
  counter.count = 0
  return counter
}
let countdo = doCounter()
console.log(countdo(), countdo()) //0 1
countdo() //未执行
countdo() // 未执行
counter.count = 10
console.log(counter.count) //10

let animal = {
  eat: true,
  dance() {
    console.log('森巴舞步')
  }
}
let rabbit = {
  jump: true,
  __proto__ : animal
}
let bage = {
  eatT: 10,
  __proto__ : rabbit
}
console.log(rabbit.eat, rabbit.jump, rabbit.jumps) //true true undefined
rabbit.dance() //森巴舞步
bage.dance() //森巴舞步
console.log(bage.jumps, bage.jump, bage.eats) //undefined true undefined
console.log('--------')
console.log(animal.dance(), rabbit.dance(), bage.dance()) //森巴舞步 森巴舞步 森巴舞步 undefined undefined undefined
console.log('--------')
bage.dance = function() {
  console.log('ha mei ha')
}
bage.dance() //ha mei ha 
console.log(animal.dance(), rabbit.dance(), bage.dance()) //森巴舞步 森巴舞步 hameiha undefined undefined undefined
animal.dance() //森巴舞步
rabbit.dance() //森巴舞步
bage.dance() //ha mei ha

let users = {
  name: 'Buer',
  lastName: 'Zhouzhu',
  set fullName(value) {
    [this.name, this.lastName] = value.split(' ')
  },
  get fullName() {
    return `${this.name} ${this.lastName}`
  }
}
let admins = {
  __proto__ : users,
  isAdmin : true
}
console.log(admins.fullName) //Buer Zhouzhu 调用 users.get
admins.fullName = 'Xingcun Jingshi'
console.log(admins.fullName) //Xingcun Jingshi 调用 users.set

let user = {
  name: "Xingcun",
  surname: "Jingshi",
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};
let admin = {
  __proto__: user,
  isAdmin: true
};
console.log(admin.fullName, '#'); // Xingcun Jingshi
admin.fullName = "Buer Zhouzhu"; 
console.log(admin.fullName, '##'); //Buer Zhouzhu  修改对象属性

let data1 = {
  eats: true
}
let data2 = {
  jump: true,
  __proto__: data1
}
console.log(Object.keys(data2), Object.keys(data1)) //[ 'jump' ] [ 'eats' ]
for (let prop in data2) {
  console.log(prop) //jump eats
}

let data3 = {
  eats: true
}
let data4 = {
  jump: true,
  __proto__: data3
}
for(let prop in data4) {
  let isOwn = data4.hasOwnProperty(prop)
  if(isOwn) {
    console.log(`We: ${prop}`) //We: jump
  }else {
    console.log(`Other: ${prop}`) //Other: eats
  }
}
//代理和对象不同，如果用原来的代理作为键，proxy后，代理是找不到的
let allUsers = new Set()
class User {
  constructor(name) {
    this.name = name
    allUsers.add(this)
  }
}
let user2 = new User('jingshi')
console.log(allUsers.has(user2)) //true
user2 = new Proxy(user2, {})
console.log(allUsers.has(user2)) //false

let revokes = new WeakMap();
let object = {
  data: "Valuable data"
};
let {proxy, revoke} = Proxy.revocable(object, {});
revokes.set(proxy, revoke);
revoke = revokes.get(proxy);
revoke();
