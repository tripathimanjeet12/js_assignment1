// Shyam has got his marks in three subjects as A�, B�, and C�(out of 100).Write a program to 
// calculate his total marks and his average.
// Note: You have to complete Sum and Average functions. No need to take any input.


function sum(A,B,C){
    return A+B+C;
}
function Average(A,B,C){
    let total=sum(A,B,C)
    return total/3;
}
let A =50;
let B =20;
let C =100;
console.log("Total Marks:"+sum(A,B,C));
console.log("Average Marks:"+Average(A,B,C));