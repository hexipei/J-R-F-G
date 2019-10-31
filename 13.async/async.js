async function f() {
  return 1
}
f().then(console.log)
async function f1() {
  return Promise.resolve(1)
}
f1().then(console.log)

async function f2() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('fight'), 2000)
  })
  let result = await promise
  let sum = promise
  console.log(result, ' ', sum) //fight   Promise { 'fight' }
}
f2() //两秒后 fight

class Thenable {
  constructor(num) {
    this.num = num
  }
  then(resolve, reject) {
    console.log(resolve)
    setTimeout(() => resolve(this.num * this.num), 1000)
  }
}
async function fr() {
  let result = await new Thenable(25)
  console.log(result) //[Function]
}
fr() //(一秒后)625

class Waiter {
  async wait() {
    return await Promise.resolve(0.618)
  }
}
new Waiter().wait().then(console.log) //0.618

async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return 10;
}
function fg() {
  wait().then(result => console.log(result));
}
fg(); //10
wait()

let range = {
  from: 1,
  to: 5
}
range[Symbol.iterator] = function() {
  return {
    current: this.from,
    last: this.to,
    next() {
      if(this.current <= this.last) {
        return {
          done: false,
          value: this.current++
        }
      }else {
        return {done: true}
      }
    }
  }
}
for(let num of range) {
  console.log(num) //1 2 3 4 5
}

let range1 = {
  from: 11,
  to: 15
}
for(let num in range1) {
  console.log(num, '#')
} // from to

let range2 = {
  from: 11, 
  to: 15,
  [Symbol.iterator]() {
    this.current = this.from
    return this
  },
  next() {
    if(this.current <= this.to) {
      return {
        done: false,
        value: this.current++
      }
    }else{
      return {
        done: true
      }
    }
  }
}
for(let num of range2) {
  console.log(num) //11 12 13 14 15
}

let range3 = {
  from: 21, 
  to: 25,
  [Symbol.iterator]() {
    this.current = this.from
    return this
  },
  next() {
    if(this.current <= this.to) {
      return {
        done: false,
        value: this.current++
      }
    }else{
      return {
        done: true
      }
    }
  }
}
range3[Symbol.iterator] = function() {
  return {
    current: this.from,
    last: this.to,
    next() {
      if(this.current <= this.last) {
        return {
          done: false,
          value: this.current++
        }
      }else {
        return {done: true}
      }
    }
  }
}
for(let num of range3) {
  console.log(num) //21 22 23 24 25
}

let str1 = '𝒳😂';
for (let char of str1) {
    console.log( char ); // 𝒳, and then 😂
}
for (let char of "test") {
  console.log( char ); // t e s t
}

let str = 'buer'
let iterable = str[Symbol.iterator]()
while(true) {
  let result = iterable.next()
  if(result.done) break
  console.log(result.value) // b u e r
}

let obj = {
  0: 'Game',
  1: 'End',
  length: 2
}
let arr = Array.from(obj)
console.log(arr.pop(), arr.push(), '!!!') //End 2

let arr1 = Array.from(range, num => num * num);
console.log(arr1); // 1,4,9,16,25

let str2 = '𝒳test';
let chars = Array.from(str2);
console.log(chars[0], chars[1], chars.length); // 𝒳 t 5

function slice(str3, start, end) {
  return Array.from(str3).slice(start, end).join('');
}
let str3 = '𝒳😂𩷶';
console.log( slice(str3, 1, 3) ); // 😂𩷶
console.log( str3.slice(1, 3) ); //��

function* generatorSequ() {
  yield 1;
  yield 2;
  yield 3;
  return 3
}
let generator = generatorSequ()
for (let value of generator) {
  console.log(value, '@@') //1 2 3
}
let one = generator.next()
console.log(JSON.stringify(one)) //{"value":1,"done":false}
let two = generator.next()
console.log(JSON.stringify(two)) //{"value":2,"done":false}
let three = generator.next()
console.log(JSON.stringify(three)) //{"value":3,"done":false}
let four = generator.next()
console.log(JSON.stringify(four)) //{"value":3,"done":true}
for (let values of generator) {
  console.log(values, '&@') //未输出
}

let range4 = {
  from: 31,
  to: 35,
  *[Symbol.iterator]() { // a shorthand for [Symbol.iterator]: function*()
    for(let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
};
console.log( [...range4] ); //[ 31, 32, 33, 34, 35 ]

function* gen() {
  let ask1 = yield '25*25=?'
  console.log(ask1)
  let ask2 = yield '22*22=?'
  console.log(ask2)
}
let generator1 = gen()
console.log(generator1.next().value) //25*25=? 
console.log(generator1.next(625).value) //22*22=?
console.log(generator1.next(484).done, generator1.next(484).value) //true

Promise.all([
  new Promise(resolve => setTimeout(() => resolve(618), 3000)),
  new Promise(resolve => setTimeout(() => resolve(666), 2000)),
  new Promise(resolve => setTimeout(() => resolve(886), 1000))
]).then(console.log) //[ 618, 666, 886 ]

Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("out!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).catch(console.log); // Error: out!

let range5 = {
  from: 41, 
  to: 50,
};
range5 = new Proxy(range5, {
  has(target, prop) {
    return prop >= target.from && prop <= target.to
  }
});
console.log(45 in range5, 60 in range5, '&&') //true false

function delay(f, ms) {
  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}
function sayHi(user) {
  console.log(`Hello, ${user}!`);
}
console.log(sayHi.length, '#'); // 1 
sayHi = delay(sayHi, 3000);
console.log(sayHi.length, '#'); // 0 

function delay1(f, ms) {
  return new Proxy(f, {
    apply(target, thisArg, args) {
      setTimeout(() => target.apply(thisArg, args), ms);
    }
  });
}
function sayHi1(user) {
  console.log(`Hello, ${user}!`);
}
console.log(sayHi1.length, '&'); // 1 
sayHi1 = delay1(sayHi1, 3000);
console.log(sayHi1.length, '&'); // 1 
sayHi1("John"); // Hello, John! (after 3 seconds)

let user = {}
Reflect.set(user, 'name', 'Json');
user = new Proxy(user, {
  get(target, prop, receiver) {
    console.log(`GET ${prop}`)
    return Reflect.get(target, prop, receiver)
  },
  set(target, prop, val, receiver) {
    console.log(`SET ${prop} = ${val}`)
    return Reflect.set(target, prop, val, receiver)
  }
})
let name = user.name //GET name
user.name = 'Buer' //SET name = Buer
