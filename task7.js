// 7. Task: Unique Values

const array = [1,1,2,3,3,4,5]

function Fun(array){
    return [...new Set(array)]
}


console.log(Fun(array))