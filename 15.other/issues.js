let a = 16
console.log(a << 2) //64
console.log(a >> 2) //4
console.log(a >>> 2) //4

let a1 = -16
console.log(a1 << 2) //-64
console.log(a1 >> 2) //-4
console.log(a1 >>> 2) //1073741820 = 2^30 - 4 内存支持的最大值

let n = 64.5678
console.log(n << 2) //256
console.log(n >> 2) //16
console.log(n >>> 2) //16

let m = -64.5678
console.log(m << 2) //-256
console.log(m >> 2) //-16
console.log(m >>> 2) //1073741808 = 2^30 - 16 指定的请求为目标设备的无效操作

let c1 = Math.PI
console.log(c1 << 2) //12
console.log(c1 >> 2) //0
console.log(c1 >>> 2) //0

let c = -Math.PI
console.log(c << 2) //12
console.log(c >> 2) //0
console.log(c >>> 2) //1073741823 = 2^30 -1 内存支持的最大值

let d1 = -Math.E
console.log(d1 << 2) //8
console.log(d1 >> 2) //0
console.log(d1 >>> 2) //0

let d = -Math.E
console.log(d << 2) //8
console.log(d >> 2) //0
console.log(d >>> 2) //1073741823

console.log(null > 0, null < 0, null == 0, null <= 0, null >= 0) //false false false true true 

for (n = 1; n < 10; n++) {
  let double = n => n * 2 
  console.log(double(n), '#') //1 2 3 4 5 6 7 8 9    let double = n => n * 2 
}
