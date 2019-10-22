let row = {
  title: "welcome",
  teachers: ["kongqiu", "modi", "lier"],
  showlist() {
    this.teachers.forEach(
      teacher => console.log(this.title + ' ' + teacher)
    )
  },
  outputlist() {
    this.teachers.forEach(function(teacher){
      console.log(this.title + ' ' + teacher)
    })
  }
}
row.showlist() //welcome kongqiu  welcome modi  welcome lier
row.outputlist() //undefined kongqiu  undefined modi  undefined lier

function defer(f, ms) {
  return function() {
    setTimeout (()=> f.apply(this, arguments), ms)
  }
}
function hi(who) {
  console.log('hello'+ ' '+ who)
}
let hiDefered = defer(hi, 2000)
hiDefered("john")

function defer1(f, ms) {
  return function() {
    setTimeout(() => f.apply(arguments), ms)
  }
}
function hi1(who) {
  console.log('hello'+ ' ' + who)
}
let hiDefered1 = defer1(hi, 2000)
hiDefered1("ilter")//hello undefined

function defer2(f, ms) {
  return function() {
    setTimeout(() => f.apply(this), ms)
  }
}
function hi2(who) {
  console.log('hello'+ ' ' + who)
}
let hiDefered2 = defer2(hi, 2000)
hiDefered2("ilter")//hello undefined

function defered(f, ms) {
  return function(...args) {
    let ctx = this
    setTimeout(function() {
      return f.apply(ctx, args)
    }, ms)
  };
}
function hied(who) {
  console.log('hello'+ ' ' + who)
}
let dehiDefered2 = defered(hi, 2000)
dehiDefered2("ilter")//hello ilter

let animal = {
  name: "fruits",
  eat() {
    console.log(`${this.name} eats`)
  }
}
let rabbit = {
  _proto_: animal,
  name: "Apple",
  eat() {
    this._proto_.eat.call(this)
  }
}
rabbit.eat() // Apple eats

let animal1 = {
  name: "fruits",
  eat() {
    console.log(`${this.name} eats`)
  }
}
let rabbit1 = {
  __proto__: animal1,
  name: "Apple",
  eat() {
    super.eat()
  }
}
let longEar1= {
  __proto__: rabbit1,
  name: "Hi ilter h",
  eat() {
    super.eat()
  }
}
longEar1.eat() //Hi ilter h eats

const functions = (obj, inherited = false) =>
  (inherited
    ? [...Object.keys(obj), ...Object.keys(Object.getPrototypeOf(obj))]
    : Object.keys(obj)
  ).filter(key => typeof obj[key] === 'function');
function Foo() {
  this.a = () => 1;
  this.b = () => 2;
}
Foo.prototype.c = () => 3;
functions(new Foo()); // ['a', 'b']
functions(new Foo(), true); // ['a', 'b', 'c']

const functionName = fn => (console.debug(fn.name), fn);
functionName(Math.max); 

function sayHello() {
  return function() {
     console.log("Hi! liter h");
  }
}
sayHello();// 空
sayHello()();// Hi! liter h

var adder = {
  base : 1,
  add : function(a) {
    var f = v => v + this.base;
    return f(a);
  },
  addThruCall: function(a) {
    var f = v => v + this.base;
    var b = {
      base : 2
    };
    return f.call(b, a);
  }
};
console.log(adder.add(1));         //2
console.log(adder.addThruCall(2)); //3 都使用的是参数 a

let obj ={
  i: 10,
  b:() => (console.log(this.i, this)),
  c: function() {
    console.log(this.i, this)
  }
}
obj.b() //undefined {}
obj.c() //10 {}

let obj1 = {
  log: ['math', 'flutter', 'go'],
  get lastest() {
    if(this.log.length ==0) {
      return undefined
    }
    return this.log[this.log.length -1]
  }
}
console.log(obj1.lastest) //go

let language = {
  set current(name) {
    this.log.push(name)
  },
  log: []
}
language.current= 'EN'
language.current= 'zh-cn'
console.log(language.log) //[ 'EN', 'FA' ]

let obj2 = {
  log: ['math', 'flutter', 'go'],
  set lastest(log) {
    if(this.log.length ==0) {
      return undefined
    }
    return this.log[this.log.length -1]
  }
}
console.log(obj1.lastest, '1') //go

