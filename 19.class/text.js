let arr = [-1, 1, 2, 0, true, false]
for(i=0; i<arr.length; i++) {
  if(!false) {
    console.log('&&&&&&', `${i}`)
  }
  else {
    console.log('$$$$$$', `${i}`)
  }
} //&&&&&& 0~5
console.log('----------------')
for(i=0; i<arr.length; i++) {
  if(!true) {
    console.log('&&&&&&', `${i}`)
  }
  else {
    console.log('$$$$$$', `${i}`)
  }
} //$$$$$$ 0~5
console.log('----------------')
for(i=0; i<arr.length; i++) {
  if(!0) {
    console.log('&&&&&&', `${i}`)
  }
  else {
    console.log('$$$$$$', `${i}`)
  }
} ////&&&&&& 0~5
console.log('----------------')
for(i=0; i<arr.length; i++) {
  if(!-1) {
    console.log('&&&&&&', `${i}`)
  }
  else {
    console.log('$$$$$$', `${i}`)
    return
  }
} ////$$$$$$ 0~5
for(i=0; i<arr.length; i++) {
  if(!-1) {
    console.log('&&&&&&', `${i}`)
  }
  else {
    console.log('$$$$$$', `${i}`)
    return
  }
} ////$$$$$$ 0