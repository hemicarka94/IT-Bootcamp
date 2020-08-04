//Zadatak1   Направити објекат покемон који садржи следеће информације: (Направите макар 4 различита покемона)

 pokemon1={
    ime:'Charizard',
    vrsta:'Vatreni',
    sposobnosti: ['plamen', 'solarna energija', 'letenje'],
    karakteristike:{
        napad: 84,
        odbrana: 78,
        brzina: 100
        }    
    }
    pokemon2={
    ime:'Jigglypuff',
    vrsta:'Carobni',
    sposobnosti: ['slatki sarm', 'konkurentnost', 'prijateljski nastrojen'],
    karakteristike:{
        napad: 45,
        odbrana: 20,
        brzina: 20
        }    
    }
    pokemon3={
    ime:'Vulpix',
    vrsta: 'Vatreni',
    sposobnosti: ['instant vatra', 'susa'],
    karakteristike:{
        napad: 41,
        odbrana: 40,
        brzina: 65
        }    
    }
    pokemon4={
    ime:'Machop',
    vrsta:'Borbeni',
    sposobnosti: ['jaka pesnica', 'cuvanje', 'upornost'],
    karakteristike:{
        napad: 80,
        odbrana: 50,
        brzina: 35
        }   
    }
let nizPokemoni=[pokemon1, pokemon2, pokemon3, pokemon4]
console.log(nizPokemoni)


//Zadatak 2 Направити функцију која прима низ горе направљених објеката и враћа један низ способности свих покемона.

// function ability(pok){
//     let a = pok.map(elemnt => {
//         let niz = []
//         niz.push(elemnt.sposobnosti)
//         return niz.flat()
//     })
//     return a.flat()
// }
// console.log(ability(nizPokemoni))


function ability(nizPokemoni){
    let niz=[]
    nizPokemoni.forEach(element => {
        niz.push(element.sposobnosti)
    });
    return niz.flat()
}
console.log(ability(nizPokemoni))


// Zadatak 3  Сортирати покемоне по брзини, растуће.


function nizPokemoniBrzina(x){
     let y =  x.sort((a,b) => a.karakteristike.brzina - b.karakteristike.brzina).map(element => {
        let nizimenaBrzina=[]
        nizimenaBrzina.push({ime: element.ime, brzina: element.karakteristike.brzina})
        return nizimenaBrzina.flat()
    })
    return y.flat()
}
console.log(nizPokemoniBrzina(nizPokemoni))
