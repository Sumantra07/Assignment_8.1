/*
 *
 * function to check if a particular number is prime or not 
 * parameter = number passed.
 * 
 * 
 * 
 */
function isPrime(num) {

    // if number is 1 or 0 then just return false. as it is not prime.
    if (num <= 1) {
        return false;
    }
    else {
        // loop from number starting from 2 to number -1, if division yields no remainder, return false immediately.
        for (var i = 2; i < num; i++) {
            if ((num % i) === 0)
                return false;

        }
        // if it comes to this point then it is a prime number.
        return true;


    }
}

console.log("Is it a prime number ? " + isPrime(1));