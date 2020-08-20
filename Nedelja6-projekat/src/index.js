import{ btn } from './button.js'

const div1 = document.createElement('div')
div1.id="div1"
document.body.appendChild(div1)

const naslov = document.createElement('p')
naslov.id="naslov"
naslov.textContent='Dostupan budzet u Septembru 2020:'
div1.appendChild(naslov)

const raspSred = document.createElement('p')
raspSred.id="raspSred"
div1.appendChild(raspSred)

const divPRgore= document.createElement('div')
div1.appendChild(divPRgore)

const divUkupniPrihodi= document.createElement('div')
divUkupniPrihodi.id='divUP'
divPRgore.appendChild(divUkupniPrihodi)

// ukupni prihodi
const tabelaPrihodi = document.createElement('table')
tabelaPrihodi.id='tabelaP'
divUkupniPrihodi.appendChild(tabelaPrihodi)

const kolonaPrihodi1 = document.createElement('th')
tabelaPrihodi.appendChild(kolonaPrihodi1)

const kolonaPrihodi2 = document.createElement('th')
tabelaPrihodi.appendChild(kolonaPrihodi2)

const nazivUP= document.createElement('p')
nazivUP.id='nazivUP'
nazivUP.textContent='PRIHODI'
kolonaPrihodi1.appendChild(nazivUP)

const iznosUP = document.createElement('p')
iznosUP.id='iznosUP'
kolonaPrihodi2.appendChild(iznosUP)

const divUkupniRashodi= document.createElement('div')
divUkupniRashodi.id='divUR'
divPRgore.appendChild(divUkupniRashodi)

const tabelaRashodi = document.createElement('table')
tabelaRashodi.id='tabelaR'
divUkupniRashodi.appendChild(tabelaRashodi)

const kolonaRashodi1 = document.createElement('th')
tabelaRashodi.appendChild(kolonaRashodi1)
const kolonaRashodi2 = document.createElement('th')
tabelaRashodi.appendChild(kolonaRashodi2)
const kolonaRashodi3 = document.createElement('th')
tabelaRashodi.appendChild(kolonaRashodi3)


const kolonaRashodi = document.createElement('th')
tabelaRashodi.appendChild(kolonaRashodi)

const nazivUR= document.createElement('p')
nazivUR.id='nazivUR'
nazivUR.textContent='RASHODI'
kolonaRashodi1.appendChild(nazivUR)

const iznosUR = document.createElement('p')
iznosUR.id='iznosUR'
kolonaRashodi2.appendChild(iznosUR)

const procenatGore = document.createElement('p')
procenatGore.id='procenatGore'
kolonaRashodi3.appendChild(procenatGore)




///// donji deo sa inputom
const div2 = document.createElement('div')
div2.id='div2'
document.body.appendChild(div2)

const izaberi = document.createElement('select')
izaberi.id='selektuj'
div2.appendChild(izaberi)

const izaberiPrihodi= document.createElement('option')
izaberiPrihodi.textContent='PRIHODI'
izaberi.appendChild(izaberiPrihodi)

const izaberiRashodi = document.createElement('option')
izaberiRashodi.textContent='RASHODI'
izaberi.appendChild(izaberiRashodi)

const opis= document.createElement('input')
opis.id='opis'
opis.placeholder='OPIS'
div2.appendChild(opis)

const iznosinput= document.createElement('input')
iznosinput.id='inputvrednost'
iznosinput.placeholder='IZNOS'
div2.appendChild(iznosinput)

const dugmepotvrde= document.createElement('button')
dugmepotvrde.id='potvrdi'
dugmepotvrde.type='submit'
dugmepotvrde.textContent='  ✔  '
btn()
div2.appendChild(dugmepotvrde)

///tabela za prihode rashode
const div3= document.createElement('div')
div3.id='div3'
document.body.appendChild(div3)

const tabela = document.createElement('table')
tabela.id='donjaTabela'
div3.appendChild(tabela)

const kolona1 = document.createElement("tH")
kolona1.id='kolona1'
tabela.appendChild(kolona1)

const kolona2 = document.createElement("tH")
kolona2.id='kolona2'
tabela.appendChild(kolona2)


const dPrihod= document.createElement('div')
kolona1.appendChild(dPrihod)

const pPrihodi = document.createElement('p')
pPrihodi.id='pPrihodi'
pPrihodi.textContent=   'PRIHODI'
dPrihod.appendChild(pPrihodi)

// const listaPrihodi= document.createElement('p')
// listaPrihodi.id='listaPrihodi'
// dPrihod.appendChild(listaPrihodi)


const dRashod=document.createElement('div')
kolona2.appendChild(dRashod)

const pRashodi = document.createElement('p')
pRashodi.id='pRashodi'
pRashodi.textContent='RASHODI'
dRashod.appendChild(pRashodi)
const listaRashoda = document.createElement('div')
listaRashoda.id='listaRashoda'
dRashod.appendChild(listaRashoda)


export{ kolonaRashodi3, opis, iznosinput, izaberi, dugmepotvrde, iznosUP, iznosUR, raspSred, div2, dPrihod, dRashod, procenatGore, listaRashoda}