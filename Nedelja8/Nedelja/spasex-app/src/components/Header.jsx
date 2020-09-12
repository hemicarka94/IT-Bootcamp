import React, { useEffect } from 'react'
import { headerInfo } from '../source';


export const Header =(props)=> {

  
    useEffect(()=> {
      headerInfo().then(res => {
       props.setNas(res.data.name  + " || "+ res.data.founder + " || "+ res.data.founded )
      // <p>{res.data.name} || {res.data.founder} || {res.data.founded}</p>
      })
    },[])
    return (
        <p>{props.nas}</p>
    )
  }