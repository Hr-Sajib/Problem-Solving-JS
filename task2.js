// 2.Task: Object Manipulation

const arrayOfBooksObj = [
    {
        title: "book1",
        author: "Jhankar",
        yeargender: 2012
    },
    {
        title: "book2",
        author: "Abul",
        yeargender: 2013
    },
    {
        title: "book3",
        author: "Hablu",
        yeargender: 2014
    }   
]


function Fun(arrayOfBooksObj) {
    return arrayOfNames = arrayOfBooksObj.map(obj => obj.title)
}

console.log(Fun(arrayOfBooksObj))