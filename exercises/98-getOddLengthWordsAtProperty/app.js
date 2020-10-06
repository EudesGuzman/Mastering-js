// Write your function here
function getOddLengthWordsAtProperty(obj, key){
let newArr = [];

    if(obj[key].length < 1 || Array.isArray(obj[key] == false)|| obj.hasOwnProperty(key) == false ){
        return []
    }else{
        for( i in obj[key]){
            if( i % 2 !=0 ){
                newArr.push(obj[key][i])
            }
        }
    }
    return newArr
}

var obj = {
  key: ['It', 'has', 'some', 'words']
};
var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']