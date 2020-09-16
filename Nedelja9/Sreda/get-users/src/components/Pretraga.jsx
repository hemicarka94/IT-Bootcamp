import React from 'react'
import { FiltriraniKorisnici } from './FiltriraniKorisnici'


const Izbrisi = () => {
    return(
        <button>Izbrisi</button>
    )
}

export const Pretraga = ({filtrirano, setFiltrirano, ispis, setIspis}) => {
    return(
        <>
    <input onChange ={(e)=> {
        return(
        <>
        {setFiltrirano(e.target.value) }
        {Izbrisi()}
        </>
                )
            }
        }
        placeholder="Pretrazi korisnike"></input>
        <FiltriraniKorisnici filtrirano={filtrirano} ispis={ispis} setIspis={setIspis}/>
        </>
    )
}