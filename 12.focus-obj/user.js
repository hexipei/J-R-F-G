let user = {
  name: "John",
  hi() { console.log(this.name); },
  bye() { console.log("Bye"); }
};
user.hi(); // John
user.bye(); //Bye

console.log("------------");
user.name == "John" ? user.hi() : user.bye(); //John
(user.name == "John" ? user.hi : user.bye)(); //undefined
console.log("------------")
console.log(user.name == "John" ? user.hi : user.bye, '#')