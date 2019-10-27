new Promise((resolve, reject) => {
  throw new Error("Whoops!");
}).catch(function(error) {
  console.log("The error is handled, continue normally"); //The error is handled, continue normally
}).then(() => console.log("Next successful handler runs")); //Next successful handler runs
Promise.all([
  new Promise(resolve => setTimeout(() => resolve('End,'), 1000)),
  new Promise(resolve => setTimeout(() => resolve('jingshi:'), 2000)),
  new Promise(resolve => setTimeout(() => resolve('7:3'), 3000))  
]).then(console.log)