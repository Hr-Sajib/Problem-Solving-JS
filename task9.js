// 09.Task: Advanced Sorting


const arrayOfObj = [
    {
        name: "sajib",
        grade: 3.5
    },
    {
        name: "rakib",
        grade: 4.0
    },
    {
        name: "amin",
        grade: 3.7
    },
]

function Fun(arrayOfObj){
    return arrayOfObj.sort((a,b)=> b.grade - a.grade)
}

console.log(Fun(arrayOfObj))