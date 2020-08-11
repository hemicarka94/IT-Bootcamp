let slicica;
pokemon1={
    ime:'Charizard',
    vrsta:'Vatreni',
    sposobnosti: ['plamen', 'solarna energija', 'letenje'],
    karakteristike:{
        napad: 84,
        odbrana: 78,
        brzina: 100
        },
    slika:'https://2.bp.blogspot.com/-JvY6yCgdSNc/VKyTmIZBzFI/AAAAAAAAALE/84eth9ZVbqs/s1600/479px-Charizard.png'
    }
    pokemon2={
    ime:'Jigglypuff',
    vrsta:'Carobni',
    sposobnosti: ['slatki sarm', 'konkurentnost', 'prijateljski nastrojen'],
    karakteristike:{
        napad: 45,
        odbrana: 20,
        brzina: 20
        },
    slika:'https://sketchok.com/images/articles/06-anime/003-pokemon/06/07.jpg'
    }
    pokemon3={
    ime:'Vulpix',
    vrsta: 'Vatreni',
    sposobnosti: ['instant vatra', 'susa'],
    karakteristike:{
        napad: 41,
        odbrana: 40,
        brzina: 65
        },
    slika:'https://img.pokemondb.net/artwork/large/vulpix.jpg'
    }
    pokemon4={
    ime:'Machop',
    vrsta:'Borbeni',
    sposobnosti: ['jaka pesnica', 'cuvanje', 'upornost'],
    karakteristike:{
        napad: 80,
        odbrana: 50,
        brzina: 35
        },
    slika:'https://cdn.bulbagarden.net/upload/8/85/066Machop.png'
    }
let nizPokemoni=[pokemon1, pokemon2, pokemon3, pokemon4]

// Zadatak 4  Направити функцију која прима низ покемона, пореди покемоне по јачини и враћа као победника оног који има највећу јачину напада.
function najjaci(nizPokemoni) {
    let y = nizPokemoni.sort ((a,b) => b.karakteristike.napad - a.karakteristike.napad).map(element => {
        return nizPokemoni[0].ime
    })
    return y[0]
}
console.log(najjaci(nizPokemoni))


/// Zadatak 5 

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




document.getElementById('prikaz').addEventListener('click', e =>{
    
    let svi = document.getElementById('oPokemonima')
    svi.classList.remove('hide')
    svi.classList.add('show')

    let pokPobednik = document.getElementById('winner')
    pokPobednik.classList.remove('show')
    pokPobednik.classList.add('hide')
    
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
    
})
 


const divDva= document.createElement('div')
divDva.id= 'winner'
document.body.appendChild(divDva)

// function svi(nizPokemoni) {
//     nizPokemoni.forEach(element => {
//         const najPok= document.createElement('p')
//         console.log(najPok)
//         najPok.textContent='pokemoni'
//         divDva.appendChild(najPok)

//         const najjaciSlika= document.createElement('img')
//         img.src = 'element.slika'
        
//     });
// }

const najPok= document.createElement('p')
divDva.appendChild(najPok)

const najjaciSlika=document.createElement('img')
divDva.appendChild(najjaciSlika)

document.getElementById('pobednik').addEventListener('click', (event) => {
    let svi = document.getElementById('oPokemonima')
    svi.classList.remove('show')
    svi.classList.add('hide')

    let pokPobednik = document.getElementById('winner')
    pokPobednik.classList.remove('hide')
    pokPobednik.classList.add('show')

    niz1=[]
    nizPokemoni.sort ((a,b) => b.karakteristike.napad - a.karakteristike.napad).map(element => {
        niz1.push(nizPokemoni[0].ime)
        return niz1[0]
    })
    'pobednik'.previousElementSibling


najPok.textContent= nizPokemoni[0].ime
najjaciSlika.src=nizPokemoni[0].slika
})
