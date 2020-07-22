{
    // 10 : 2 = x : 1000
    //X= (10*1000) / 2
    // x= 5000
    let y = []
    for (x=1; y.length < 1000; x++) {
        if(x%5==0) {
            y.push(x)
        }
    }
    console.log('Ukpno ima brojeva:' + y.length)
    console.log('Brojevi su sledeci:'+ y)
}