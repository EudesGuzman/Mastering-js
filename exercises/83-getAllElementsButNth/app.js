// Write your function here
function getAllElementsButNth(array, n) {
    array.splice(n, 1);                                     // Use the .splice() method, with first parameter beign the index you want to remove, second parameter is how many
    
    return array;
}

var output = getAllElementsButNth(['a', 'b', 'c'], 1);

console.log(output); // --> ['a', 'c']