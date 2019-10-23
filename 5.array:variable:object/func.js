function defer(f, ms) {
  return function() {
    setTimeout(() => f.apply(this, arguments), ms)
  }
}
function hi(who) {
  console.log('hello'+ ' ' + who)
}
let hiDefered = defer(hi, 2000)
hiDefered("ilter")//hello ilter

let row = {
  title: "welcome",
  teacher: ["kongqiu", "modi", "lier"],
  outputlist() {
    this.teacher.forEach(
      teacher => console.log(this.title + ' ' + teacher)
    )
  },
  hiDefered, // hiDefered() 报错，变量只是安排了函数的引用，并没有安排函数的运行
  defer, // defer()
}
row.outputlist()
row.hiDefered() // hello undefined, 为什么不是 hello ilter 访问局部变量失败？变量只是安排了函数的引用，所以引用了原来的结果，没有执行，默认是 undefined
row.hiDefered //未执行
row.defer() //未执行
row.defer //未执行
row.defer(hi) //未执行
row.defer(hi, 2000) //未执行

async function f() {
  return Promise.resolve(1)
}
f().then(console.log)

async function h() {
  let promise = new Promise((resolve, reject) =>{
    setTimeout(() => {resolve('ha mei ha mei ha')}, 3000)
  })
  let results = await promise
  console.log(results)
}
h()
