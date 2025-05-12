// 3.Task: Function Composition

function squareNumber (num) {
    return num*num;
}
function doubleNumber (num) {
    return num*2;
}
function add5ToNumber (num) {
    return num+5;
}


function mainFun (num) {
    return add5ToNumber(doubleNumber(squareNumber(num)));
}


console.log(mainFun(2))