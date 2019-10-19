let user = new Object()//Unexpected identifier
let use = {}
console.log(user, use, '1')//{} {} 1
use.admin = true
use.age = 5
console.log(use, '2')
delete use.age
console.log(use, '3')

let useor = {
  "like birds": "true",
  age: 5,
}
useor["like birds"] = true //Unexpected identifier 
console.log(useor, '4')
delete useor["age"]
console.log(useor, '5')

let key = "like birds"
user[key] = true
console.log(user[key], '6')
let user1 = {
  name: "John",
  age: 30
};
let key1 = ("What do you want to know about the user?", "name");
// access by variable
console.log( user1[key1] ); // John (if enter "name")
let key2 = "name"
console.log(user1.key2)//undefined

let fruit = 'apple'
let bag = {
  [fruit + ' ' + 'Computer']: 5
}
console.log(bag, '7')

let obj = {
  var: 1,
  let: 2,
  const: 3,
  return: 4,
}
console.log(obj.var + obj.let + obj.const + obj.return, '8')
console.log("var" in obj, "blanana" in obj, '81')
let obj1 = {}
obj1._proto_ = 5
console.log(obj1._proto_)
let use1 = {}
console.log( use1.noSuchProperty === undefined, '9' )

let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};
for (let code in codes) {
  console.log(code.key, '10'); //undefined
  console.log(code[key], '10'); //undefined
  console.log(code, '10'); // 1, 41, 44, 49
}
console.log( String(Math.trunc(Number("49"))), '11' )
console.log( String(Math.trunc(Number("+49"))), '11' )
console.log( String(Math.trunc(Number("1.9"))), '11' )

let user2 = { 
  name: "John",
  sizes: {
    width: 5
  },
};
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
Object.assign(user2, permissions1, permissions2)
console.log(user2, '12')
let clone = Object.assign({}, user2)
console.log(user2.sizes === clone.sizes, '12')
user2.sizes.width ++;
console.log(clone.sizes.width, user2.sizes.width, '12');
