let check_numbers = [111, 139, 293, 327];

for(let number of check_numbers) {
    let is_prime = true;
    for (let factor = 2; factor < number; factor++) {
        if(factor > 2 && factor % 2 == 0) {
            continue;
        }
        if(number % factor == 0) {
            is_prime = false;
            break;
        }
    }
    if(is_prime) {
        console.log(number + " is a prime number.");
    } else {
        console.log(number + " is not a prime number.");
    }
}