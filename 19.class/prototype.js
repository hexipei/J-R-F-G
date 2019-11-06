class Uses {
  constructor(name) {
    console.log('%%%%%')
    this._name = name
    console.log('@@@@@')
  }
  get name() {
    console.log('^^^^^^')
    return this._name
  }
  set name(value) {
    if(value.length < 4) {
      console.log('name is too short')
      console.log('******')
      return
    }
    this._name = value
  }
}
// let uses = new Uses('')
// console.log(uses.name) //Buer
// uses1 = new Uses('Bushi') //name is too short
// console.log(uses1.name, '#') //undefined

let uses4 = new Uses('Zhentian')
console.log(uses4.name, "--------here---------") //Zhentian
uses3 = new Uses('1')
console.log('---------')
uses4.name = "123"//name is too short，有时会 ReferenceError: user4 is not defined
console.log(uses3.name, '#') //undefined
