console.log(/^/.length, /$/.length) //undefined undefined
let put = ''
let pdd = /^$/
let add = /^/
console.log(add.length) //undefined

console.log('Mop top pop'.match(/[mpt]op/gi))//[ 'Mop', 'top' ]
console.log('Mop top pop'.match(/[mpt]op/))//[ 'top', index: 4, input: 'Mop top pop' ]
console.log('Mop top pop'.match(/[mtp]op/g))//[ 'top', 'pop' ]

console.log('Ex6pre8ssion 0x8'.match(/x[0~9A-F]/g))//null
console.log('Ex6pre8ssion 0xF'.match(/x[0~9A-F]/))//[ 'xF', index: 14, input: 'Ex6pre8ssion 0xF' ]
console.log('Ex6pre8ssion 0xF'.match(/x[0~9A-F]/g))//[ 'xF' ]
console.log( "Ex6cep8tion 0xA8F".match(/x[0-9A-F][0-9A-F]/g) ); // xA8

console.log('AlphaGo@gmail.com'.match(/[^\0-9]/))//[ 'A', index: 0, input: 'AlphaGo@gmail.com' ]
console.log('AlphaGo@gmail.com'.match(/[^\0-9]/g))/*[ 'A', 'l', 'p', 'h', 'a', 'G', 'o', '@', 'g', 'm', 'a', 'i', 'l', 'c', 'o', 'm' ] */
console.log('AlphaGo@gmail.com'.match(/[^\0-9]/gi))/*[ 'A','l', 'p', 'h', 'a', 'G', 'o', '@', 'g', 'm', 'a', 'i', 'l', 'c', 'o', 'm' ] */
console.log('AlphaGo@gmail.com'.match(/[^\s]/)) //A
console.log('AlphaGo@gmail.com'.match(/[^\s]/g)) /*[ 'A','l', 'p', 'h', 'a', 'G', 'o', '@', 'g', 'm', 'a', 'i', 'l', 'c', 'o', 'm' ] */
console.log('AlphaGo@gmail.com'.match(/[^\s]/gi))/*[ 'A','l', 'p', 'h', 'a', 'G', 'o', '@', 'g', 'm', 'a', 'i', 'l', 'c', 'o', 'm' ] */