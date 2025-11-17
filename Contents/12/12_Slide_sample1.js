let num1 = 10;
let num2 = 20;

console.log(num1>=num2);
console.log(num1==num2);
console.log(num1<=num2);

let number = 2;
let str = "2";

console.log(number == str);
console.log(number === str);
console.log(number != str);
console.log(number !== str);

let my_number = -2;
if (!(my_number > 0 || my_number % 2 == 0 )) {
    console.log(my_number + " is greater than 0 but is not an even number.");
}
else {
    console.log(my_number + " is an even number greater than 0.");
}
