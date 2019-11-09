'use strict';
let regexp0 = /".+"/g
let regexp10 = /".+/g
let regexp11 = /".+"/gi
let regexp12 = /".+/gi
let regexp13 = /".+"/gu
let regexp13one = /".+/gu
let regexp14 = /".+"/iu
let regexp14one = /".+/iu
let regexp15 = /".+"/giu
let regexp15one = /".+/giu
let str = 'a "which" and "broom" one'
console.log(str.match(regexp0))//[ '"which" and "broom"' ]
console.log(str.match(regexp10))//[ '"which" and "broom" one' ]
console.log(str.match(regexp11))//[ '"which" and "broom"' ]
console.log(str.match(regexp12))//[ '"which" and "broom" one' ]
console.log(str.match(regexp13))//[ '"which" and "broom"' ]
console.log(str.match(regexp13one))//[ '"which" and "broom" one' ]
console.log(str.match(regexp14))//[ '"which" and "broom"', index: 2, input: 'a "which" and "broom" one' ]
console.log(str.match(regexp14one))//[ '"which" and "broom" one', index: 2, input: 'a "which" and "broom" one' ]
console.log(str.match(regexp15))//[ '"which" and "broom"' ]
console.log(str.match(regexp15one), '######')//[ '"which" and "broom" one' ]
let regexplazy00 = /".+?"/g
let regexplazy10 = /".*?"/g
let regexplazy20 = /".??"/g
let regexplazy01 = /".+?"/gi
let regexplazy11 = /".*?"/gi
let regexplazy21 = /".??"/gi
let regexplazy02 = /".+?"/gu
let regexplazy12 = /".*?"/gu
let regexplazy22 = /".??"/gu
let regexplazy03 = /".+?"/iu
let regexplazy13 = /".*?"/iu
let regexplazy23 = /".??"/iu
let regexplazy04 = /".+?"/giu
let regexplazy14 = /".*?"/giu
let regexplazy24 = /".??"/giu
console.log(str.match(regexplazy00))//[ '"which"', '"broom"' ]
console.log(str.match(regexplazy10))//[ '"which"', '"broom"' ]
console.log(str.match(regexplazy20))//null
console.log(str.match(regexplazy01))//[ '"which"', '"broom"' ]
console.log(str.match(regexplazy11))//[ '"which"', '"broom"' ]
console.log(str.match(regexplazy21))//null
console.log(str.match(regexplazy02))//[ '"which"', '"broom"' ]
console.log(str.match(regexplazy12))//[ '"which"', '"broom"' ]
console.log(str.match(regexplazy22))//null
console.log(str.match(regexplazy03))//[ '"which"', index: 2, input: 'a "which" and "broom" one' ]
console.log(str.match(regexplazy13))//[ '"which"', index: 2, input: 'a "which" and "broom" one' ]
console.log(str.match(regexplazy23))//null
console.log(str.match(regexplazy04))//[ '"which"', '"broom"' ]
console.log(str.match(regexplazy14))//[ '"which"', '"broom"' ]
console.log(str.match(regexplazy24))//null

console.log( "123 456".match(/\d+ \d+?/) );//[ '123 4', index: 0, input: '123 456' ]
console.log( "123456".match(/\d+ \d+?/) );//null
console.log( "123456 ".match(/\d+ \d+?/) );//null
console.log( "123456".match(/\d+\d+?/) );//[ '123456', index: 0, input: '123456' ]

let regexps0 = /"[^"]+"/g;
let regexps01 = /"[^"]+"/gi;
let regexps02 = /"[^"]+"/gu;
let regexps03 = /"[^"]+"/giu;
let regexps10 = /"[^"]+/g;
let regexps11 = /"[^"]+/gi;
let regexps12 = /"[^"]+/gu;
let regexps13 = /"[^"]+/giu;
let strs0 = 'a "witch" and her "broom" is one';
console.log( strs0.match(regexps0) );//[ '"witch"', '"broom"' ]
console.log( strs0.match(regexps01) );//[ '"witch"', '"broom"' ]
console.log( strs0.match(regexps02) );//[ '"witch"', '"broom"' ]
console.log( strs0.match(regexps03) );//[ '"witch"', '"broom"' ]
console.log( strs0.match(regexps10) );//[ '"witch', '" and her ', '"broom', '" is one' ]
console.log( strs0.match(regexps11) );//[ '"witch', '" and her ', '"broom', '" is one' ]
console.log( strs0.match(regexps12) );//[ '"witch', '" and her ', '"broom', '" is one' ]
console.log( strs0.match(regexps13) );//[ '"witch', '" and her ', '"broom', '" is one' ]

