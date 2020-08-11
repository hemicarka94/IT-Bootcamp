import { nizPokemoni } from './module.js'

function najjaci(nizPokemoni) {
    let y = nizPokemoni.sort ((a,b) => b.karakteristike.napad - a.karakteristike.napad).map(element => {
        return nizPokemoni[0].ime
    })
    return y[0]
}
console.log(najjaci(nizPokemoni))

