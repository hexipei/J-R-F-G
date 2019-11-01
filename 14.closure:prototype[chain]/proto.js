let animal = {
  eat: true,
  dance() {
    console.log('森巴舞步')
  }
}
let rabbit = {
  jump: true,
  __proto__ : animal
}
let bage = {
  eatT: 10,
  __proto__ : rabbit
}
console.log(animal.dance(), rabbit.dance(), bage.dance(), '#') //森巴舞步 森巴舞步 森巴舞步 undefined undefined undefined
bage.dance = function() {
  console.log('ha mei ha')
}
console.log(animal.dance(), rabbit.dance(), bage.dance(), '&') //森巴舞步 森巴舞步 hameiha undefined undefined undefined
