let target = {}
let proxy = new Proxy(target, {end: '178: 176'})
proxy.test = 5
console.log(target.test, proxy.test, proxy) //5 5 {test: 5}
for (let key in proxy) {console.log(key)} //test
console.log(proxy.handler)//undefined

let keys = [618, 666, 886, 888]
let key = new Proxy(keys,{
  get(target, flag) {
    if(flag in target) { return target[flag] }
    else return 0 //找不到默认不存在
  }
});
console.log(key[0], key[888]) // 618 0(不存在)

let promise = new Promise(function(resolve, reject) {
  console.log('1')
});
console.log(promise) //1  Promise { <pending> }
let pro = new Promise(function(resolve, reject) {
  resolve("done");
  reject(new Error("…"));
  setTimeout(() => resolve('...'), 2000)
});
console.log(pro, '#') 

let mise = new Promise(function(resolve, reject) {
  resolve(123); // immediately give the result: 123
  reject('out')
  console.log(1, '#')
});
console.log(mise) //1 '#'   Promise { 123 }(两个执行一个)

let mise1 = new Promise(function(resolve, reject) {
  setTimeout(() => resolve('buer: 6:0'), 2000)
})
mise1.then(
  result => console.log(result),
  error => console.log(error)
)
let mise2 = new Promise(function(resolve, reject) {
  setTimeout(() => reject('out, End: 6:7'), 2000)
})
mise2.then(
  result => console.log(result),
  error => console.log(error)
)
let mise3 = new Promise(function(resolve, reject) {
  setTimeout(() => resolve('jingshi: 6:0'), 2000)
})
mise3.then(console.log)
let mise4 = new Promise(function(resolve, reject) {
  setTimeout(() => reject('out, End: 0:6'), 2000)
})
mise4.catch(console.log) //out, End: 0:6
let promises = new Promise(function(resolve, reject) {
  setTimeout(() => resolve('come up'), 2000),
  setTimeout(() => resolve('fight'), 3000)
})
promises.then(console.log) //come up 

let arr = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(6), 1000)
}).then(function(result) {
  console.log(result) //6
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(result * result), 1000)
  })
}).then(function(result) {
  console.log(result) //undefined
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(result * result), 1000)
  })
}).then(function(result) {
  console.log(result) //NaN
})
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
    setTimeout(() => resolve(result * result), 1000)
  })
}).then(function(result) {
  console.log(result) //NaN
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(result * result), 1000)
  })
}).then(function(result) {
  console.log(result) //NaN
})

new Promise((resolve, reject) => {
  throw new Error("Whoops!");
}).catch(function(error) {
  console.log("The error is handled, continue normally"); //The error is handled, continue normally
}).then(() => console.log("Next successful handler runs")); //Next successful handler runs

new Promise((resolve, reject) => {// 执行：catch -> catch -> then
  throw new Error("Whoops!");
}).catch(function(error) { // (*)
  if (error instanceof URIError) {    // handle it
  } else {
    console.log("error", '#');
    throw error; // 抛出这个或者其他的错误跳转到下一个 catch
  }
}).then(function() {/* 此处不会运行 */
}).catch(error => { // (**)
  console.log(`The unknown error has occurred: ${error}`, '##');// 不会返回任何内容 => 正常方式执行
});

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`)
    this.name = 'HttpError'
    this.response = response
  }
}
function loadJson(url) {
  return fetch(url)
    .then(response => {
      if(response.status == 200) {
        return response.json()
      }else {
        throw new HttpError(response)
      }
    })
}
let pros1 = Promise.resolve();
Promise.all([
  new Promise(resolve => setTimeout(() => resolve('End'), 1000)),
  new Promise(resolve => setTimeout(() => resolve('jingshi:'), 2000)),
  new Promise(resolve => setTimeout(() => resolve('7:3'), 3000))  
]).then(console.log)
Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("End!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).catch(console.log); // Error: End!
Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000)
  }),
  2, // 等价于 Promise.resolve(2)
  3  // 等价于 Promise.resolve(3)
]).then(console.log); // 1, 2, 3

Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(console.log); // 1

let loadScriptPromise = function(src) {
  return new Promise((resolve, reject) => {
    loadScript(src, (err, srcipt) => {
      if(err) reject(err)
      else resolve(script)
    })
  })
}
console.log(loadScriptPromise, '!') //[Function: loadScriptPromise]

let dictionary = {
  'hi': 'zhouzhu',
  'bye': 'jingshi',
}
dictionary = new Proxy(dictionary, {
  get(target, phrase) {
    if(phrase in target) {return target[phrase]}
    else{return phrase}
  }
})
console.log(dictionary['hi'], '$') //zhouzhu
console.log(dictionary['welcome'], '$$') //welcome
let numbers = [];

numbers = new Proxy(numbers, { // (*)
  set(target, prop, val) { // to intercept property writing
    if (typeof val == 'number') {
      target[prop] = val;
      console.log(`添加 ${target[prop]} 成功`)
      return true;
    } else {
      console.log(`添加失败`)
      return false;
    }
  }
});

numbers.push(1); // added successfully
numbers.push(2); // added successfully
console.log("添加成功,Length is: " + numbers.length); // 2 
// 非数字会返回 TypeError ('set' on proxy returned false)
console.log("This line is never reached (error in the line above)");
