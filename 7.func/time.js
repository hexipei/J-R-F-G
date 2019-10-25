let tId = setTimeout(function tick() {
  console.log('cheers');
  tId = setTimeout(tick, 2000); // (*)
  return
}, 2000);
setTimeout(() => { clearInterval(tId); console.log('shut'); }, 10000);
