import React, { useEffect, useState } from 'react';
import { getAll } from '../source';

export const Ispis = ({ispis,setIspis}) => {

  
    useEffect(() => {
        getAll().then(res => {
            console.log(res.data.data)
            setIspis(res.data.data)
        })
    },[])
    return(
    ispis.map(el => <p key={el.id}>{el.first_name} {el.last_name}</p>)
    )
}