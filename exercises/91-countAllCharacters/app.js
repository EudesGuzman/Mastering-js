// Write your function here
function countAllCharacters(str) {
    let count = {};
    str.split('').forEach(function (s) {
        //console.log(count, s, "contador")
        if (count[s]) {
            count[s]++
        } else {
            count[s] = 1
        }

    });
    return count;
}






var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}