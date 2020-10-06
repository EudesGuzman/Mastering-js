
function addToFrontOfNew(arr, element) {
    const newArr = arr.slice();             
    newArr.unshift(element);                

    return newArr;
}
 

var input = [1, 2];
var output = addToFrontOfNew(input, 3);

console.log(input)
console.log(output)

