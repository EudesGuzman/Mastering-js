// Write your function here
function computeAverageOfNumbers(arr){

    if(arr.length == 0){
        return 0
    }else{
        let x = arr.reduce((a,b)=>a+b) 
        return x/arr.length
        
    }

}

var input = [];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3