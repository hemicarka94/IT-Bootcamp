import { headerInfo } from './service'

export const headerIspis = () => {
    const divHeader= document.createElement('div')
     headerInfo().then(res => {
         const nazivFirme= document.createElement('p')
         nazivFirme.id='nazivfirme'
         nazivFirme.textContent=res.data.name
         nazivFirme.style.color='white'
         divHeader.appendChild(nazivFirme)

         const osnivacFirme = document.createElement('p')
         osnivacFirme.id='osnivacfirme'
         osnivacFirme.textContent=res.data.founder
         osnivacFirme.style.color='white'
         divHeader.appendChild(osnivacFirme)

         const godisteFirme = document.createElement('p')
         godisteFirme.id='godistefirme'
         godisteFirme.textContent=res.data.founded
         godisteFirme.style.color='white'
         divHeader.appendChild(godisteFirme)
     })
     return divHeader
}