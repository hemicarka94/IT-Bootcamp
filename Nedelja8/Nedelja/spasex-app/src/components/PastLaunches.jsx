import React from 'react'
import { useEffect } from 'react'
import { getPastLaunches } from '../source'

export const PoslednjaLansiranja= (props) => {

    useEffect(()=>{
        getPastLaunches().then(res=>{
            props.setIspis(res.data)
        })
    },[])
    return(
       <>
       {props.ispis.map(el=>{
           if(el.launch_year == props.izabrane){
           return (
            <div key={el.launch_date_unix}>
            <p>{el.rocket.rocket_name}</p>
            <p>{el.launch_year}</p>
            <img style={{ width: '150px' }} alt='' src={el.links.mission_patch}/>
            </div> 
           )
           } 
           else if(props.izabrane == '-'){
               return(
                <div key={el.launch_date_unix}>
                <p>{el.rocket.rocket_name}</p>
                <p>{el.launch_year}</p>
                <img style={{ width: '150px' }} alt='' src={el.links.mission_patch}/>
                </div>
            )
        }
       })}
     </>
    )
}
