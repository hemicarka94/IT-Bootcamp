import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Ispis } from './components/Ispis'
import { Pretraga } from './components/Pretraga'

const Nav = () => {
  return (
    <nav>
      <Link to="/">Lista korisnika</Link>
      <br></br>
      <Link to="/pretraga">Pretrazi korisnike</Link>
    </nav>
  )
}


const App = () => {

  const [ispis, setIspis] = useState([])
  const [filtrirano, setFiltrirano] = useState('')

  return(
    <>
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Ispis ispis={ispis} setIspis={setIspis}/>
        </Route>

        <Route path= "/pretraga">
          <Pretraga filtrirano={filtrirano} setFiltrirano={setFiltrirano} ispis={ispis} setIspis={setIspis}/>
        </Route>
      </Switch>
    </Router>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

