let fruit = []
console.log(fruit.length) //0
let obj = {}
console.log(obj.length) //undefined
let arr = ['apple', {name: 'Buer'}, true, 
  function() {
    console.log('hello')
  }
]
console.log(arr[3])
arr[3]() //hello
let red = arr
console.log(red === arr) //true
let nulls = []
nulls[999999] = 5
nulls.age = 25
//严格模式下是 999999个 . 后一个 5 ，不输出 age
console.log(nulls) //[ <999999 empty items>, 5, age: 25 ]
let fruits = ["Apple", "Orange", "Plum"];
for (let fruit of fruits) {
  console.log( fruit ); //Apple Orange Plum
}
let arrone = [1, 2, 3, 4, 5]
arrone[12] = 5
console.log(arrone.length, arrone) //13 [ 1, 2, 3, 4, 5, <7 empty items>, 5 ]
arrone.length = 5 //length 减少
console.log(arrone[6]) //undefined 减少过程不可逆
console.log([] + 1, [] - 1) //1 ~"" + 1 = "1", -1
console.log([1] + 1) //11 ~"1" + 1 = "11"
console.log([1, 2] + 1, [1, 2] - 1) //1, 21 ~"1, 2" + 1 = "1, 21", NaN 并不知道是对哪一个做减法
let arr1 = ["I", "go", "home"];
delete arr1[1]; // 删除了 "go"
console.log( arr1[1] ); // undefined
console.log( arr1.length, arr1); // 3 [ 'I', <1 empty item>, 'home' ]
arr1.splice(1, 1)
console.log(arr1, arr1.splice(1, 1)) //[ 'I', 'home' ]
let arr2 = ["I", "go", "home"];
delete arr2[1]; // 删除了 "go"
console.log(arr2)
arr2.slice(1, 2)
console.log(arr2) //[ 'I', <1 empty item>, 'home' ]
let arr3 = [1, 2];
console.log( arr3.concat([1, 2]) );
console.log( arr3.concat([3, 4]) ); // 1,2,3,4
console.log( arr3.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6
console.log( arr3.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6
let arr4 = [618, 886]
let arrayLive = {
  say: 'End',
  length: 0.618
}
console.log(arr4.concat(arrayLive)) //[ 618, 886, { say: 'End', length: 0.618 } ]
let arr5 = [1, 0, false, NaN];
console.log( arr5.indexOf(0), arr5.indexOf(false), arr5.indexOf(null) ); // 1 2 -1
console.log( arr5.includes(1), arr5.includes(true) ); //true false
console.log( arr5.lastIndexOf(0), arr5.lastIndexOf(false), arr5.lastIndexOf(null)) //1 -2 -1
console.log( arr5.includes(NaN)) //true
console.log( arr5.indexOf(NaN), arr5.lastIndexOf(NaN)) //-1 -1 NaN 不等于任何值
let users = [
  {id: 1, name: "Jingshi"},
  {id: 2, name: "Zhouzhu"},
  {id: 3, name: "Zangzhijie"},
  {id: 4, name: "Xuanyilang"}
];
let user = users.find(item => item.id == 1);
console.log(user.name); // Jingshi
function compartNumber(a, b) {
  if(a >= b) {
    console.log(a, b, arr6, '#')
    return true
  }else{
    console.log(a, b, arr6, '&')
    return false
  }
}
let arr6 = [668, 886, 618, 1000]
console.log(arr6.reverse(), '#')
console.log(arr6.sort(compartNumber)) //[ 618, 668, 886, 1000 ]
function compartNumbers(a, b) {
  if(a >= b) {
    console.log(a, b, arrs6, '#')
    return a
  }else{
    console.log(a, b, arrs6, '&')
    return b
  }
}
let arrs6 = [668, 886, 618, 1000]
console.log(arrs6.sort(compartNumbers)) //[ 1000, 618, 886, 668 ]
console.log(arrs6.reverse())
let arrtwo = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);
console.log(arrtwo); //[ 'Bilbo', 'Gandalf' ]
let arrthree = ['Bilbo', 'Gandalf', 'Nazgul'];
let str = arrthree.join('--'); // glue the array into a string using ;
console.log( str ); //Bilbo--Gandalf--Nazgul
let arrfour = [6, 8, 66, 68, 86, 88, 618, 666, 668, 688, 866, 868, 886, 888]
let result = arrfour.reduce((fail, error) => fail + error, 0)
console.log(result) //6470
let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};
let users1 = [
  {age: 16},
  {age: 20},
  {age: 23},
  {age: 30}
];
let soldiers = users1.filter(army.canJoin, army);
console.log(soldiers.length); // 2
console.log(soldiers[0].age, soldiers[1].age); // 20 23

