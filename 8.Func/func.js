function slow(x) {
  console.log(`Call ${x}`)
  return x
}
function cDecorator(func) {
  let cache = new Map()
  return function(x) {
    if(cache.has(x)) {
      return cache.get(x)
    }else{
      let result = func(x)
      cache.set(x, result)
      return result
    }
  }
}
slow = cDecorator(slow)
console.log(slow(12138), '&')
console.log( "Again: " + slow(12138), '$' ); //Call 1  1   Again: 1
console.log(slow(618), '#') //Call 618  618 '#'
console.log( "Again: " + slow(886), '##' ); //Call 886  Again: 886 ##

function sayHi() {
  console.log(this.name);
}
let user = { name: "John" };
let admin = { name: "Admin" };
// 使用 call 将不同的对象传递为 "this"
sayHi.call( user ); //this = John
sayHi.call( admin ); //this = Admin

let worker = {
  someMethod() {
    return 25
  },
  slow(x) {
    console.log(`Called ${x}`)
    return x * this.someMethod()
  }
}
function cathDecorator(func) {
  let cache = new Map()
  return function(x) {
    if(cache.has(x)) {
      return cache.get(x)
    }else{
      let result = func.call(this, x) //传递 this
      cache.set(x, result)
      return result
    }
  }
}
worker.slow = cathDecorator(worker.slow) //将 this 和参数缓存
console.log(worker.slow(4)) //100
console.log(worker.slow(4)) //100
console.log(worker.slow(25)) //Called 25  625
console.log(worker.slow(2)) //Called 2  50

function example(age, out) {
  console.log(`${age}: ${this.count} ${out}`)
}
let number = {count: '178:176'}
let dota = ['1:00', 'End']
example.apply(number, dota) //1:00: 178:176 End
example.call(number, ...dota) //1:00: 178:176 End

let work = {
  slow(min, max) {
    console.log(`Called ${min}, ${max}`)
    return min + max
  }
}
function cachingDecorator(func, hash) {
  let cache = new Map()
  return function() {
    let key = hash(arguments)
    if(cache.has(key)) {
      return cache.get(key)
    }
    let result = func.apply(this, arguments)
    cache.set(key, result)
    return result
  }
}
function hash(args) {
  return args[0] + ',' + args[1]
}
work.slow = cachingDecorator(work.slow, hash)
console.log(work.slow(618, 886), '#') //Called 618, 886   1504 '#'
console.log('Again'+ ' ' + work.slow(618, 886), '##') //Again 1504 ##
console.log(work.slow(666, 888), '&') //Called 666, 888   1554 '&'
console.log('Again'+ ' ' + work.slow(888, 666), '&&') //Called 888, 666   Again 1554 &&

let wrapper = function() {
  return Function.apply(this, arguments);
};

function hash(args) {
  return args[0] + ' ' + args[1]
}
console.log(hash)

function hash1() {
  console.log( [].join.call(arguments), '#&' ); // hi,buer #&
}
hash1('hi', 'buer');

let user1 = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  }
};
setTimeout(user1.sayHi, 1000); //Hello, undefined!

let huser = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  }
};
let f = huser.sayHi;
setTimeout(f, 1000); //hello undefined

let user2 = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  }
};
setTimeout(() => user2.sayHi(), 1000); // Hello, John!

let user3 = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  }
};
let bindfunc = user3.sayHi.bind(user3)
setTimeout(() => bindfunc(), 1000); // Hello, John!
setTimeout(bindfunc, 1000); // Hello, John!

let user4 = {
  firstName: "John",
  sayHi(phrase) {
    console.log(`${phrase}, ${this.firstName}!`, '@');
  }
};
let bindfuncs = user4.sayHi.bind(user4)
bindfuncs("hi")
bindfuncs("bye")

function fs() {
  console.log(this.name);
}
fs = fs.bind( {name: "Jingshi"} ).bind( {name: "zhouzhu"} );
fs(); // Jingshi

let group = {
  name: "long: meng",
  counts: ["176:178", "88:86"],
  showList() {
    this.counts.forEach(
      student => console.log(this.name + ': ' + student)
    );
  }
};
group.showList();//long: meng: 176:178    long: meng: 88:86

function deDefer(f, ms) {
  return function() {
    setTimeout(() => f.apply(this, arguments), ms)
  };
}
function seeHi(who) {
  console.log('Start, ' + who);
}
let seeHideDeferred = deDefer(seeHi, 2000);
seeHideDeferred("End"); // (2 秒后)Start, End

function after(f, ms) {
  return function(...args) {
    let ctx = this;
    setTimeout(function() {
      return f.apply(ctx, args);
    }, ms);
  };
}
function lookHi(who) {
  console.log('Game, ' + who)
}
let seeHideDefer = after(lookHi, 2000);
seeHideDefer("end") ;//Game end
