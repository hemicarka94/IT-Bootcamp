let x = '';

for(i = 0; i <= 5 ; i++) {
    for (let k = 5; k >= i; k--) {
        x += ' ';
    }
    for(let j = 1; j <= i; j++) {
       x += '#';
    }
    for (let l = 0; l <= 0 ; l++ ) {
        x += ' ';
    }
    for(let m = 1; m <= i; m++){
        x += '#';
    }
    x += '\n';
}
console.log(x);