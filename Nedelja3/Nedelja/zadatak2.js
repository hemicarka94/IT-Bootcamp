// Napisati funkciju koja vraca koliko pice vam je dovoljno za dozivotno snabdevanje .
//Unosi se  koliko pice  pojedete na mesecnom nivou  i koliko godina imate ( racuna se da je dovoljno dostavljati do stote godine)
{
    function lifeSupply(mesecno,godine){
      return ((100 - godine) * 12) * mesecno
    }
console.log(lifeSupply(10,26))
}
// drugi nacin
{
    function lifeSupply(mesecno,godine){
        console.log(((100 - godine) * 12) * mesecno)
      }
  lifeSupply(10,26)
}