let stra = '...<a href="link1" class="doc">... <a href="link2" class="doc">...';
let regexpa = /<a href=".*" class="doc">/g;
console.log( stra.match(regexpa) ); // <a href="link1" class="doc">... <a href="link2" class="doc">
let strh = '...<a href="link1" class="doc">... <a href="link2" class="doc">...';
let strw = '...<a href="link1" class="wrong">... <p style="" class="doc">...';
let regexph = /<a href=".*?" class="doc">/g;
console.log( strh.match(regexph) ); // <a href="link1" class="doc">, <a href="link2" class="doc">
console.log( strw.match(regexph) );//[ '<a href="link1" class="wrong">... <p style="" class="doc">' ]
let strwa = '...<a href="link1" class="wrong">... <p style="" class="doc">...';
let straw = '...<a href="link1" class="doc">... <a href="link2" class="doc">...';
let regexpaw = /<a href="[^"]*" class="doc">/g;
console.log( strwa.match(regexpaw) ); // null 没有匹配
console.log( straw.match(regexpaw) ); // <a href="link1" class="doc">, <a href="link2" class="doc">

console.log( 'Gogogo now!'.match(/(go)+/i) ); //[ 'Gogogo', 'go', index: 0, input: 'Gogogo now!' ]
console.log( 'Gogogo now!'.match(/(go)+/g) ); //[ 'gogo' ]
console.log( 'Gogogo now!'.match(/(go)+/u) ); //[ 'gogo', 'go', index: 2, input: 'Gogogo now!' ]
console.log( 'Gogogo now!'.match(/(go)+/iu) ); //[ 'Gogogo', 'go', index: 0, input: 'Gogogo now!' ]
console.log( 'Gogogo now!'.match(/(go)+/gi) ); //[ 'Gogogo' ]
console.log( 'Gogogo now!'.match(/(go)+/gu) ); //[ 'gogo' ]
console.log( 'Gogogo now!'.match(/(go)+/giu) ); //[ 'Gogogo' ]
console.log( 'Gogogo now!'.match(/(go)+/uig) ); //[ 'Gogogo' ]

let regexpsi = /(\w+\.)+\w+/g;
let regexpsg = /(\w+\.)+\w+/i;
let regexpsu = /(\w+\.)+\w+/u;
let regexpsi0 = /(\w+\.)+\w+/gi;
let regexpsi1 = /(\w+\.)+\w+/gu;
let regexpsi2 = /(\w+\.)+\w+/iu;
let regexpsi3 = /(\w+\.)+\w+/giu;
let regexpsi4 = /(\w+\.)+\w+/uig;
console.log( "site.com my.site.com".match(regexpsi) );//[ 'site.com', 'my.site.com' ]
console.log( "site.com my.site.com".match(regexpsg) );//[ 'site.com', 'site.', index: 0, input: 'site.com my.site.com' ]
console.log( "site.com my.site.com".match(regexpsu) );//[ 'site.com', 'site.', index: 0, input: 'site.com my.site.com' ]
console.log( "site.com my.site.com".match(regexpsi0) );//[ 'site.com', 'my.site.com' ]
console.log( "site.com my.site.com".match(regexpsi1) );//[ 'site.com', 'my.site.com' ]
console.log( "site.com my.site.com".match(regexpsi2) );//[ 'site.com', 'site.', index: 0, input: 'site.com my.site.com' ]
console.log( "site.com my.site.com".match(regexpsi3) );//[ 'site.com', 'my.site.com' ]
console.log( "site.com my.site.com".match(regexpsi4) );//[ 'site.com', 'my.site.com' ]

let regexpcom00 = /[-.\w]+@([\w-]+\.)+[\w-]+/g;
let regexpcom01 = /[-.\w]+@([\w-]+\.)+[\w-]+/i;
let regexpcom02 = /[-.\w]+@([\w-]+\.)+[\w-]+/u;
let regexpcom10 = /[-.\w]+@([\w-]+\.)+[\w-]+/gi;
let regexpcom11 = /[-.\w]+@([\w-]+\.)+[\w-]+/gu;
let regexpcom12 = /[-.\w]+@([\w-]+\.)+[\w-]+/iu;
let regexpcom30 = /[-.\w]+@([\w-]+\.)+[\w-]+/giu;
let regexpcom31 = /[-.\w]+@([\w-]+\.)+[\w-]+/uig;
console.log("my@mail.com @ his@site.com.uk".match(regexpcom00));//[ 'my@mail.com', 'his@site.com.uk' ]
console.log("my@mail.com @ his@site.com.uk".match(regexpcom01));//[ 'my@mail.com', 'mail.', index: 0, input: 'my@mail.com @ his@site.com.uk' ]
console.log("my@mail.com @ his@site.com.uk".match(regexpcom02));//[ 'my@mail.com', 'mail.', index: 0, input: 'my@mail.com @ his@site.com.uk' ]
console.log("my@mail.com @ his@site.com.uk".match(regexpcom10));//[ 'my@mail.com', 'his@site.com.uk' ]
console.log("my@mail.com @ his@site.com.uk".match(regexpcom11));//[ 'my@mail.com', 'his@site.com.uk' ]
console.log("my@mail.com @ his@site.com.uk".match(regexpcom12));//[ 'my@mail.com', 'mail.', index: 0, input: 'my@mail.com @ his@site.com.uk' ]
console.log("my@mail.com @ his@site.com.uk".match(regexpcom30));//[ 'my@mail.com', 'his@site.com.uk' ]
console.log("my@mail.com @ his@site.com.uk".match(regexpcom31));//[ 'my@mail.com', 'his@site.com.uk' ]

