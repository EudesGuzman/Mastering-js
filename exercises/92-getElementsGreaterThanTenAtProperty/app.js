// Write your function here
function getElementsGreaterThan10AtProperty(obj, key){
    let newArr = [];

    const result = obj[key].filter(word => word < 10)
//
//
//
    
  if(obj[key].length < 1 || result == 0 || Array.isArray(obj[key]) == false || obj.hasOwnProperty(key) == false){
      return newArr
  }
    
    for( i in obj[key]){
       
        //console.log(obj[key][i])
        if(obj[key][i] > 10){
            newArr.push(obj[key][i])
        }
    }
    return newArr

}

var obj = {
  key: [1, 20, 30]
};
var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]