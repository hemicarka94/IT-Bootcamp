//napisati funkciju koja ispisuje sve elemente niza koji su deljivi sa 5
{
    function divisibleByFive(arr){
        for(i = 0; i< arr.length; i++){
            if(arr[i] % 5 === 0){
                console.log(arr[i])
            }
        } 
    }
    
divisibleByFive([1,5,7,10,15, 25, 5])
}
/// drugi nacin
{
    function divisibleByFive(arr){
        let deljivosapet=''
        for(i = 0; i< arr.length; i++){
            if(arr[i] % 5 === 0){
                deljivosapet+=(arr[i] +' ')
            }
        } 
        console.log(deljivosapet)
    }
    
divisibleByFive([1,5,7,10,15, 25, 5])
}
// treci nacin
{
    function divisibleByFive(arr){
        let deljivosapet=[]
        for(i = 0; i< arr.length; i++){
            if(arr[i] % 5 === 0){
                deljivosapet.push(arr[i])
            }
        } 
        console.log(deljivosapet)
    }
    
divisibleByFive([1,5,7,10,15, 25, 5])
}
// cetvrti nacin
console.log("-------------------------")
{
    function divisibleByFive(arr){
        let niz=[]
        for(i = 0; i< arr.length; i++){
            if(arr[i] % 5 === 0){
                niz.push(arr[i])
            
            }
        }
        return niz
    }
    
console.log(divisibleByFive([1,5,7,10,15, 25, 5]))
}