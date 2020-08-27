import { getPastLaunches } from './service.js'
import { Launch } from './Launch.js'
import { divLista} from './opcije'

export const Launchlist = () => {
    getPastLaunches().then(res => {
        res.data.forEach(element => {
                divLista.appendChild(Launch(element))
                document.querySelector('#app').appendChild(divLista)
        });
    })
    return divLista
}
