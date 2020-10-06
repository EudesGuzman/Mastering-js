// Write your function here
function getFirstElementOfProperty(obj, key){

    if(obj[key].length === 0 || Array.isArray(obj[key] === false || obj.hasOwnProperty('key'))){
        return undefined
    }
 
        return obj[key][0]
    
}

var obj = {
  key: [1, 2, 4]
};
var output = getFirstElementOfProperty(obj, 'key');
console.log(output); // --> 1