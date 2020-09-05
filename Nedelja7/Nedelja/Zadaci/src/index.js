import React, { useState } from 'react';
import ReactDOM from 'react-dom';


//Zadatak1

const Forma = ({input, button}) => {
  const [vrednost, setVrednost] = useState('')
 return(
   <>
   <input value= {vrednost} onChange= {e => setVrednost(e.target.value)}/>
   <button>{vrednost}</button>
 
   </>
 )
}

////// Zadatak 1 Drugi nacin
const Formaaa = () => {
  const [vrednost, setVrednost] = useState('')
  const [ispis, setIspis] =useState('klikni ')

  const Btn = () =>{
    return setIspis(vrednost)
  }

 return(
   <>
   <input value= {vrednost} onChange= {e => setVrednost(e.target.value)}/>
   <button onClick={() => Btn()}>{ispis}</button>
    <p>{ispis}</p>
   </>
 )
}




//// Zadatak2 

const Emoji =({url})=>(<img src={url} />)

const Description = ({opis}) =>(<p>{opis}</p>)

const Card = (props) => {
  return(
  <>
    <Emoji url={props.url} />
    <Description opis={props.opis} />
  </>
  )
}


const App = (props) =>{
  return (
    <>
    <Forma input value={props.vrednost}></Forma>
    <br></br>
    <Formaaa input value={props.vrednost}></Formaaa>
    <br></br>
    <Card url="https://www.adweek.com/wp-content/uploads/sites/8/2014/03/iOS-Emoticon-300x300.png" opis="PROBA"/>
    </>
  )
} 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



