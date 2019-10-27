let arr1 = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(6), 1000)
}).then(function(result) {
  console.log(result) //6
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(result * result), 1000)
  }).then(function(result) {
    console.log(result, '#') //36
  })
}).then(function(result) {
  console.log(result) //undefined
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(result), 1000)
  })
}).then(function(result) {
  console.log(result) //NaN
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(result * result), 1000)
  })
}).then(function(result) {
  console.log(result) //NaN
})