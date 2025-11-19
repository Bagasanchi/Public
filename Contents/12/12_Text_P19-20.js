function test_prime() {
    let is_prime = true;
    let factor = 2;

    while(factor < arguments[0]){
        if(arguments[0] % factor == 0){
            is_prime = false;
            break;
        }
        factor++;
    }
    return is_prime;
}
let check_number = 231;
if(test_prime(check_number)){
    console.log(check_number + " is a prime number");
} else {
    console.log(check_number + " is not a prime number");
}

function color(color){
    if(color == "red"){
        return "red";
    } else if(color == "blue"){
        return "blue";
    }
}

console.log(color("red"));
console.log(color("blue"));
console.log(color("green"));