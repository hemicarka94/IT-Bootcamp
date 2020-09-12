import React from 'react'
import { useEffect, useState } from 'react'
import { getAll } from '../source'


export const Years= (props) => {


    useEffect(()=> {
        getAll().then(res=> {
            let y= res.data.sort((a,b) =>  a.launch_year - b.launch_year)
            let x=y.map(el=> el.launch_year)
            let filtriraneGodine=[]
            for(let i = x[0]; i<=x[x.length-1]; i++){
                filtriraneGodine.push(i)
            }
            props.setGodine(filtriraneGodine)
            console.log(res.data)
            console.log(x)
            console.log(filtriraneGodine)
        })
    },[])  
 
    const listaIzabrani = (e) =>{
        props.setIzabrane(e.target.value)
        getAll().then(res=> {
            props.setIspis(res.data)
        }) 
    }
            

    return(
    <select onChange={(e) => listaIzabrani(e)}><option>-</option>{props.godine.map(el=> (<option value={el}>{el}</option>))}</select> 
    )
}