function camelize(str) {
  return str
    .split('-') //去除 -
    .map( //从 -所在的位置开始，后面第一个标志为0，加上后面的式子
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('')
}
console.log(camelize("-baishi-zangzhijie"), camelize('-xingcun-jingshi'))
console.log(camelize('-buer-zhouzhu'), camelize('-zhentian-xianyilang'))

let range = {
  from: 1,
  to: 5
};
range[Symbol.iterator] = function() {
  return {
    current: this.from,
    last: this.to,
    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};
for (let num of range) {
  console.log(num); // 1, then 2, 3, 4, 5
}
let map = new Map()
map.set('1', 'str1').set(1, 'num1').set(true, 'bool1').set(false, 0)
//Map { '1' => 'str1', 1 => 'num1', true => 'bool1', false => 0 }
console.log(map)

function unique(arr) {
  return Array.from(new Set(arr));
}
let values = ["Buer", "Shouzhong", "Xingcun", "Zhentian", "Zhentian",
  "Baishi", "Jintailang", "Rujiang", "Gui", "Dechuan", "Dechuan"
];
console.log( unique(values) ); /*[ 'Buer', 'Shouzhong', 'Xingcun', 'Zhentian', 'Baishi', 'Jintailang', 'Rujiang', 'Gui', 'Dechuan' ] */
function aclean(arrfive) {
  let map = new Map();
  for (let word of arrfive) {
    let sorted = word// PAN
    .toLowerCase() // pan
    .split('') // ['p','a','n']
    .sort() // ['a','n','p']
    .join(''); // anp
    map.set(sorted, word); //[ 'PAN', 'hectares', 'era' ]
  }
  return Array.from(map.values());
}
let arrfive = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log( aclean(arrfive) )

let maps = new Map()
maps.set('age', 'time', 'success')
let keys = Array.from(maps.keys())
keys.push('more')
console.log(keys) //[ 'age', 'more' ]
let weakMap = new WeakMap()
let obj1 = {}
let obj2 = {}
weakMap.set(obj1, 'ok')
weakMap.set(obj2, 'Where')
console.log(obj1, obj2) //{} {}

let cache = new Map()
function process(obj) {
  if(!cache.has(obj)) {
    let result= /* calculations of the result for */ obj
    cache.set(obj, result)
  }
  return cache.get(obj)
}
let objs = {/* let's say we have an object */};
let result1 = process(obj)
let result2 = process(obj)
objs = null
console.log(cache.size) //1

let visitSet = new WeakSet()
let Jingshi = {name: 'Jingshi'}
let Buer = {name: 'Buer'}
let Baishi = {name: 'Baishi'}
let Zhentian = {name: 'Zhentian'}
visitSet.add(Jingshi)
visitSet.add(Baishi)
visitSet.add(Jingshi) //添加了两次，现在 visitSet 有两个使用者
console.log(visitSet.has(Jingshi), visitSet.has(Zhentian))//true false

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];
let readMap = new WeakMap();
readMap.set(messages[0], new Date(2017, 1, 1));
console.log(readMap)

let messages1 = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();
readMessages.add(messages1[0]);
readMessages.add(messages1[1]);
readMessages.add(messages1[0]);
console.log("Read message 0: " + readMessages.has(messages1[0])); //Read message 0: true
messages.shift();
