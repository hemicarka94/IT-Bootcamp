const body = document.querySelector('#body')
let brojac =0
  
const divPoruci= document.createElement('div')
body.appendChild(divPoruci)

const dugmePoruci1 = document.createElement('button')

dugmePoruci1.textContent='PORUCI'
divPoruci.appendChild(dugmePoruci1)

const dugmePoruci2 = document.createElement('button')
dugmePoruci2.textContent='PORUCI'
divPoruci.appendChild(dugmePoruci2)

const paragrafPoruci = document.createElement('p')
paragrafPoruci.textContent= brojac
divPoruci.appendChild(paragrafPoruci)



const divOdmahP= document.createElement('div')
body.appendChild(divOdmahP)

const dugmeOdmahP1= document.createElement('button')
dugmeOdmahP1.textContent='PORUCI ODMAH'
divOdmahP.appendChild(dugmeOdmahP1)

const dugmeOdmahP2= document.createElement('button')
dugmeOdmahP2.textContent='PORUCI ODMAH'
divOdmahP.appendChild(dugmeOdmahP2)

const paragrafOdmah = document.createElement('p')
divOdmahP.appendChild(paragrafOdmah)




dugmePoruci1.addEventListener('click', () => {
    brojac++
    paragrafPoruci.textContent= brojac
})
dugmePoruci2.addEventListener('click', () => {
    brojac++
    paragrafPoruci.textContent= brojac
})


dugmeOdmahP1.addEventListener('click', () =>{
    if(brojac!==0){
        paragrafOdmah.textContent='Narucili se ' + brojac + ' pizza. Danaslji datum i vreme: ' + `${(new Date()).getDay()}-${(new Date()).getMonth()}-${(new Date()).getFullYear()} ${(new Date()).getHours()}:${(new Date()).getMinutes()}`
        brojac = 0
        paragrafPoruci.textContent= brojac
    } else{
        paragrafOdmah.textContent="Morate naruciti bar jednu pizzu!"
    }
})
dugmeOdmahP2.addEventListener('click', () =>{
    if(brojac!==0){
        paragrafOdmah.textContent='Narucili se ' + brojac + ' pizza. Danaslji datum i vreme: ' + `${(new Date()).getDay()}-${(new Date()).getMonth()}-${(new Date()).getFullYear()} ${(new Date()).getHours()}:${(new Date()).getMinutes()}`
        brojac = 0
        paragrafPoruci.textContent= brojac
    } else{
        paragrafOdmah.textContent="Morate naruciti bar jednu pizzu!"
    }
})

