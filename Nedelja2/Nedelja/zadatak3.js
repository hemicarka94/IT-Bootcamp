let x = '';

for(i = 0; i <= 5 ; i++) {
    for(j = 1; j <= i; j++) {
       x += '#';
    }
    x += '\n';
}
console.log(x);