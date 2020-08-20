import{ uslovi, uslov2, dugmepotvrde} from './uslovi.js'
import{procenatGore, iznosinput,div2,iznosUR, iznosUP, raspSred, dPrihod,opis, listaRashoda} from './index.js'
import { nizPrihodi, nizRashodi } from './nizovi.js'
 
let sumaSvega = 0
let sumaPrihodi = 0
let sumaRashodi = 0
let sumaProcenata = 0

let brojac= nizRashodi.length

export function btn() {
    dugmepotvrde.addEventListener('click', (event) =>{
        event.preventDefault() 
        const procenatR= document.createElement('p')
    
    if(uslovi()){
        console.log('prihod')
        sumaPrihodi += Number(iznosinput.value)
        iznosUP.textContent= '+' + sumaPrihodi.toFixed(2)

        sumaSvega = sumaSvega + Number(iznosinput.value)
        raspSred.textContent = '+' + sumaSvega.toFixed(2)
       
        nizPrihodi.push({
            opis: opis.value,
            iznos:iznosinput.value
        })

        sumaProcenata= sumaRashodi*100 /sumaPrihodi
        procenatGore.value = sumaProcenata.toFixed(2)
        procenatGore.textContent= Number(procenatGore.value) + '%'

        const divPrihod = document.createElement('div')
        divPrihod.id='ispisPrihoda'
        const ispisPrihodi = document.createElement('p')
        ispisPrihodi.id='paragrafprihodi'
        ispisPrihodi.value= Number(iznosinput.value)
        ispisPrihodi.textContent= '+' + Number(ispisPrihodi.value)
        const ispisOpis= document.createElement('p')
        ispisOpis.id='opisPrihod'
        ispisOpis.textContent= opis.value
        
        dPrihod.appendChild(divPrihod)
        divPrihod.append(ispisOpis, ispisPrihodi)
        IzmenaRashoda()
        //dugme P Delete
        const dugmeDelete = document.createElement('button')
        dugmeDelete.textContent='X'
        dugmeDelete.id='delete'
        dugmeDelete.addEventListener('click', (event) => {
            event.preventDefault()
            
            sumaSvega -= Number(ispisPrihodi.value)
            raspSred.textContent = sumaSvega
            sumaPrihodi-= Number(ispisPrihodi.value)
            iznosUP.textContent = sumaPrihodi
            const menjanjeProcenta = document.createElement('p')
            menjanjeProcenta.id='menjanjeProcenata'
            menjanjeProcenta.value= iznosinput.value*100 / sumaPrihodi
            sumaProcenata = sumaRashodi*100 /sumaPrihodi
            procenatGore.value = sumaProcenata
            procenatGore.textContent= Number(procenatGore.value) + '%'
            procenatR.id='procenatDole'
            procenatR.value= iznosinput.value*100 /sumaPrihodi
            procenatR.textContent= "-"+ procenatR + '%'
            dugmeDelete.parentElement.remove()
            IzmenaRashoda();
        })
        divPrihod.appendChild(dugmeDelete)

    }else if(uslov2()){
        console.log('rashod')
        sumaRashodi = sumaRashodi - Number(iznosinput.value)
        iznosUR.textContent = sumaRashodi.toFixed(2)

        sumaSvega = sumaSvega - Number(iznosinput.value)
        raspSred.textContent = sumaSvega.toFixed(2)

        nizRashodi.push({
            id: brojac,
            opis:opis.value,
            iznos:iznosinput.value
        })
        IzmenaRashoda()

    }else{
        console.log('GRESKA')
        const greska= document.createElement('p')
        greska.textContent='PROVERITE DA LI JE UNOS ISPRAVAN!'
        div2.appendChild(greska)
    }
    iznosinput.value=''
    opis.value=''
})

}
function IzmenaRashoda() {
    let lsRashoda = document.getElementById('listaRashoda')
    lsRashoda.innerHTML = ''
    nizRashodi.forEach(element => {
    const divRashod = document.createElement('div')
    divRashod.id='ispisRashoda'
    const ispisRashodi = document.createElement('p')
    ispisRashodi.id='paragrafrashodi'
    ispisRashodi.textContent= '-' + Number(element.iznos).toFixed(2)
    const ispisOpis= document.createElement('p')
    ispisOpis.id='opisRashod'
    ispisOpis.textContent= element.opis
    const procenatR= document.createElement('p')
    procenatR.id='procenatDole'
    procenatR.value = element.iznos*100 /sumaPrihodi
    procenatR.textContent= "-" + procenatR.value.toFixed(2) + '%'
    sumaProcenata = sumaRashodi*100 /sumaPrihodi
    procenatGore.value = sumaProcenata.toFixed(2)
    procenatGore.textContent= Number(procenatGore.value) + '%'
    listaRashoda.appendChild(divRashod)
    divRashod.append(ispisOpis, ispisRashodi, procenatR)
    brojac++
      const dugmeDelete = document.createElement('button')
        dugmeDelete.id='delete2'
        dugmeDelete.value=element.iznos
        dugmeDelete.textContent='X'
        dugmeDelete.addEventListener('click', (element) => {
            sumaSvega += Number(element.target.value)
            raspSred.textContent=sumaSvega.toFixed(2)
            sumaRashodi+= Number(element.target.value)
            iznosUR.textContent= sumaRashodi.toFixed(2)
            sumaProcenata -= -Number(element.target.value) *100 /sumaPrihodi
            procenatGore.value = sumaProcenata.toFixed(2)
            procenatGore.textContent= Number(procenatGore.value) + '%'
            nizRashodi.splice(nizRashodi.findIndex(el => el.id === element.id), 1)
            dugmeDelete.parentElement.remove()
        })

        divRashod.appendChild(dugmeDelete)
    })
    
}
export{ sumaPrihodi }