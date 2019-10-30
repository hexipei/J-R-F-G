function hells(m) {
  new Promise(function(resolve, reject) {
    setTimeout(() => resolve(m>=1024), 3000)
  }).then(function(result) {
    if(result == true) {call()}
    else {console.log('error')}
  })
}
hells(111)

let users = { }
others = new Proxy(users, {
  ownKeys(target) {
    return ['a', 'b', 'c']
  },
  getOwnPropertyDescriptor(target, prop) {
    return {
      enumerable: true,
      configuable: true
    }
  }
})
console.log( Object.keys(others) )

let user = { };
user = new Proxy(user, {
  ownKeys(target) { // called once to get a list of properties
    return ['a', 'b', 'c'];
  },
  getOwnPropertyDescriptor(target, prop) { // called for every property
    return {
      enumerable: true,
      configurable: true
      /* ...other flags, probable "value:..."" */
    };
  }
});
console.log( Object.keys(user) ); // a, b, c