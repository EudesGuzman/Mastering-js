// Write your function here

function getAverageOfElementsAtProperty(obj,key){
    if (obj[key].length == 0 || Array.isArray(obj[key]) != true || obj.hasOwnProperty(key) == false) {
        return 0;
     } else {
         let suma = obj[key].reduce((a, b) => a + b);
        return suma/obj[key].length;
    }


  
}

var obj = {
   key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2