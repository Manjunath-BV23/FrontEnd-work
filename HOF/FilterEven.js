var arr = [2, 4, 5, 3, 6, 8];

var res = arr.filter(evenAndIndex);

function evenAndIndex(elem,index){
    return elem%2 == 0 && index%2 == 0;
}
console.log(res)