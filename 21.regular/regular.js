'use strict';
let str = "+7(903)-123-45-67"
let regexp0 = /\d/
console.log(str.match(regexp0))//[ '7', index: 1, input: '+7(903)-123-45-67' ]
let regexp1 = /\d/g
console.log(str.match(regexp1), str.match(regexp1).join(''))//[ '7', '9', '0', '3', '1', '2', '3', '4', '5', '6', '7' ] '79031234567'

let strs = ' \t\v\f\r'
let space0 = /\s/
console.log(strs.match(space0))//[ ' ', index: 0, input: ' \t\u000b\f\r' ]
let space1 = /\s/g
console.log(strs.match(space1), strs.match(space1).join(''))//[ ' ', '\t', '\u000b', '\f', '\r' ] ' \t\u000b\f\r'
let strw = 'a1_'
let word0 = /\w/
console.log(strw.match(word0))//[ 'a', index: 0, input: 'a1_' ]
let word1 = /\w/g
console.log(strw.match(word1), strw.match(word1).join(''))//[ 'a', '1', '_' ]  'a1_'
let strdsw = '+7\t_5\va2\f16\ra'
let dsw0 = /\d\s\w/
console.log(strdsw.match(dsw0))
let dsw1 = /\d\s\w/g
console.log(strdsw.match(dsw1), strdsw.match(dsw1).join('-'))//[ '7\t_', '5\u000ba', '2\f1', '6\ra' ] '7\t_-5\u000ba-2\f1-6\ra'
let str0 = "Is there CSS4?";
let regexp00 = /CSS\d/
console.log( str0.match(regexp00) ); //[ 'CSS4', index: 9, input: 'Is there CSS4?' ]
console.log( "I love HTML5!".match(/\s\w\w\w\w\d/) ); //[ ' HTML5', index: 6, input: 'I love HTML5!' ]

let strD = '+7(903)-123-45-67a\v\f\r_'
let regexpD = /\D/g
let regexpd = /\d/g
console.log(strD.match(regexpd)) //[ '7', '9', '0', '3', '1', '2', '3', '4', '5', '6', '7' ]
console.log(strD.match(/\D/g, ''))//[ '+', '(', ')', '-', '-', '-', 'a' ]
console.log(strD.match(/\D/g))//[ '+', '(', ')', '-', '-', '-', 'a' ]
console.log(strD.replace(/\D/g, ''))//79031234567
console.log(strD.replace(/\D/g))//undefined7undefined903undefinedundefined123undefined45undefined67undefined
console.log(strD.match(/\S/g))//[ '+', '7', '(', '9', '0', '3',')', '-', '1', '2', '3', '-', '4', '5', '-', '6', '7', 'a', '_' ]
console.log(strD.match(/\S/g, ''))//[ '+','7','(','9','0','3',')','-','1','2','3','-','4','5','-','6','7','a','_' ]
console.log(strD.replace(/\S/g))/*undefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefined*/
console.log(strD.replace(/\S/g, '-'))//空
console.log(strD.match(/\W/g))//[ '+', '(', ')', '-', '-', '-', '\u000b', '\f', '\r' ]
console.log(strD.match(/\W/g))//[ '+', '(', ')', '-', '-', '-', '\u000b', '\f', '\r' ]
console.log(strD.replace(/\W/g))/*undefined7undefined903undefinedundefined123undefined45undefined67aundefinedundefinedundefined_------------------*/
console.log(strD.replace(/\S/g, '-'))//空
console.log( "Z".match(/./) ); //[ 'Z', index: 0, input: 'Z' ]

