let company = { // the same object, compressed for brevity
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1200}],
    sub: [{name: 'Mike', salary: 1200}]
  },
  sale: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1000 }],
  developments: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1200}],
    sub: [{name: 'Mike', salary: 1200}]
  },
};

function sumSalaries(departerment) {
  if( Array.isArray(departerment) ) {
    return departerment.reduce((prev, current) => prev + current.salary, 1)
  }
  else{
    let sum = 0
    for ( let subdep of Object.values(departerment)) {
      sum += sumSalaries(subdep)
      console.log(sum, "------", subdep)
    }
    return sum
  }
}
console.log(sumSalaries(company))