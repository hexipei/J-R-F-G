let bag = 'big'
let obj = {
  fav: 'red',
  well: 'out',
  bad: '&',
  price: 5,
  [bag + 'house']:0.618,
  [bag + "house"]:0.618,
  ['bag' + 'house']:0.618,
  ["bag" + "house"]:0.618,
}
console.log(obj["fav"], '+', obj['fav'], '+', obj.fav, obj.price) //red, 5
//console.log(obj[fav]) //Error, not defined
console.log(obj[0], '+', obj["0"], '+', obj['0']) //undefined
obj[0] //未输出
console.log(obj.bad) //undefined, delete obj.bad 后
obj.isYes = true 
console.log(obj) // { fav: 'red', well: 'out', bad: '&', isYes: true }
console.log(obj[5], obj[6], obj[7], obj[8], '+'  ) //undefined
console.log(obj["5"], obj["6"], obj["7"], obj["8"], '+') //undefined
console.log(obj['5'], obj['6'], obj['7'], obj['8'], '+') // undefined
console.log(obj["[bag + 'house']"],  obj["['bag' + 'house']"], '618') //undefined
console.log(obj['[bag + "house"]'], obj['["bag" + "house"]'], '0.618') // undefined

let data = [
  {
    fav: 'red',
    well: 'out',
    bad: '&',
    isYes: false
  }
]
console.log(data[0], data[0].isYes) // {{ fav: 'red', well: 'out', bad: '&', isYes: false }
console.log(data["fav"], '+', data['fav'], '+',data.fav, '1') //undefined
console.log(data[0], '+', data["0"], '+', data['0'], '2') // { fav: 'red', well: 'out', bad: '&', isYes: false }

let meta = ["red", "out", false]
console.log(meta[0], meta["0"], meta['0'])//red

let obj1 = {}
obj1._proto_ = 5
console.log(obj1._proto_) //[object, object] 或者 5
let objs = {}
let use = {age: 618}
let key = 'age'
console.log(obj1.noSuchproperty === undefined, '=') // true 代表没有这个属性
console.log('mac' in objs, '$', key in use) // true 代表存在，false 代表不存在

let user = {
  well: 'out',
  bad: '&',
  price: 5,
  '+886': 1,
  '+1': 2,
  '+68': 3,
  '+666': 4
}
for (let props in user) { 
  //非整数按照创建顺序排列, 整数按照升序排列，如果整数想按照创建顺序排列，需要 "+数字" / '+数字'转换为非整数
  console.log(props)//well  bad price   +886  +1  +68   +666
}
let isYes = user // 对对象内存地址的引用的复制，没有复制对象本身
let per = {age: 5}
let per1 = {age: 6, game: 'table'}
let per2 = {precess: 'km'}
Object.assign(per, per1, per2)
console.log(per, '1') //{ age: 6, game: 'table', precess: 'km' } '1' 会改变原来的属性

let proces = {
  name: 12138,
  hi() {
    console.log(this.name) 
    // proces.name 则 Error：Cannot read property 'name' of null，赋值给 null 后，不能赋值给 test 了
  }
}
proces.hi()
let test = proces
proces = null 
test.hi()

let users = {
  name: "John",
  hi() { console.log(this.name); },
  bye() { console.log("Bye"); }
};
users.hi(); // John 
(users.name == "John" ? users.hi() : users.bye()); // John

let buffer = new ArrayBuffer(32)
console.log(buffer.byteLength)
let arr32 = new Uint32Array([50, 1000, 20, 30])
let arr8 = new Uint8Array(arr32)
let arr16 = new Uint32Array(arr32.buffer)
console.log(arr8.length, arr8[1], arr16.byteLength)

//求最大值
let buffers = new Uint8Array([255, 255, 255, 255]).buffer;
let dataView = new DataView(buffers);
console.log( dataView.getUint8(3) ); // 255, 不超过 3 都可以
console.log( dataView.getUint16(0) ); // 65535， 不超过 7 都可以
console.log( dataView.getUint32(0) ); // 4294967295， 不超过 15 都可以
dataView.setUint32(0, 0); // 4字节的数设为零

let fruit = ['apple', 'banana', 'orange']
let array = fruit
for (let f of fruit){console.log(f)} // Apple, Orange, Pear 数组的 value, 不访问数组
for (let s in fruit){console.log(s, fruit[s])} //0 Apple, 1 Orange, 2 Pear 访问数组所有属性，返回 key, 比 for in慢 10～100 倍
console.log(array === fruit, array == fruit) // true true

let rar = [[9, 8, 7], [4, 5, 6], [1, 2, 3]]  // '[9, 8, 7], [4, 5, 6], [1, 2, 3]'
console.log(String(rar), String(rar) === '9,8,7,4,5,6,1,2,3')
console.log(String(rar) == '9,8,7,4,5,6,1,2,3') // true

let arr1 = ["I", "go", "home"];
delete arr1[1]; // remove "go"
console.log( arr1[1], arr1, arr1.length ); // undefined [ 'I', <1 empty item>, 'home' ] 3
arr1.splice(1, 1); // 
arr1.splice(2, 0, "complex", "language");
console.log(arr1) //[ 'I', 'home', 'complex', 'language' ]
arr1.splice(-2, 0) 
console.log(arr1, '1') //[ 'I', 'home', 'complex', 'language' ]
arr1.splice(-2, 0, 3, 4)
console.log(arr1) // [ 'I', 'home', 3, 4, 'complex', 'language' ]
arr1.splice(-2, 4, 4, 7)
console.log( arr1, arr1.length ); // [ 'I', 'home', 3, 4, 4 ] 5

let arr = ["t", "e", "s", "t"];
console.log( arr.slice(1, 3), arr.slice(-2, 2), arr.slice(2,-2)); // e,s  [] []
console.log( arr.slice(-2), arr.slice(-2, -2) ); //[ 's', 't' ] [] 

let arr3 = [1, 2];
console.log( arr3.concat([3, 4]) ); // 1,2,3,4
console.log( arr3.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6
console.log( arr3.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

let users1 = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];
let someUsers = users1.filter(item => item.id < 3);
console.log(someUsers.length); // 2

let rars = [1, 15, 2]
rars.sort()
console.log(rars) // 1, 15, 2
function numberc(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
rars.sort(numberc);
console.log(rars);  // 1, 2, 15