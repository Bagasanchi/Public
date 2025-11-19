let number = 5;
let sum = 0;
for(let x = 1; x <= number; x++) {
    sum += x;
};
number (10);
let number2 = 10;
let sum2 = 0;
function funcSum(num){
    sum += num;
    if(num == number2){
        return;
    }
    fumcsum(num + 1);
}
funcSum(1);
console.log(sum2);
