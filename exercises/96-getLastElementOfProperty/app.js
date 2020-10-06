// Write your function here
function getLastElementOfProperty(obj,key){

  if(obj[key].length == 0 || Array.isArray(obj[key]==false || obj.hasOwnProperty(key) == false)){
      return undefined
  }else{
    
    return obj[key][obj[key].length - 1]
    }
 
}

var obj = {
  key: [1, 2, 5]
};
var output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5