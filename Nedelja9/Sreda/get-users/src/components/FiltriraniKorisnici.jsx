import React from 'react'

export const  FiltriraniKorisnici = ({filtrirano, ispis,setIspis}) => {

    let tmp = [...ispis]
    return (
        <>
    {console.log(filtrirano)}
    {tmp
        .filter(el =>el.first_name.toLowerCase().includes(filtrirano.toLowerCase())).map(el=>{
            return(
            <>
            <p key={el.id}>{el.first_name} {el.last_name}</p>
            {console.log(el.id)}
        
            <button onClick={()=> {
                return(
                    <>
                   {tmp.splice(tmp.findIndex(element=> element.id === el.id),1)}
                   {setIspis(tmp)}
                   </>
                )
            }}>X</button>
            </>
            )

        })
    }
    </>
    )
}