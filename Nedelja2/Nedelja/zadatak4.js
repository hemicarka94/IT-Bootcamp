let x = '';

for(i = 0; i <= 5 ; i++) {
    for (k = 5; k >= i; k--) {
        x += ' ';
    }
    for(j = 1; j <= i; j++) {
       x += '#';
    }
    x += '\n';
}
console.log(x);