let x = '';

for(let i = 0; i <= 5 ; i++) {
    for (let k = 5; k >= i; k--) {
        x += ' ';
    }
    for(let j = 1; j <= i; j++) {
       x += '#';
    }
    x += '\n';
}
console.log(x);