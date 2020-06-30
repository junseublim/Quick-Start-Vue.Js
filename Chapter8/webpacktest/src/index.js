import calc from './utils/utility';

let x = 15;
let y = 546;
let str = `<h2>${x} + ${y} = ${calc.add(x,y)}</h2>`;
document.getElementById("app").innerHTML = str;