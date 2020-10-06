// Write your function here
function keep(arr,e){

    newArr = []
    for (i in arr){
        //console.log(i, arr[i])
        if(arr[i] == e){
            
            newArr.push(e)

        }else{
            return []
        }

    }
    return newArr
}

var output = keep([1, 2, 3, 2, 1], 2) 
console.log(output); // --> [2, 2]