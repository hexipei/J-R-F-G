let promise = Promise.resolve()
promise.then(() => console.log('promise'))
console.log('End') //End promise
Promise.resolve()
  .then(() => console.log("promise done!"))
  .then(() => console.log("code finished"));//promise done! code finished  
let i = 0
let start = Date.now()
function count() {
  for(let j = 0; j < 6180000; j++) {
    i++
  }
  console.log('Do ' +(Date.now() - start) + 'ms')
}
count() //36ms----1900000000~Do 9511 ms
function countone() {
  do{
    i++
  }while(i % 100000 !=0)
  if(i == 100000000) {
    console.log('Do ' +(Date.now() - start) + 'ms', '#')
  }else {
    setTimeout(countone)
  }
}
countone()//2495ms----1e6-1e9~Do 8238 ms
function counttwo() {
  if(i < 100000000 - 1000000) {
    setTimeout(counttwo)
  }
  do{
    i++
  }while(i % 100000 !=0)
  if(i == 100000000) {
    console.log('Do ' +(Date.now() - start) + 'ms', '&')
  }
}
counttwo()//1151ms----
setTimeout(() => console.log("timeout"), '#');
Promise.resolve()
  .then(() => console.log("promise"), '#');
console.log("code")
Promise.resolve()
  .then(() => console.log("promise"), '^');
console.log("code")
setTimeout(() => console.log("timeout"), '^');
Promise.resolve()
  .then(() => console.log("promise"), '^')
  .then(() => console.log("otner"), '^')
console.log("start")
setTimeout(() => console.log("End"), '^');
setTimeout(() => console.log("Buer"), '^');
Promise.resolve()
  .then(() => console.log("Jingshi"), '^')
  .then(() => console.log("Baishi"), '^')
console.log("Zhentian")
console.log(eval('25 * 25')) //625
console.log(eval('let i=0; ++i')) //1
let value = eval('let i=2; ++i')
console.log(value) //3
let a = 1
function f() {
  let a = 0.618
  eval(console.log(a, '#'))//0.618
}
f()
function fs() {
  a = 0.618
  eval(console.log(a, '&'))//0.618
}
fs()
let x = 886
eval('x = 0.618')
console.log(x, '!') //0.618
eval(console.log('x = 666'))
console.log(x, '@') //0.618
eval('let t = 5; function text() {}')
console.log(typeof t, '%')//undefined

function curry(f) {
  return function(a) {
    return function(b) {
      return f(a, b)
    }
  }
}
function result(a, b) {
  return a * b
}
let curried = curry(result)
console.log(curried(1, 2), curried(32)(32))//[Function] 1024

function log(date, importance, message) {
  console.log(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}
log(new Date(), 'error', 'some error') //[15:18] [error] some error
let nowLog = log(new Date())
console.log(nowLog)

function currys(func) {
  return function curried(...args) {
    if(args.length >= func.length) {
      return func.apply(this, args)
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
}
currys()
function results(a, b, c) {
  return a * b * c
}
let curris = currys(results)
console.log(curris(12, (13, 15)), curris((6, 7), 8), '#') //[Function] [Function]
console.log(curris(12)(13, 15), curris(6, 7)(8), '#') //2340 1800
console.log(curris(6, 7, 8), curris(10, 12, 15), '#')//336 1800
console.log(curris(6), curris(6, 7))////[Function] [Function]
console.log(curris()(12, 13))////[Function]
console.log(curris(NaN), curris(NaN)(NaN)(NaN), '$') //[Function] NaN 
console.log(curris(NaN)(), curris()(NaN), curris(NaN)(NaN), '$')//[Function] [Function] [Function]
console.log(curris()()(NaN), curris(NaN)()(), curris()(NaN)(), '$')//[Function] [Function] [Function]
console.log(curris()(NaN)(NaN), curris(NaN)(NaN)(), '$')//[Function] [Function]
console.log(curris(true), curris(true)(true)(true), '%') //[Function] 1
console.log(curris(true)(), curris()(true), curris(true)(true), '%')//[Function] [Function] [Function]
console.log(curris(true)()(), curris()(true)(), curris()()(true), '%')//[Function] [Function] [Function]
console.log(curris(true)(true)(), curris()(true)(true), '%')//[Function] [Function]
console.log(curris(undefined), curris(undefined)(undefined)(undefined), '&')//[Function] NaN 
console.log(curris(undefined)(), curris()(undefined), curris(undefined)(undefined), '&')//[Function] [Function] [Function]
console.log(curris(undefined)()(), curris()(undefined)(), curris()()(undefined), '&')//[Function] [Function] [Function]
console.log(curris(undefined)(undefined)(), curris()(undefined)(undefined), '&')//[Function] [Function]
console.log(curris(null), curris(null)(null)(null), '@')//[Function] 0
console.log(curris(null)(), curris()(null), curris(null)(null), '@')//[Function] [Function] [Function] 
console.log(curris(null)()(), curris()(null)(), curris()()(null), '@')//[Function] [Function] [Function] 
console.log(curris(null)(null)(), curris()(null)(null), '@')//[Function] [Function]

function showFile(input) {
  let file = {
    name: 16,
    lastModified: 'Baishi'
  }
  console.log(`File name: ${file.name}`); // e.g my.png
  console.log(`Last modified: ${file.lastModified}`); // e.g 1552830408824
}
console.log(showFile(), showFile, '#') //undefined [Function: showFile]
showFile() //File name: 16  Last modified: Baishi
showFile //File name: 16  Last modified: Baishi

function readFile(input) {
  let file = {
    name: 16,
    lastModified: 'Baishi'
  }
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function() {
    console.log(reader.result);
  };
  reader.onerror = function() {
    console.log(reader.error);
  };
}
readFile

let map = new Map([
  ['red', 500],
  ['green', 300],
  ['pink', 200]
])
for(let color of map.keys()) {
  console.log(color, '!!!') //red green pink
}
for(let amout of map.values()) {
  console.log(amout, '@@@') //500 300 200
}
for(let entry of map) {
  console.log(entry, '$$$')
//[ 'red', 500 ] '$$$' [ 'green', 300 ] '$$$' [ 'pink', 200 ] '$$$'
}
map.forEach((value, key, map) => {
  console.log(`{key}: ${value}`) //{key}: 500 {key}: 300 {key}: 200
})
console.log(map.length, '******')
for(let i of map) {
  console.log(map.get(i), '^^^')//undefined
}
console.log(map.get('red'), '时间')//500

let maps = new Map();
maps.set('banana', 1);
maps.set('orange', 2);
maps.set('meat', 4);
console.log(maps.orange); // 2
