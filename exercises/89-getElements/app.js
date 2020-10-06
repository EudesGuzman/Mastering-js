// Write your function here
function getElementsThatEqual10AtProperty(obj,key){
    //console.log(obj[key])
    emptyArr = []
    

    if(obj[key].length == 0 || Array.isArray([obj[key]]) != true ){
        return emptyArr
    }else{
     
        for (let i =0; i <obj[key].length;i++){
         
            if(obj[key][i] == 10){
                return obj[key][i]
            }
            
        }
    }

}

var obj = {
  key: [1000, 10, 50, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]