{
    let cenapice = 500
    let precnikpice =32
    let poluprecnik= precnikpice / 2
    let P= Math.pow(poluprecnik, 2) * Math.PI
    let Cenapocm= cenapice/P
    console.log(Cenapocm)
    
}
{
    let cena=0
    let precnik=32
    let cenapice= 500
    let precnikpice=32
    let poluprecnik= precnikpice / 2
    let P= Math.pow(poluprecnik, 2) * Math.PI
    console.log(P)
    let Cenapocm= cenapice/P
    console.log(Cenapocm)

        if(precnik > 0){
            cena=precnik*Cenapocm
            console.log(cena)
        } else if(cena > 0){
            precnikpik = cena / Cenapocm
            console.log(precnik)
        }
    }