let regexp = /CS.4/;
console.log( "CSS4".match(regexp) ); //[ 'CSS4', index: 0, input: 'CSS4' ]
console.log( "CS-4".match(regexp) ); //[ 'CS-4', index: 0, input: 'CS-4' ]
console.log( "CS 4".match(regexp) ); //[ 'CS 4', index: 0, input: 'CS 4' ]
console.log( "CS4".match(/CS.4/) )//null 没有和 . 匹配的字符
console.log( "Z".match(/./) ); //[ 'Z', index: 0, input: 'Z' ]
console.log( "CS4".match(/CS.4/) )//null 没有和 . 匹配的字符
console.log( "CS\n4".match(/CS.4/) )//null 和\n 不匹配
console.log( "1 - 5".match(/\d-\d/) ); // null, 不匹配
console.log( "1 - 5".match(/\d - \d/) ); //[ '1 - 5', index: 0, input: '1 - 5' ]
console.log( "1 - 5".match(/\d\s-\s\d/) ); //[ '1 - 5', index: 0, input: '1 - 5' ]

console.log('😄'.length, '𝒳'.length); // 2 2
let strA = "A ბ ㄱ";
console.log( strA.match(/\p{L}/g) ); // null (no matches, as there's no flag "u")

let regexpH = '/x\p{Hex_Digit}\p{Hex_Digit}/u';
console.log("number: xAF".match(regexpH)); // xAF
let regexpp = '/\p{sc=Han}/gu'; // returns Chinese hieroglyphs
let stri = `Hello Привет 你好 123_456`;
console.log( stri.match(regexpp) ); // 你,好
let regexpu = '/\p{Sc}\d/gu';
let  strp = `Prices: $2, €1, ¥9`;
console.log( strp.match(regexpu) ); // $2,€1,¥9

let strm = 'Mali had a litter lamb'
console.log(/^Mali/.test(strm), /lamb$/.test(strm))//true true
let goodInput = "12:34";
let badInput = "12:345";
let regexpdd = /^\d\d:\d\d$/
console.log( regexpdd.test(goodInput) ); // true
console.log( regexpdd.test(badInput) ); // false

console.log(/^/.length, /$/.length) //undefined
console.log(''.match(/$/))//[ '', index: 0, input: '' ]
console.log(''.replace(/^$/))//undefined
let put = ''
let pdd = /^$/
let add = /^/
console.log(add.length)
console.log(pdd.test(put))//true

let strmm = `1st place: Winnie et
2nd place: Piglet et
3rd place: Eeyore et`;
console.log( strmm.match(/^\d/gm) ); //[ '1', '2', '3' ]
console.log( strmm.match(/^\d/g) ); //[ '1' ]
console.log( strmm.match(/\w\w$/gm) ); //[ 'et', 'et', 'et' ]
console.log( strmm.match(/\w\w$/g) ); //[ 'et' ]

let strpecs = `Winnie: 1
Piglet: 2
Eeyore: 3`;
console.log( strpecs.match(/\d\n/gm) ); //[ '1\n', '2\n' ]

let strpec = `Winnie: 1
Piglet: 2
Eeyore: 3$`;
console.log( strpec.match(/\d\n/gm) ); //[ '1\n', '2\n' ]

let strwpe = `Winnie: 1
Piglet: 2
Eeyore: 3\n`;
console.log( strwpe.match(/\d\n/gm) ); //[ '1\n', '2\n', '3\n' ]
console.log( "Hello, Java!".match(/\bJava\b/) );//[ 'Java', index: 7, input: 'Hello, Java!' ]
console.log( "Hello, JavaScript!".match(/\bJava\b/) ); // null
console.log( "Hello, Java!".match(/\bHello\b/) ); //[ 'Hello', index: 0, input: 'Hello, Java!' ]
console.log( "Hello, Java!".match(/\bJava\b/) );  //[ 'Java', index: 7, input: 'Hello, Java!' ]
console.log( "Hello, Java!".match(/\bHell\b/) );  // null 没有匹配
console.log( "Hello, Java!".match(/\bHele\b/) );  // null
console.log( "Hello, Java!".match(/\bHeel\b/) );  // null
console.log( "Hello, Java!".match(/\blell\b/) );  // null
console.log( "Hello, Java!".match(/\bbell\b/) );  // null
console.log( "Hello, Java!".match(/\bHelb\b/) );  // null
console.log( "Hello, Java!".match(/\bJava!\b/) ); // null 没有匹配
console.log( "1 23 456 78".match(/\b\d\d\b/g) ); //[ '23', '78' ]
console.log( "12,34,56".match(/\b\d\d\b/g) ); //[ '12', '34', '56' ]
console.log('12_34_56_78_'.match(/\b\d\d\b/g))//null

