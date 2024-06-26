const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const turnCnt = Math.max(...input.map((i) => i.length));

let ans = '';

for (let i = 0; i < turnCnt; i++) {
    for (let j = 0; j < input.length; j++) {
        ans += input[j][i] || '';
    }
}

console.log(ans);