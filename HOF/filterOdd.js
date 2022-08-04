var arr = ["Apple", "Windows", "Linux", "Kindle", "Quiz"];

var res = arr.filter(oddElem).map(oddLength).reduce(sum)

function oddElem(elem){
    return elem.length%2 != 0;
}

function oddLength(elem){
    return elem.length;
}

function sum(ac, cv){
    return ac+cv;
}
console.log(res)