//[ '09:00', index: 13, input: 'Breakfast at 09:00 in the room 123:456.' ]
console.log( "Breakfast at 09:00 in the room 123:456.".match( /\b\d\d:\d\d\b/ ) ); 
console.log( "Chapter 5.1".match(/\d\.\d/) ); //[ '5.1', index: 8, input: 'Chapter 5.1' ]
console.log( "Chapter 511".match(/\d\.\d/) ); // null 没有点不匹配
console.log( "function g()".match(/g\(\)/) );//[ 'g()', index: 9, input: 'function g()' ]
console.log( "1\\2".match(/\\/) ); // /
console.log( "/".match(/\//) );//[ '/', index: 0, input: '/' ]
console.log( "/".match(new RegExp("/")) ); //[ '/', index: 0, input: '/' ]
let regexp01 = new RegExp("\d\.\d");
console.log( "Chapter 5.1".match(regexp01) ); // null
console.log("\d\.\d"); // d.d
let regStr = "\\d\\.\\d";
console.log(regStr); // \d\.\d 
let regexp02 = new RegExp(regStr);
console.log( "Chapter 5.1".match(regexp02) );//[ '5.1', index: 8, input: 'Chapter 5.1' ]

console.log('Mop top pop'.match(/[mpt]op/gi))//[ 'Mop', 'top' ]
console.log('Mop top pop'.match(/[mpt]op/))//[ 'top', index: 4, input: 'Mop top pop' ]
console.log('Mop top pop'.match(/[mtp]op/g))//[ 'top', 'pop' ]
console.log('Zhentian'.match(/Z[hent]ian/), '#')//null
console.log( "Voila".match(/V[oi]la/), '#' ); // null

console.log('Ex6pre8ssion 0x8AF'.match(/x[0~9A-F]/))//null
console.log('Ex6pre8ssion 0x8AF'.match(/x[0~9A-F]/g))//null
console.log('Ex6pre8ssion 0x8'.match(/x[0~9A-F]/))//null
console.log('Ex6pre8ssion 0x8'.match(/x[0~9A-F]/g))//null
console.log('Ex6pre8ssion 0xF'.match(/x[0~9A-F]/))//[ 'xF', index: 14, input: 'Ex6pre8ssion 0xF' ]
console.log('Ex6pre8ssion 0xF'.match(/x[0~9A-F]/g))//[ 'xF' ]
console.log( "Ex6cep8tion 0xA8F".match(/x[0-9A-F][0-9A-F]/g) ); // xA8
console.log( "Ex6cep8tion 0xA8F".match(/x[0-9A-F][0-9A-F]/) ); //[ 'xA8', index: 11, input: 'Exception 0xAF' ]
console.log('Ex6pre8ssion 0xA8F'.match(/x[0~9A-F]/))//[ 'xA', index: 12, input: 'Expression 0xAF' ]
console.log('Ex6pre8ssion 0xA8F'.match(/x[0~9A-F]/g))//[ 'xA' ]
console.log( "Ex6cep8tion 0xAF".match(/x[0-9A-F][0-9A-F]/g) ); // xAF
console.log( "Ex6cep8tion 0xAF".match(/x[0-9A-F][0-9A-F]/) ); //[ 'xAF', index: 11, input: 'Exception 0xAF' ]
console.log('Ex6pre8ssion 0xAF'.match(/x[0~9A-F]/))//[ 'xA', index: 12, input: 'Expression 0xAF' ]
console.log('Ex6pre8ssion 0xAF'.match(/x[0~9A-F]/g))//[ 'xA' ]
console.log( "Ex6cep8tion 0x8AF".match(/x[0-9A-F][0-9A-F]/g) ); // x8A
console.log( "Ex6cep8tion 0x8AF".match(/x[0-9A-F][0-9A-F]/) ); //[ 'x8A', index: 11, input: 'Exception 0xAF' ]
console.log( "Ex6cep8tion 0xA8F".match(/x[0-9A-F][0-9A-F][0-9A-F]/g) );//[ 'xA8F' ]
console.log( "Ex6cep8tion 0xA8F".match(/x[0-9A-F][0-9A-F][0-9A-F]/) );//[ 'xA8F', index: 13, input: 'Ex6cep8tion 0xA8F' ]
console.log( "Ex6cep8tion 0x8AF".match(/x[0-9A-F][0-9A-F][0-9A-F]/g) );//[ 'x8AF' ]
console.log( "Ex6cep8tion 0x8AF".match(/x[0-9A-F][0-9A-F][0-9A-F]/) );//[ 'x8AF', index: 13, input: 'Ex6cep8tion 0x8AF' ]
console.log( "Ex6cep8tion 0x8A8F".match(/x[0-9A-F][0-9A-F][0-9A-F]/g) );//[ 'x8A8' ]
console.log( "Ex6cep8tion 0x8A8F".match(/x[0-9A-F][0-9A-F][0-9A-F]/) );//[ 'x8A8', index: 13, input: 'Ex6cep8tion 0x8A8F' ]
console.log('Ex6pre8ssion 0x8AF'.match(/x[0-9a-f]/gi))//[ 'x6', 'x8' ]
console.log('Ex6pre8ssion 0x8AF'.match(/x[0-9a-f][0-9a-f]/gi))//['x8A']

let regexpssss = '/[\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}]/gu';
let strssss = `Hi 你好 12`;
console.log( str.match(regexpssss) ); // H,i,你,好,1,2

console.log('AlphaGo@gmail.com'.match(/[^\d\sA-Z]/gi))//[ '@', '.' ]
console.log('AlphaGo@gmail.com'.match(/[^\d\sA-Z]/g))//[ 'l', 'p', 'h', 'a', 'o', '@', 'g', 'm', 'a', 'i', 'l', '.', 'c', 'o', 'm' ]
console.log('AlphaGo@gmail.com'.match(/[^\d\sA-Z]/))//[ 'l', index: 1, input: 'AlphaGo@gmail.com' ]
console.log('AlphaGo@gmail.com'.match(/[^\0-9]/))//[ 'A', index: 0, input: 'AlphaGo@gmail.com' ]
console.log('AlphaGo@gmail.com'.match(/[^\0-9]/g))/*[ 'A', 'l', 'p', 'h', 'a', 'G', 'o', '@', 'g', 'm', 'a', 'i', 'l', 'c', 'o', 'm' ] */
console.log('AlphaGo@gmail.com'.match(/[^\0-9]/gi))/*[ 'A','l', 'p', 'h', 'a', 'G', 'o', '@', 'g', 'm', 'a', 'i', 'l', 'c', 'o', 'm' ] */
console.log('AlphaGo@gmail.com'.match(/[^\s]/)) //A
console.log('AlphaGo@gmail.com'.match(/[^\s]/g)) /*[ 'A','l', 'p', 'h', 'a', 'G', 'o', '@', 'g', 'm', 'a', 'i', 'l', 'c', 'o', 'm' ] */
console.log('AlphaGo@gmail.com'.match(/[^\s]/gi))/*[ 'A','l', 'p', 'h', 'a', 'G', 'o', '@', 'g', 'm', 'a', 'i', 'l', 'c', 'o', 'm' ] */

let regexpin = /[-().^+]/g
console.log('5 + 6 * 7 / 8 - 9'.match(regexpin)) //[ '+', '-' ]
let regexpof = /[-().^+]/gi
console.log('5 + 6 * 7 / 8 - 9'.match(regexpof)) //[ '+', '-' ]
let regexpthrough = /[-().^+]/
console.log('5 + 6 * 7 / 8 - 9'.match(regexpthrough))//[ '+', index: 2, input: '5 + 6 * 7 / 8 - 9' ]
let regexps0 = /[\-\(\)\.\^\+]/g;
console.log('5 + 6 * 7 / 8 - 9'.match(regexps0)) //[ '+', '-' ]
let regexps1 = /[\-\(\)\.\^\+]/gi;
console.log('5 + 6 * 7 / 8 - 9'.match(regexps1)) //[ '+', '-' ]
let regexps2 = /[\-\(\)\.\^\+]/;
console.log('5 + 6 * 7 / 8 - 9'.match(regexps2)) //[ '+', index: 2, input: '5 + 6 * 7 / 8 - 9' ]

console.log( '𝒳'.match(/[𝒳𝒴]/) );//[ '�', index: 0, input: '𝒳' ]
for(let i=0; i<'𝒳𝒴'.length; i++) {
  console.log('𝒳𝒴'.charCodeAt(i)); // 55349, 56499, 55349, 56500
};
console.log( '𝒳'.match(/[𝒳𝒴]/u) ); //[ '𝒳', index: 0, input: '𝒳' ]
console.log('𝒳'.match(/[𝒳-𝒴]/u))//[ '𝒳', index: 0, input: '𝒳' ]
/*忘写 u 会报错 SyntaxError: Invalid regular expression: /[𝒳-𝒴]/: Range out of order in character class */
console.log( '𝒴'.match(/[𝒳-𝒵]/u) ); // 𝒴
console.log( "Java".match(/Java[^script]/) ); // null
console.log( "JavaScript".match(/Java[^script]/) ); //[ 'JavaS', index: 0, input: 'JavaScript' ]
let regexpBD = /\d\d[-:]\d\d/g;
console.log( "Breakfast at 09:00. Dinner at 21-30".match(regexpBD) );//[ '09:00', '21-30' ]

console.log( "I'm 12345 years old".match(/\d{5}/) );//[ '12345', index: 4, input: 'I\'m 12345 years old' ]
console.log( "I'm 12345 years old".match(/\d{4}/) );//[ '1234', index: 4, input: 'I\'m 12345 years old' ]
console.log( "I'm not 12, but 1234 years old".match(/\d{3,5}/) ); //[ '1234', index: 16, input: 'I\'m not 12, but 1234 years old' ]
console.log( "I'm not 12, but 123456 years old".match(/\d{3,5}/) );//[ '12345', index: 16, input: 'I\'m not 12, but 123456 years old' ]
console.log( "I'm not 12, but 123456 years old".match(/\d{3,}/) );////[ '123456', index: 16, input: 'I\'m not 12, but 123456 years old' ]
let strnum = "+7(903)-123-45-67";
let numbers = strnum.match(/\d{1,}/g);
console.log(numbers); //[ '7', '903', '123', '45', '67' ]

let strr1 = "+7(903)-123-45-67";
console.log( strr1.match(/\d+/g) ); //[ '7', '903', '123', '45', '67' ]
let strr2 = "Should I write color or colour?";
console.log( strr2.match(/colou?r/g) ); //[ 'color', 'colour' ]
console.log( "100 10 1".match(/\d0*/g) ); //[ '100', '10', '1' ]
console.log( "100 10 1".match(/\d0+/g) ); //[ '100', '10' ]
console.log( "0 1 12.345 7890".match(/\d+\.\d+/g) ); //[ '12.345' ]
console.log( "<body> ... </body>".match(/<[a-z]+>/gi) ); //[ '<body>' ]
console.log( "<h1>Hi!</h1>".match(/<[a-z][a-z0-9]*>/gi) ); //[ '<h1>' ]
console.log( "<h1>Hi!</h1>".match(/<\/?[a-z][a-z0-9]*>/gi) ); //[ '<h1>', '</h1>' ]
let regexpgo = /\.{3,}/g;
console.log( "Hello!... How goes?.....".match(regexpgo) );//[ '...', '.....' ]
let regexpcolor = /#[a-f0-9]{6}/gi;
let strcolor = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2"
console.log( "#123456".match( /#[a-f0-9]{6}\b/gi ) ); //[ '#123456' ]
console.log( "#12345678".match( /#[a-f0-9]{6}\b/gi ) ); // null
