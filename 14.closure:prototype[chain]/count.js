function Counter() {
  let count = 0
  this.up = function() {
    return ++count
  }
  this.down = function() {
    return --count
  }
}
let counter = new Counter()
console.log(counter.up(), counter.up(), counter.down()) //1 2 1

function Counter1() {
  let count = 0
  this.up = function() {
    return count++
  }
  this.down = function() {
    return count--
  }
}
let counter1 = new Counter1()
console.log(counter1.up(), counter1.up(), counter1.down()) //0 1 2

function Counter2() {
  let count = 0
  this.up = function() {
    return ++count
  }
  this.down = function() {
    return count--
  }
}
let counter2 = new Counter2()
console.log(counter2.up(), counter2.up(), counter2.down()) //1 2 2

function Counter3() {
  let count = 0
  this.up = function() {
    return count++
  }
  this.down = function() {
    return --count
  }
}
let counter3 = new Counter3()
console.log(counter3.up(), counter3.up(), counter3.down()) //0 1 1
