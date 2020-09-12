import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Header} from './components/Header'
import { PoslednjaLansiranja } from './components/PastLaunches';
import { Years } from './components/Select';
// import { Years } from './components/Select';

const App = (props) => {

const [naslov,setNaslov]= useState('')  
const [ispis,setIspis]= useState([])
const [godine,setGodine] = useState([])
const [izabrane, setIzabrane] = useState('-')



// Years()

  return(
    <>
    <Header nas={naslov} setNas={setNaslov}/>
    <Years ispis={ispis} setIspis={setIspis} izabrane={izabrane} setIzabrane={setIzabrane} godine={godine} setGodine={setGodine}/>
    <PoslednjaLansiranja ispis={ispis} setIspis={setIspis} izabrane={izabrane}/>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

