let x = '';

for(i = 0; i <= 5 ; i++) {
    for (k = 5; k >= i; k--) {
        x += ' ';
    }
    for(j = 1; j <= i; j++) {
       x += '#';
    }
    for (k = 0; k <= 0 ; k++ ) {
        x += ' ';
    }
    for(m = 1; m <= i; m++){
        x += '#';
    }
    x += '\n';
}
console.log(x);