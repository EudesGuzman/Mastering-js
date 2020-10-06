// Write your function here
function getElementsLessThan100AtProperty(obj,key){
    let lessThan100 =[];
 
    if(key == undefined || Array.isArray(obj[key]) != true || obj[key].length == 0 || obj[key].filter(num => num < 100).length == 0){
        return []
    }
    for(let i=0; i < obj[key].length; i++){
      
        if(obj[key][i] < 100){
            lessThan100.push(obj[key][i])
        }
    }
    return lessThan100


}


var obj = {
  key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj,'key');
console.log(output); // --> [20, 50]