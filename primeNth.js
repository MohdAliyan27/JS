var MAX_SIZE = 1000005;
function SieveOfEratosthenes(primes)
{
    var IsPrime = Array(MAX_SIZE).fill(true);
    var p,i;

    for (p = 2; p * p < MAX_SIZE;p++)
    {
        if (IsPrime[p] == true)
        {
            for(i = p * p; i < MAX_SIZE; i += p)
                IsPrime[i] = false;
        }
    }
 
    for (p = 2; p < MAX_SIZE; p++)
        if (IsPrime[p])
            primes.push(p);
}

    var primes = [];
    SieveOfEratosthenes(primes);
 
    console.log("5th prime number is "+primes[4]);
    console.log("16th prime number is "+primes[15]);
    console.log("1049th prime number is "+primes[1048]);