let pet = function(name) {          //外部函数定义了一个变量"name"
  let getName = function() { //内部函数
    console.log('liming', '1')           
    return name; 
  }
  return getName;//返回这个内部函数，从而内部函数暴露在外部函数作用域              
};
let myPet = pet('Vivie');
myPet(); //liming 

let createPet = function(name) {
  let sex;
  return {
    setName: function(newName) {name = newName;},
    getName: function() {return name;},
    getSex: function() {return sex;},
    setSex: function(newSex) {
      if(typeof newSex == "string" && (newSex.toLowerCase() == "male" || newSex.toLowerCase() == "female")) {sex = newSex;}
    }
  }
}
var pet1 = createPet("Vivie");
pet1.getName();                
pet1.setName("Oliver");
pet1.setSex("male");
pet1.getSex();                 
pet1.getName();

let createPet1 = function(name) {  // Outer function defines a variable called "name"
  return {
    setName: function(name) {    // Enclosed function also defines a variable called "name"
      name = name;
      console.log(1,'1')               // ??? How do we access the "name" defined by the outer function ???
    }
  }
}
createPet1() //空

function resolveAfter2Seconds1() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved，您好，您所拨打的魔罗正在忙碌中，请稍后再拨');
    }, 5000);
  });
}
async function asyncCall() {
  console.log('calling, 通过中');
  var result = await resolveAfter2Seconds1();
  console.log(result);
}
asyncCall();

var resolveAfter2Seconds = function() {
  console.log("starting slow promise");
  return new Promise(resolve => {
    setTimeout(function() {
      resolve("slow");
      console.log("slow promise is done");
    }, 2000);
  });
};
var resolveAfter1Second = function() {
  console.log("starting fast promise");
  return new Promise(resolve => {
    setTimeout(function() {
      resolve("fast");
      console.log("fast promise is done");
    }, 1000);
  });
};
var sequentialStart = async function() {
  console.log('==SEQUENTIAL START==');
  // 1. Execution gets here almost instantly
  const slow = await resolveAfter2Seconds();
  console.log(slow); // 2. this runs 2 seconds after 1.
  const fast = await resolveAfter1Second();
  console.log(fast); // 3. this runs 3 seconds after 1.
}
var concurrentStart = async function() {
  console.log('==CONCURRENT START with await==');
  const slow = resolveAfter2Seconds(); // starts timer immediately
  const fast = resolveAfter1Second(); // starts timer immediately
  // 1. Execution gets here almost instantly
  console.log(await slow); // 2. this runs 2 seconds after 1.
  console.log(await fast); // 3. this runs 2 seconds after 1., immediately after 2., since fast is already resolved
}
var concurrentPromise = function() {
  console.log('==CONCURRENT START with Promise.all==');
  return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
    console.log(messages[0]); // slow
    console.log(messages[1]); // fast
  });
}
var parallel = async function() {
  console.log('==PARALLEL with await Promise.all==');
  // Start 2 "jobs" in parallel and wait for both of them to complete
  await Promise.all([
      (async()=>console.log(await resolveAfter2Seconds()))(),
      (async()=>console.log(await resolveAfter1Second()))()
  ]);
}
// This function does not handle errors. See warning below!
var parallelPromise = function() {
  console.log('==PARALLEL with Promise.then==');
  resolveAfter2Seconds().then((message)=>console.log(message));
  resolveAfter1Second().then((message)=>console.log(message));
}
sequentialStart(); // after 2 seconds, logs "slow", then after 1 more second, "fast"
// wait above to finish
setTimeout(concurrentStart, 4000); // after 2 seconds, logs "slow" and then "fast"
// wait again
setTimeout(concurrentPromise, 7000); // same as concurrentStart
// wait again
setTimeout(parallel, 10000); // truly parallel: after 1 second, logs "fast", then after 1 more second, "slow"
// wait again
setTimeout(parallelPromise, 13000); // same as parallel

async function getProcessedData(url) {
  let v;
  try {
    v = await downloadData(url);
  } catch(e) {
    v = await downloadFallbackData(url);
  }
  try {
    return await processDataInWorker(v); // 注意 `return await` 和单独 `return` 的比较
  } catch (e) {
    return null;
  }
}
