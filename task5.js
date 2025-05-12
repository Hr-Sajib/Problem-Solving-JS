// 5.Task: Array Reduction


const array = [1,2,3,4,5,6]

function Fun(array){
    return array.reduce((acc, num) => acc+num)
}


console.log(Fun(array))