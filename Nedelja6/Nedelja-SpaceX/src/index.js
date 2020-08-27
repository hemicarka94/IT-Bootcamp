import{ Launchlist}  from './components/Launchlist'
import { sveGodine} from './components/opcije'
import { headerIspis } from './components/header'

export const app= document.querySelector('#app')
const header = document.querySelector('#header')
header.appendChild(headerIspis())

export const divs= document.querySelector('#divselect');
divs.appendChild(sveGodine())

app.appendChild(Launchlist())
app.appendChild(sveGodine())

// app.appendChild(Launchlist())
