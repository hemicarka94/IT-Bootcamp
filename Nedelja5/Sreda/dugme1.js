import { nizPokemoni } from './module.js'
import {naziv1, naziv2, naziv3, naziv4, slika1, slika2, slika3, slika4} from './divovi.js'

function sviPokemoni(){
    naziv1.textContent=nizPokemoni[0].ime
    slika1.src='https://2.bp.blogspot.com/-JvY6yCgdSNc/VKyTmIZBzFI/AAAAAAAAALE/84eth9ZVbqs/s1600/479px-Charizard.png'
    slika1.style.width='10%'
    slika1.style.height='10%'


    naziv2.textContent=nizPokemoni[1].ime
    slika2.src='https://cdn.bulbagarden.net/upload/8/85/066Machop.png'
    slika2.style.width='10%'
    slika2.style.height='10%'

    naziv3.textContent=nizPokemoni[2].ime
    slika3.src='https://sketchok.com/images/articles/06-anime/003-pokemon/06/07.jpg'
    slika3.style.width='10%'
    slika3.style.height='10%'

    naziv4.textContent=nizPokemoni[3].ime
    slika4.src='https://img.pokemondb.net/artwork/large/vulpix.jpg'
    slika4.style.width='10%'
    slika4.style.height='10%'
    
}

export { sviPokemoni }