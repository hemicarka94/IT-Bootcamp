function pokem() {
    let svi = document.getElementById('oPokemonima')
    svi.classList.remove('hide')
    svi.classList.add('show')

    let pokPobednik = document.getElementById('winner')
    pokPobednik.classList.remove('show')
    pokPobednik.classList.add('hide')
}


function samonaj(){
    let svi = document.getElementById('oPokemonima')
    svi.classList.remove('show')
    svi.classList.add('hide')

    let pokPobednik = document.getElementById('winner')
    pokPobednik.classList.remove('hide')
    pokPobednik.classList.add('show')
}

    export { pokem }
    export { samonaj }