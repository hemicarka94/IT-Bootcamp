{
    function poluPrecnikiCena(cenaPice, poluprecnik){
        let povrsina=Math.pow(poluprecnik, 2) * Math.PI
        let cenaPocm= cenaPice/povrsina
        console.log(cenaPocm)
    }
}
poluPrecnikiCena(500, 32)