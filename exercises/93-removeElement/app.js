// Write your function here
function removeElement(arr, parametro){


    for (let i = arr.length - 1; i>=0 ;i--){
     
        if(arr[i] == parametro){
            arr.splice(i,1)
            
        }
    }
    return arr
}


var output = removeElement([1, 2, 3, 2, 1], 2); 
console.log(output); // --> [1, 3, 1]