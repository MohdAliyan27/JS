//https://www.programiz.com/javascript/examples/prime-number-intervals

function isPrime(higherNumber){
var count=0;
for (let i = 2; i <= higherNumber; i++) {
    let flag = 0;
    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        //console.log(i);   //Display the Prime Numbers
        count++;
    }
}
    console.log(count);   //Give the count Number only.
}
isPrime(10);  //Output 4 as 2,3,5,7
