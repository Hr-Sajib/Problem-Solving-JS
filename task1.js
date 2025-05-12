// 1.Task: Array Filtering and Mapping

const arrayOfObj = [
    {
        name: "sajib",
        age: 23,
        gender: "male"
    },
    {
        name: "rajib",
        age: 24,
        gender: "male"

    },
    {
        name: "sadia",
        age: 25,
        gender: "female"
    }
]


function Fun(arrayOfObj) {
    const remainingArrayOfNames = arrayOfObj.filter(obj => obj.gender !== 'female')
        .map(obj => obj.name)

    return remainingArrayOfNames
}


console.log(Fun(arrayOfObj))