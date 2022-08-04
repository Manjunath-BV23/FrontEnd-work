var arr = ["apple", "windows", "ubuntu"];

var res = arr.map(firstLetter);

function firstLetter(elem){
    return elem[0];
}

console.log(res)