{
    let cenaproizvoda = 300
    let kupacima= 500
    let ostatak = kupacima-cenaproizvoda
    if (kupacima>cenaproizvoda){
        console.log("Uspesno ste kupili proizvod. Vas preostali iznos je: " + ostatak ,"dinara" )
    }
    else {
        console.log("Nemate dovoljno novca.")
    }
}