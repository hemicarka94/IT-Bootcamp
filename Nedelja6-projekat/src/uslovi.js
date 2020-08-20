import{ opis, iznosinput, dugmepotvrde, izaberi} from './index.js'
const uslovi = () => opis.value.trim() !==''
                    && !Number.isNaN(Number(iznosinput.value.trim()))
                    && iznosinput.value !== ''
                    && izaberi.value=='PRIHODI'
 

const uslov2 = () => opis.value.trim() !==''
                    && !Number.isNaN(Number(iznosinput.value.trim()))
                    && iznosinput.value !== ''
                    && izaberi.value=='RASHODI'




  export { uslov2, uslovi, dugmepotvrde}