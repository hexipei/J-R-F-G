let fruit = {
  eat: true,
  sum() {
    console.log('无价')
  },
}
let apple = {
  sweet: true,
  walk(){} //并未被 loneLife 继承
}
apple.__proto__ = fruit
console.log(apple.eat, apple.sweet, fruit.eat, '$')
let bnanala = {
  dance: false,
  __proto__: fruit,
}
console.log(bnanala.eat, bnanala.dance, fruit.eat, '$$')
let loneLife = {
  liveLengh: 116,
  __proto__: apple,
}
loneLife.sum() //无价
console.log(loneLife.wakl, apple.wakl, '#$') //undefined undefined
console.log(loneLife.liveLengh) //116
loneLife.wakl = function() {
  console.log('静若处子')
}
loneLife.wakl() //静若处子

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
console.log(user.fullName, '@') //Xingcun Jingshi @
let admin = {
  __proto__: user,
  isAdmin: true
};
console.log(admin.fullName, '#'); // Xingcun Jingshi
admin.fullName = "Buer Zhouzhu"; 
console.log(admin.fullName, '##'); //Buer Zhouzhu  修改对象属性

let animal = {
  walk() {
    if (!this.isSleeping) {
      console.log(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  }
};
let cat = {
  name: "White cat",
  __proto__: animal
};
cat.sleep();
console.log(cat.isSleeping, animal.isSleeping, animal.sleep); // true undefined  [Function: sleep]
animal.sleep()
for(let prop in cat) {console.log(prop, '^')}
for(let props in cat) {
  let isOwn = cat.hasOwnProperty(props) //排除继承的属性
  if(isOwn) {
    console.log(`we: ${props} !%`) //we: name !%	we: isSleeping !%
  }else{
    console.log(`继承: ${props} %%`) //继承: walk %%	继承: sleep %%
  }
}

let mouse = {
  stomach: [],
  eat(food) {
    this.stomach.push(food);
  }
};
let tom = {
  __proto__: mouse,
};
let dazhuang = {
  __proto__: mouse,
};
tom.eat("apple");
console.log( tom.stomach ); //[ 'apple' ]
console.log( dazhuang.stomach, mouse.stomach ); //[ 'apple' ] [ 'apple' ]

let mouse1 = {
  stomach: [],
  eat(food) {
    this.stomach = [food];
  }
};
let tom1 = {
  __proto__: mouse1,
};
let dazhuang1 = {
  __proto__: mouse1,
};
tom1.eat("banana");
console.log( tom1.stomach ); //[ 'banana' ]
console.log( dazhuang1.stomach, mouse1.stomach ); //[] []

let mouse2 = {
  stomach: [],
  eat(food) {
    this.stomach.push(food);
  }
};
let tom2 = {
  __proto__: mouse2,
  stomach: [],
};
let dazhuang2 = {
  __proto__: mouse2,
  stomach: [],
};
tom2.eat("peach");
console.log( tom2.stomach ); //[ 'peach' ] 
console.log( dazhuang2.stomach, mouse2.stomach ); //[] []

let plants = {
  eated: true,
}
function Tree(name) {
  this.name = name
}
Tree.prototype = plants
let tree = new Tree("Walk Tree")
console.log(tree.eated, tree.name, '[]') //true 'Walk Tree' '[]'
console.log(plants.name, plants.eated, '**' ) //undefined true

function R1() {} //默认的 prototype---contructor 对象
let r = new R1() // 通过 [[prototype]] 给所有的 r 用
console.log(R1.prototype.constructor == R1, r.constructor == R1, '+') //true true
function Kola(name) {
  this.name = name
  console.log(name)
}
let kola = new Kola("gray kola") //gray kola
let kola1 = new kola.constructor("black kola") //black kola

function Rabbit() {}
Rabbit.prototype = {
  jumps: true
};
let rabbit = new Rabbit();
console.log(rabbit.constructor === Rabbit, '#'); // false
function Rabbit1() {}
Rabbit1.prototype = {
  jumps: true,
  constructor: Rabbit1
};//或者 Rabbit1.prototype.jumps = true
let rabbit1 = new Rabbit1();
console.log(rabbit1.constructor === Rabbit1, '#'); // true
let j = {}
let j1 = new Object()
console.log(j, j1, j1.__proto__ === Object.prototype, j1.__proto__ == Object.prototype) //{} {} true true
console.log(Object.prototype.__proto__) //null

let arr = [666, 618, 886, 888]
console.log(arr.__proto__ === Array.prototype, 
  arr.__proto__.__proto__ === Object.prototype, arr.__proto__.__proto__.__proto__) //true true null

String.prototype.show = function() {console.log(this)}
"Big Boom".show() //[String: 'Big Boom']
if(String.prototype.repeat) {
  String.prototype.repeat = function(n) {
    return new Array(n + 1).join(this)
  }
}
console.log("saga ".repeat(3), '#') //saga sage sage
console.log("saga".repeat(-1), '#') //未输出

function showArgs() {
  console.log(Array.prototype.join.call(arguments, " - "))
}
showArgs("jingshi", "zhouzhu", "guoguang")
function show() {
  console.log([].join.call(arguments, ' - '))
}
show('zangzhijie', 'xuanyilang', 'dechuan')

Function.prototype.defer = function(ms) {
  let f = this
  return function(...args) {
    setTimeout(() => f.apply(this, args), ms)
  }
}
function f(n) {
  console.log(n * n)
}
f.defer(1000)(25) //(一秒后)625

let animals = {
  eats: true
};
let bbit = Object.create(animals);
console.log(bbit.eats, '$'); // true
console.log(Object.getPrototypeOf(bbit) === animals, '$$'); // true
Object.setPrototypeOf(bbit, {}); // bbit 的原型改为 {}

let rab = Object.create(animals,{
  jump: {
    value: true
  }
})
console.log(rab.jump, '@') //true

let obj = Object.create(null);

let key = ("What's the key?", "__proto__");
obj[key] = "some value";
console.log(obj[key]); // "some value"

let ch = Object.create(null);
ch.hello = "你好";
ch.bye = "再见";
console.log(Object.keys(ch)); // hello,bye
