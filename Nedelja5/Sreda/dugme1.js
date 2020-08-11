import { nizPokemoni } from './module.js'


const divJedan= document.createElement('div')
divJedan.id= 'oPokemonima'
document.body.appendChild(divJedan)

const naziv1= document.createElement('p')
naziv1.id= 'naziv1pokemon1'
divJedan.appendChild(naziv1)
const slika1= document.createElement( 'img')
slika1.id= 'pokemon1'
divJedan.appendChild(slika1)

const naziv2= document.createElement('p')
naziv2.id= 'naziv2pokemon2'
divJedan.appendChild(naziv2)
const slika2= document.createElement( 'img')
slika2.id= 'pokemon2'
divJedan.appendChild(slika2)

const naziv3= document.createElement('p')
naziv3.id= 'naziv3pokemon3'
divJedan.appendChild(naziv3)
const slika3= document.createElement( 'img')
slika3.id= 'pokemon3'
divJedan.appendChild(slika3)

const naziv4= document.createElement('p')
naziv4.id= 'naziv4pokemon4'
divJedan.appendChild(naziv4)
const slika4= document.createElement( 'img')
slika4.id= 'pokemon4'
divJedan.appendChild(slika4)


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