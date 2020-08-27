import { getAll} from './service'
import { Launch } from './Launch';
import { divs } from '../index'
import { Launchlist } from './Launchlist';


export const divLista = document.createElement('div')
divLista.className='launch-list'

export const  sveGodine = () => {
    const select= document.createElement('select')
    const option = document.createElement('option')
    option.value='-'
    option.textContent=option.value
    select.appendChild(option)
    select.id='select'
    getAll().then(res => {
        let niz=[]       
   
        res.data.forEach(element => {
            niz.push(element.launch_year)
        })
        const x= niz.sort((a , b) => a.value - b.value )
        for(let i = x[0]; i<=x[(niz.length-1)]; i++){
            const option = document.createElement('option')
            option.value= i
            option.textContent= option.value
            select.appendChild(option)
        
        }
        Launchlist()

        select.addEventListener('change', (event) => {
            event.preventDefault()
            divLista.innerHTML= ''
            getAll().then(res => {
                res.data.forEach(element => {
                    if(select.value == element.launch_year){
                        divLista.appendChild(Launch(element))
                        document.querySelector('#app').appendChild(divLista)
                    }
                })
             
            })
            return divLista
        })

})
    divs.appendChild(select)
}


