function pow (x, n) {
  if (n == 1){
    return x;
  }
  else {
    return x * pow(x, n-1);
  }
}
console.log( pow(1, 2), pow(32, 2) )//1 1024

function pow (x, n) {
  return (n == 1) ? x : (x * pow(x, n-1));
}
console.log( pow(1, 2), pow(100001, 2) )//1 576

let company = { // the same object, compressed for brevity
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1200}]
  }
};
function sumSalaries(departerment) {
  if( Array.isArray(departerment) ) {
    return departerment.reduce((prev, current) => prev + current.salary, 0)
  }
  else{
    let sum = 0
    for ( let subdep of Object.values(departerment)) {
      sum += sumSalaries(subdep)
    }
    return sum
  }
}
console.log(sumSalaries(company))

function sumAll(...args) {
  let sum = 0
  for(let arg of args) sum += arg
  return sum
}
console.log(sumAll(668, 886))//1554

function showTime (firstName, lastName, ...title) {
  console.log(firstName + ' ' + lastName)//hi ih
  console.log(title[0], title[1], title[2])//liming ming aha
  console.log(title.length)//3
}
showTime("hi", "ih", "liming", "ming", "aha")

function showName() {
  console.log( arguments.length );
  console.log( arguments[0] );
  console.log( arguments[1] );
}
showName("Julius", "Caesar");// shows: 2, Julius, Caesar
showName("Ilya");//shows: 1, Ilya, undefined 因为没有第二个元素

function f() {
  let showArg = () => console.log(arguments[0]);
  showArg();
}
f(1); // 1

let arr = [3, 5, 1];
console.log( Math.max(arr), Math.max(...arr) ); // NaN Math.max需要一个数字参数列表，而不是单个数组

let arr1 = [2, 4, 6, 7, 8]
let arr2 = [1, 9, 8, 7, 0]
let meta = (Math.max(65536, ...arr1, ...arr2, 625))
console.log(meta)

let str = "Hello";
console.log( [...str] ); // H,e,l,l,o 将字符串转换为字符数组
console.log( Array.from(str) ); // H,e,l,l,o 将迭代的内容(如字符串)转换为数组

let name = "John";
function sayHi() {
  console.log("Hi, " + name);
}
name = "Pete"; 
sayHi(); // Pete

function makeWorker() {
  let name1 = "Pete";
  return function() {
    console.log(name1);
  };
}
let name1 = "John";
let work = makeWorker();
work(); // Pete

let phrase = "hello"
if(true) {
  let user = "john"
  console.log(`${phrase}, ${user}`)
}

function f() {
  let value = 123;
  function g() { console.log(value); }
  return g;
}
let g = f(); // while g 是存在的
g()
g = null; // g 是被清除了

setTimeout(() => console.log('Hello'), 1000);//一秒后输出 hello

let timerId = setTimeout(() => console.log("never happens"), 1000);
console.log(timerId); // timer identifier
clearTimeout(timerId);
console.log(timerId); 

 // repeat with the interval of 2 seconds
let timerId1 = setInterval(() => console.log('tick'), 2000);
// after 5 seconds stop
setTimeout(() => { clearInterval(timerId1); console.log('stop'); }, 5000);

let timerId2 = setTimeout(function tick() {
  console.log('tick');
  timerId2 = setTimeout(tick, 2000); // (*)
}, 2000);
clearTimeout(timerId2);

let start = Date.now();
let times = [];
setTimeout(function run() {
  times.push(Date.now() - start); // remember delay from the previous call

  if (start + 10 < Date.now()) console.log(times); // show the delays after 100ms
  else setTimeout(run); // else re-schedule
});

function slow(x) {
  console.log(`Called with ${x}`)
  return x
}
function cathingDecorator(func) {
  let cache = new Map()
  return function(x) {
    if(cache.has(x)){
      return cache.get(x)
    }
    let result = func(x)
    cache.set(x, result)
    return result
  }
}
slow = cathingDecorator(slow)
console.log(slow(1))
console.log("again" + slow(1))
console.log(slow(2))
console.log("again" + slow(2)) //Called with 1  1   again1  Called with 2   2   again2

let worker = {
  someMethod() {
    return 1
  },
  slow(x) {
    console.log("Called with " + x);
    return x * this.someMethod();
  }
}
function cachingDecorator2(func) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func.call(this, x); //
    cache.set(x, result);
    return result;
  };
}
worker.slow = cachingDecorator2(worker.slow); 
console.log( worker.slow(2) ); 
console.log( worker.slow(2) ); //Called with 2    2   2

let worker3 = {
  slow(min, max) {
    console.log(`Called with ${min},${max}`);
    return min + max;
  }
};
function cachingDecorator3(func, hash) {
  let cache = new Map();
  return function() {
    let key = hash(arguments); // (*)
    if (cache.has(key)) {
      return cache.get(key);
    }
    let result = func.call(this, ...arguments); // (**)
    cache.set(key, result);
    return result;
  };
}
function hash(args) {
  return args[0] + ',' + args[1];
}
worker3.slow = cachingDecorator3(worker3.slow, hash);
console.log( worker3.slow(3, 5) ); // works
console.log( "Again " + worker3.slow(3, 5) ); // same (cached)
