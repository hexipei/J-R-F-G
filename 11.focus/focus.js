function script(){
  console.log('3#')
  load()
}
function load() {
  console.log('1#')
  callback()
}
function callback() {
  console.log('2#')
}
load() //1  2
script() // 3  1  2

function call() {
  let n = 625
  console.log(n)
}
function hell() {
  for(let i=1; i<10; i++) {
    if (i===1) {console.log('谢谢惠顾')}
    else {
      if(i===2) {console.log('不着急')}
      else {
        if(i===4) {console.log('Start')}
        else {
          if(i===8) {console.log('out')}
          else {call()}
        }
      }
    }
  }
}
hell() //谢谢惠顾 不着急  625 Start 625 625 625 out 625
console.log('########')

function hello(m) {
  setTimeout(function calls() {
    if(m<=0) {console.log('game')}
    else if(m<1024) {console.log('out')}
    else {call()}
  }, 1000)
}
hello(1024)
console.log('@')

function hells(m) {
  new Promise(function(resolve, reject) {
    setTimeout(() => resolve(m>=1024), 3000)
  }).then(function(result) {
    if(result == true) {call()}
    else {console.log('error')}
  })
}
hells(1111)

function ask(question, yes, no) {
  if((question)) {yes()}
  else {no()}
}
ask(
  "Are apple fruits",
  function() {console.log('you are right')},
  function() {'think'}
)

let set = new Set(["oranges", "apples", "bananas"]);
for (let value of set) console.log(value);
set.forEach((value, valueAgain, set) => {
  console.log(value);
});

function loads(src) {}
let loadsPromise = function(src) {
  return new Promise((resolve, reject) => {
    loads(src, (err, script) => {
      if (err) reject(err)
      else resolve(script);
    });
  })
}
loadsPromise(1)

function promisy(f) {
  return function(...args) {
    return new Promise((resolve,reject) => {
      function callback(err, result) {
        if(err) {return reject(err)}
        else {resolve(result)}
      }
      args.push(callback)
      f.call(this, ...args)
    })
  }
}
let loady = promisy(loads)
loady()
function promisity(f, manyArgs = false) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      function callback(err, ...results) {
        if(err) {return reject(err)}
        else {resolve(manyArgs ? results : results[0])}
      }
      args.push(callback)
      f.call(this, ...args)
    })
  }
}
f = promisity(1, true)
console.log(f)

let user = {
  name: 'jingshi',
  age: 16,
  _password: '***'
}
let other = new Proxy(user, {
  ownKeys(target) {
    return Object.keys(target).filter(key => !key.startsWith('_'))
  }
})
for(let key in other) {
  console.log(key, '#')
}
console.log(Object.keys(other), Object.values(other)) //[ 'name', 'age' ] [ 'jingshi', 16 ]

let user1 = { };
user1 = new Proxy(user1, {
  ownKeys(target) {
    return ['a', 'b', 'c'];
  }
});
console.log( Object.keys(user1) ); //[]

let users = { };
others = new Proxy(users, {
  ownKeys(target) { // called once to get a list of properties
    return ['a', 'b', 'c'];
  },
  getOwnPropertyDescriptor(target, prop) { // called for every property
    return {
      enumerable: true,
      configurable: true
      /* ...other flags, probable "value:..."" */
    };
  }
});
console.log( Object.keys(others) ); // a, b, c
let user2 = {
  name: "John",
  _password: "secret"
};
console.log(user2._password); // secret
console.log(user2.__proto__ === Array.prototype, user2.__proto__.__proto__ === Object.prototype) //false false
console.log(users.__proto__ === Array.prototype, users.__proto__.__proto__ === Object.prototype) //false false

let users2 = { name: "buer" };
let access1 = { View: true };
let access2 = { Edit: true };
Object.assign(user2, access1, access2)
console.log(users2, '12')

let custom = {
  name: 'guoguang',
  _password: '***'
}
usepeople = new Proxy(custom, {
  get(target, prop) {
    if(prop.startsWith('_')) {
      throw new Error('error')
    }
    let value = new target[prop]
    return (typeof value === 'function') ? value.bind(target) : value
  }
})
try{
  console.log(usepeople._password, '&&')
} catch(e) {console.log(e.message), '&&'}
for(let key in usepeople) {
  console.log(key, 'K') //name _password
}