let strtag = '<h1>Hello, world!</h1>';
let tag = strtag.match(/<(.*?)>/);
let tags = strtag.match(/<.*?>/);
console.log( tag[0], tag[1], tag[2] );// <h1>  h1
console.log( tags[0], tags[1], tags[2] ) //<h1> undefined

let strspan = '<span class="my">';
let regexpspan = /<(([a-z]+)\s*([^>]*))>/
let regexpspan1 = /<(([a-z]+)\s*([^>])*)>/
let result = strspan.match(regexpspan)
let result1 = strspan.match(regexpspan1)
console.log(result[0])//<span class="my">
console.log(result[1])//span class="my"
console.log(result[2], result[3])//span class="my"
console.log(result1[0])//<span class="my">
console.log(result1[1])//span class="my"
console.log(result1[2], result1[3])//span "

let strgow = "Gogogo John!";
let regexpgow = /(?:go)+ (\w+)/i;
let resultgow = strgow.match(regexpgow);
console.log( resultgow[0] ); // Gogogo John
console.log( resultgow[1], resultgow.length ); //John 2

let strshe = `He said: "She's the one!".`;
let regexpshe = /(['"])(.*?)\1/g;
console.log( strshe.match(regexpshe) );//[ '"She's the one!"' ]

let regexpor = /html|php|css|java(script)?/gi;
let stror = "First HTML appeared, then CSS, then JavaScript";
console.log( stror.match(regexpor) );//[ 'HTML', 'CSS', 'JavaScript' ]
let regexptime = /([01]\d|2[0-3]):[0-5]\d/g;
console.log('00:00 10:10 23:59 25:99 1:2'.match(regexptime));//[ '00:00', '10:10', '23:59' ]
let strdoc = "1 turkey costs 30€";
console.log( strdoc.match(/\d+(?=€)/) ); //[ '30', index: 15, input: '1 turkey costs 30€' ]
let strdocs = "1 turkey costs 30€";
console.log( strdocs.match(/\d+(?=\s)(?=.*30)/) );//[ '1', index: 0, input: '1 turkey costs 30€' ]
let strdoc2 = "2 turkeys cost 60€";
console.log( strdoc2.match(/\d+(?!€)/) ); //[ '2', index: 0, input: '2 turkeys cost 60€' ]

let strmoney = "1 turkey costs 30€ 886¥";
let regexpmoney = /\d+(?=(€|kr))/
let strmoneys1 = "1 turkey costs $30";

let regexpback = /^(\w+\s)*\w*$/;
let strback = "An input string that takes a long time or even makes this regex to hang!";
console.log( regexpback.test(strback) ); // false
console.log( "JavaScript".match(/\w+Script/)); //[ 'JavaScript', index: 0, input: 'JavaScript' ]
console.log( "JavaScript".match(/(?=(\w+))\1Script/)); // null

let strvalue = 'let varName'
let regexpvalue = /\w+/g
console.log(regexpvalue.lastIndex)//0 初始的 lastIndex 是 0
let word1 = regexpvalue.exec(strvalue)
console.log(word1[0],regexpvalue.lastIndex)//let 3
let word2 = regexpvalue.exec(strvalue)
console.log(word2[0], regexpvalue.lastIndex)//varName 11
let word3 = regexpvalue.exec(strvalue)
console.log(word3, regexpvalue.lastIndex)//null 0 不匹配

let strvalue1 = 'let varName'
let regexpvalue1 = /\w+/g
let results;
while(results = regexpvalue1.exec(strvalue1)) {
  console.log(`Found ${results[0]} at position ${results.index}`);
}//Found let at position 0  Found varName at position 4
regexpvalue.lastIndex = 4
let word = regexpvalue.exec(strvalue)
console.log(word[0])//[ 'varName', index: 4, input: 'let varName' ]
console.log(word.index)//4

let strs = 'let varName = "value"'
let regexps = /\w+/y;
regexps.lastIndex = 3
console.log(regexps.exec(strs)) //null
regexps.lastIndex = 4
console.log(regexps.exec(strs))//[ 'varName', index: 4, input: 'let varName = "value"' ]