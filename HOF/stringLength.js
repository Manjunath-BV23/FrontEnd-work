var arr = ["apple", "windows", "ubuntu"];

var res = arr.map(stringLength);

function stringLength(elem){
    return elem.length
}

console.log(res)