import { nizPokemoni } from './module.js'

const divDva= document.createElement('div')
divDva.id= 'winner'
document.body.appendChild(divDva)

const najPok= document.createElement('p')
divDva.appendChild(najPok)

const najjaciSlika=document.createElement('img')
divDva.appendChild(najjaciSlika)

let niz1=[]
    nizPokemoni.sort ((a,b) => b.karakteristike.napad - a.karakteristike.napad).map(element => {
        niz1.push(nizPokemoni[0].ime)
        return nizPokemoni[0]
    })
    'pobednik'.previousElementSibling

function zadugme2(){
    najPok.textContent= nizPokemoni[0].ime, 
    najjaciSlika.src=nizPokemoni[0].slika
}
    
export {zadugme2}