import { nizPokemoni } from './module.js'
import { sviPokemoni } from './dugme1.js'
import { zadugme2 } from './dugme2.js'
import { pokem } from './prikazisakrij.js'
import { samonaj } from './prikazisakrij.js'

console.log(nizPokemoni)

document.getElementById('prikaz').addEventListener('click', (event) =>{
    sviPokemoni()
    pokem()
})


document.getElementById('pobednik').addEventListener('click', (event) => {
    zadugme2()
    samonaj()
})