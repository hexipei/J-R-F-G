let user = {
  well: 'out',
  bad: '&',
  price: 5,
}
for(let f of Object.keys(user)){
  console.log(f) //well bad price
}
for(let h of Object.values(user)){
  console.log(h) // out & 5
}
for(let g of Object.entries(user)){
  console.log(g) // [ 'well', 'out' ]  [ 'bad', '&' ]  [ 'price', 5 ]
}
console.log(Object.entries(user)) //[ [ 'well', 'out' ], [ 'bad', '&' ], [ 'price', 5 ] ]

let sum = {
  name: 'hi',
  price: 5,
  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.price;
  }
}
console.log(sum); // 
console.log(+sum); // hint: number -> 1000
console.log(sum + 500); // hint: default 505

let info = {
  name: 'hi',
  price: 5,
  toString() {
    return `{name: "${this.name}"}`
  },
  valueOf() {
    return this.price
  }
}
console.log(info)
console.log(+info)
console.log(info + 500)

let d = Object.getOwnPropertyDescriptor(info, 'name')
console.log(d) 
//{ value: 'hi', 是否可写 writable: true, 是否循环列出 enumerable: true, 是否可以删除并修改属性configurable: true }
let r = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(r)
console.log( JSON.stringify(r, null, 2 ) );

let user2 = { };
let a = Object.getOwnPropertyDescriptor(user2, "name")
console.log(a) //undefined
let de = Object.defineProperty(user2, "name", {
  value: "John",
  // 修改属性信息
  enumerable: true,
  configurable: true
});
let ed = Object.getOwnPropertyDescriptor(de, "name")
console.log(user.name, ed); // John  { value: 'John', writable: false, enumerable: true, configurable: true }
user.name = "Pete"; //未执行

let other = {
  well: 'end',
  bad: '&',
  number: '7:6',
  get full() {
    return `${this.well} : ${this.number}`
  }
}
console.log(other.full) //end : 7:6

let other1 = {
  get full() {
    return `${this.well} : ${this.number}`
  }
}
console.log(other1.full) //undefined: undefined

let other2 = {
  get full() {
    return 
  }
}
console.log(other2.full) //undefined

let other3 = {
  get full() {
    return ``
  },
  set full1(value) {
    [this.well, this.number] = value.split(" ") 
  }
}
other3.full1 = "going  178:178"
console.log(other3.full, other3.full1, other3.well, other3.number, '3') //空格 undefined

let other4 = {
  well: "end",
  number: "7:6",
  get full() {
    return `${this.well} ${this.number}`
  },
  set full1(value) {
    [this.well, this.number] = value.split(" ") 
  }
}
other4.full1 = "going 178:178"
console.log(other.full, other4.well, other4.number, '4') //end : 7:6 going 178:178 4

let other5 = {
  well: "end",
  number: "7:6",
  get full() {
    return `${this.well} ${this.number}`
  },
  set full(value) {
    [this.well, this.number] = value.split(" ") 
  }
}
other4.full = "going 178:178"
console.log(other.full, other4.well, other4.number, '4') //end : 7:6 going 178:178 4

function work(name, birthday) {
  this.name = name
  this.birthday = birthday
  Object.defineProperty(this, "age", {
    get() {
      let yeartoday = new Date().getFullYear()
      return yeartoday - this.birthday.getFullYear();
    }
  });
}
let wan = new work("wan", new Date(1912, 1, 1))
console.log(wan.birthday, wan.age)

let name = 'buer'
function show() {
  name = 'jingshi'
  let message = 'hi'+ ' ' + name
  console.log(message)
}
console.log('hello'+ ' ' + name)
show()
console.log('hello'+ ' ' + name)

function showMessage1(from, text) {
  from = '*' + from + '*'; // make "from" look nicer
  console.log( from + ': ' + text );
}
let from = "Ann";
showMessage1(from, "Hello"); // *Ann*: Hello
console.log( from ); // Ann

function checkAge(age) {
  if(age > 18) {
    return true
  }else {
    return ('18 ？ >=  : <')
  }
}
let age = ('age?, 请输入', 18)
if(checkAge(age)) {
  console.log('pass')
}else {
  console.log('inject')
}

function sos() {}
console.log(sos() === undefined) //true
function clone() {return}
console.log(clone() === undefined) //true
function clone1() {return true}
console.log(clone1() === undefined) //false
function clone2() {return false}
console.log(clone2() === undefined) //false
function clone3() {return undefined}
console.log(clone3() === undefined) //true

function ask(question, yes, no) {
  if(question) yes()
  else no()
}
ask('Do you agree?', 
  () => console.log('agree'), 
  () => console.log('ibject'))

  function asks(question, yes, no) {
    if(question) yes()
    else no()
  }
  function showyes() {
    console.log('agree')
  }
  function showno() {
    console.log('inject')
  }
asks('Do you agree?', showyes, showno)

let mult = n => n * n
console.log(mult(1024))
