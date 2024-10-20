// You are given two numbers A�and B�. You need to do the following checks:
// 1. if both are divisible by 10 console true.
// 2. if both are not divisible by 10 console false.
// 3. if one of them only is divisible by 10 console true.
// Use operator to do this.
// Note: You have to complete Check function. No need to take any in..


let A=12;
let B=20;
if(A%10==0&&B%10==0){
    console.log("true");
}else if(A%10!==0&&B%10!==0){
    console.log("false");

}else if(A%10==0||B%10==0){
    console.log("true one is divisible by 10");
}