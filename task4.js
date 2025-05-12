// 4.Task: Sorting Objects

const arrayOfCarObjs = [
    {
        make: "Toyota",
        model: "axios",
        year: 2025
    },
    {
        make: "BMW",
        model: "M5",
        year: 2021
    },
    {
        make: "BYD",
        model: "spectra",
        year: 2024
    }
]


function sortArray (arrayOfCarObjs){
    return arrayOfCarObjs.sort((a,b)=> a.year - b.year)
}

console.log(sortArray(arrayOfCarObjs))