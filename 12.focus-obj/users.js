let user = {
  name: 'Baishi',
  _password: '***'
}
other = new Proxy(user, {
  get(target, prop) {
    if (prop.startsWith('_')) {
      throw new Error("Bong");
    }
    let value = target[prop];
    return (typeof value === 'function') ? value.bind(target) : value; // (*)
  },
  set(target, prop, val) {
    if(prop.startsWith('_')) {
      throw new Error('End')
    }else {
      target[prop] = val
      return true
    }
  },
  deleteProperty(target, prop) {
    if(prop.startsWith('_')) {
      throw new Error('out')
    }else {
      delete target[prop]
      return true
    }
  },
  ownKeys(target) {
    return Object.keys(target).filter(key => !key.startsWith('_'))
  }
})
try {
  console.log(user._password); // Error: Access denied
} catch(e) { console.log(e.message); }
try {
  other._password = 'beach'
} catch(e) { console.log(e.message); }
try {
  delete other._password
} catch(e) {console.log(e.message)}
for(let key in other) console.log(key)
