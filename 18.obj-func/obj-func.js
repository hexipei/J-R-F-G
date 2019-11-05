let user = {
  name: 'Jingshi',
  age: 16
}
for (let value of Object.values(user)) {
  console.log(value) //Jingshi 16
}
for (let key of Object.keys(user)) {
  console.log(key) //name age
}
for (let data of Object.entries(user)) {
  console.log(data) //[ 'name', 'Jingshi' ] [ 'age', 16 ]
}
function Count() {
  return Object.keys(user).length
}
console.log(Count(user)) //2

function sumSalaries(salaries) {
  return Object.values(salaries).reduce((a,b) => a + b, 0)
}
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
console.log( sumSalaries(salaries) ); // 650
let arr = ['Jingshi', 'Buer']
let [one, two] = arr
let [fristname, secondname] = 'Jingshi Buer'.split(' ')
console.log(one, two, fristname, secondname) //Jingshi Buer Jingshi Buer
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log( title ); // Consul
let use = {
  name: "John",
  age: 30
};
for (let [key, value] of Object.entries(use)) {
  console.log(`${key}:${value}`); // name:John, then age:30
}
let useone = new Map();
useone.set("name", "John");
useone.set("age", "30");
for (let [key, value] of useone) {
  console.log(`${key}:${value}`); // name:John, then age:30
}
let options = {
  title1: "Menu",
  height: 200,
  width: 100
};
let {title1, ...rest} = options;
console.log(rest.height, rest.width);  // 200 100
let title2, width, height;
//SyntaxError: Unexpected token '='
 ({title2, width, height} = {title2: "Menu", width: 200, height: 100});
 console.log(title2) //Menu
 let school = {
   lihai: {
     Jingshi: 100,
     Zhentian: 99
   },
   Qingchun: ['Buer', 'Shouzhong'],
   Shanchui: true
 }
 let {
   lihai: {
     Jingshi,
     Zhentian
   },
   Qingchun: [second, frist],
   Baosi = 'Baishi'
 } = school
 console.log(width, height, Baosi, frist, second)//200 100 'Baishi' 'Shouzhong' 'Buer'

  let option = {
  sitian: 'Zangzhijie',
  hign: ['Dechuan', 'Gui']
};
function showMenu({
  sitian = "Jin",
  width: w = 100,  
  height: h = 200, 
  hign: [first, second] 
}) {
  console.log( `${sitian} ${w} ${h}` );//Zangzhijie 100 200
  console.log( first, second ); //Dechuan Gui
}
showMenu(option);
let Jan01_1970 = new Date(0);
console.log( Jan01_1970 );
let Jan02_1970 = new Date(24 * 3600 * 1000);
console.log( Jan02_1970 );
let date = new Date(1939, 07, 2, 11, 45, 4, 567);
console.log( date ); // 1.01.2011, 02:03:04.567
console.log( new Date().getTimezoneOffset() );//-480 与 UTC 的时差
let date1 = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
console.log(date1); // ...is 1st Feb 2013!

function transfrom(dateone, datetwo) {
  return datetwo - dateone
}
function fromGetTime(dateone, datetwo) {
  return datetwo.getTime() - dateone.getTime()
}
function method(f) {
  let dateone = new Date(0)
  let datetwo = new Date()
  let start = Date.now()
  for(let i = 0; i < 100000; i++) {
    f(dateone, datetwo)
  }
  return Date.now() - start
}
let timeone = 0
let timetwo = 0
//transfrom 和 fromGetTime 交替执行 10 次，获得更精准的时间差
for(let i = 0; i < 10; i++) {
  timeone += method(transfrom)
  timetwo += method(fromGetTime)
}
console.log('transfrom time: ' + method(transfrom) + 'ms' ) //28ms
console.log( 'fromGetTime: ' + method(fromGetTime) + 'ms' ) //10ms
let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
console.log(ms); // 1327611110417  (timestamp)
let date2 = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );
console.log(date2); //2012-01-26T20:51:50.417Z
let user2 = {
  name: "John",
  age: 30,
  toString() {
    return `{name: "${this.name}", age: ${this.age}}`;
  }
};
//{ name: 'John', age: 30, toString: [Function: toString] } '{name: "John", age: 30}'
console.log(user2, user2.toString()); // {name: "John", age: 30}
let students = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['math', 'flutter', 'go'],
  life: null
};
let json = JSON.stringify(students)
//{"name":"John","age":30,"isAdmin":false,"courses":["math","flutter","go"],"life":null},string
console.log(json, typeof json) 
let obj = JSON.parse(json)
/*{ name: 'John', age: 30, isAdmin: false, courses: [ 'math', 'flutter', 'go' ], life: null } */
console.log(obj)

let user3 = {
  sayHi() { // ignored
    console.log("Hello");
  },
  [Symbol("id")]: 123, // ignored
  something: undefined // ignored
};
console.log( JSON.stringify(user3) ); {}

let room = {
  number: 23
};
let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room
};
room.occupiedBy = meetup; 
//{"title":"Conference","participants":[{"name":"John"},{"name":"Alice"}],"place":{"number":23}}
console.log( JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) );

let user4 = {
  name: "John",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true
  }
};
/*{"name": "John", "age": 25, 
    "roles": {"isAdmin": false, "isEditor": true}} */
console.log(JSON.stringify(user4, null, 2));

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let meetup1 = JSON.parse(str, function(key, value) {
  if (key == 'date') {return new Date(value);}
  return value;
});
console.log( meetup1.date.getDate() ); //30

let rooms = {
  number: 23
};
let meetups = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: rooms
};
rooms.occupiedBy = meetups;
meetups.self = meetups;
//由于属性中 既可以在属性中使用，也可以在循环引用中使用，需要删除循环引用 meetup 的可能
//{"title":"Conference","occupiedBy":[{"name":"John"},{"name":"Alice"}],"place":{"number":23}}
console.log( JSON.stringify(meetups, function replacer(key, value) {
  return (key != "" && value == meetups) ? undefined : value;
}));

let company = { 
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};
function sumSalaries(department) {
  if (Array.isArray(department)) { // case (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
  } else { // case (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); 
    }
    return sum;
  }
}
console.log(sumSalaries(company)); // 6700

function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}
console.log(pow(2, 10)) //1024
