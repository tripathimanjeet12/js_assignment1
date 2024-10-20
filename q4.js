// You are provided a four digit number N only. Your task is to print out the first digit of that 
// number.
// Note: You have to complete First_Digit function. No need to take any input


function first_digit(N){
    return Math.floor(N/1000);
}
console.log(first_digit(4567));