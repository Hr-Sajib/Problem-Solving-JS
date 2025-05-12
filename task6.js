// 6. Task: Leap Year Checker


function Fun(yr){
    if((yr%4==0 && yr%100!==0) || yr%400==0 ){
        return `${yr} is a leap year! 🎉 Happy New Year!`
    }
    else{
        return `${yr} is not a leap year!`
    }
}

console.log(Fun(2025))