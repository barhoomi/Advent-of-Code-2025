const fs = require('node:fs');

let data
try {
    data = fs.readFileSync('input.txt', 'utf8');
} catch (err) {
  console.error(err);
}


const dataArray = data.split("\n").filter(v => v !== "")
const numbersArray = dataArray.map(n => n[0]==="R"?Number(n.slice(1,n.length))*1:Number(n.slice(1,n.length))*-1)
let sumArray = []
numbersArray.map((n,i) => i===0?sumArray.push(n+50):sumArray.push(n+sumArray[sumArray.length-1]))
sumArray = sumArray.map(n => n%100)
const zeroes = sumArray.filter(n => n===0)
console.log(zeroes.length)