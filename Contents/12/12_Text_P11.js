// Code to check whether a number is prime

let check_number = 231;
let is_prime = true;
let factor = 2;

while (factor < check_number){
    if (check_number % factor == 0){
        is_prime = false;
        break;
    }
    factor++;
}

if(is_prime){
    console.log(check_number + " is a prime number.");
}
else{
    console.log(check_number + " is not a prime number.");
}