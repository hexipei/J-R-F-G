let fruits = ["Apple", "Orange", "Plum"];
fruits[3] = 'Lemon'; // 现在 fruit 的内容 ["Apple", "Orange", "Pear", "Lemon"]
console.log(fruits, fruits.length, '1')
console.log( fruits.pop(), '1&' ); // 打印并删除
console.log( fruits, '1#' );
console.log( fruits.push("Pear"), '$' );
console.log( fruits, '1' ); // Apple, Orange, Pear

let fruits1 = ["Apple", "Orange", "Pear"];
console.log( fruits1.shift(), '2&' ); //  打印并删除
console.log( fruits1, '2#' ); // Apple, Orange
console.log( fruits1.unshift('Apple'), '$' );
console.log( fruits1, '2' ); // Apple, Orange, Pear

let arr = ["Apple", "Orange", "Pear"];
for (let i = 0; i < arr.length; i++) {
  console.log( arr[i], '3' );
}
let obj = [
  {
    a: 1,
    b: 2,
    c: 3
  },
  {
    d: 11,
    e: 22,
    f: 33,
  }
];
for (let i = 0; i < obj.length; i++){
  console.log(obj[i], '3')
}
let fruits3 = ["Apples", "Pear", "Orange"];
let shoppingCart = fruits3;
console.log(shoppingCart, '3')
shoppingCart.pop("yqml");
console.log( shoppingCart, shoppingCart.length, '4' ); // ?
shoppingCart.shift("yqlm")
console.log( shoppingCart, shoppingCart.length, '4' );

// 创建一个对象从给定的键-值对。使用Array.prototype.reduce()来创建和组合键-值对
const objectFromPairs = arr1 => arr1.reduce((a, [key, val]) => ((a[key] = val), a), {});
const pobject =  objectFromPairs([['a', 1], ['b', 2]]); // {a: 1, b: 2}
console.log(pobject, '4')
//创建一个数组的键-值对数组对象。使用Object.key()和Array.prototype.map()遍历对象的键和生产与键值对数组
const objectToPairs = obj1 => Object.keys(obj1).map(k => [k, obj1[k]])
objectToPairs({ a: 1, b: 2 })
console.log(objectToPairs, '4')

/*在Object.entries(queryParameters)上使用Array.prototype.reduce()创建查询字符串。确定符号为其中之一?或&基于索引，
并将val连接到queryString(仅当它是字符串时)。当queryParameters错误时，返回queryString或空字符串*/
const objectToQueryString = queryParameters => {
  return queryParameters
    ? Object.entries(queryParameters).reduce((queryString, [key, val], index) => {
        const symbol = index === 0 ? '?' : '&';
        queryString += typeof val === 'string' ? `${symbol}${key}=${val}` : '';
        return queryString;
      }, '')
    : '';
};
let lproject = objectToQueryString({ page: '1', size: '2kg', key: undefined }); // '?page=1&size=2kg'
console.log(lproject, '4')

/*将一个二维数组转换为逗号分隔值(CSV)字符串。使用Array.prototype.map()和Array.prototype.join(分隔符)结合个人1 d数组(行)字符串。
使用Array.prototype.join (“\ n”)所有行合并成一个CSV字符串,以换行符分隔每一行。省略第二个参数,分隔符,使用默认的分隔符,*/
const arrayToCSV = (arr, delimiter = ',') =>
  arr.map(v => v.map(x => (isNaN(x) ? `"${x.replace(/"/g, '""')}"` : x)).join(delimiter))
    .join('\n');
let arra1 = arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
let arra2 = arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'
let arra3 = arrayToCSV([['a', '"b" great'], ['c', 3.1415]]); // '"a","""b"" great"\n"c",3.1415
console.log(arra1, arra2, arra3, '4')
