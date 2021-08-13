function countDer(n)
    {
        // Base cases
        if (n == 1) return 0;
        if (n == 2) return 1;
          
        // countDer(n) = (n-1)[countDer(n-1) + der(n-2)]
        return (n - 1) * (countDer(n - 1) + countDer(n - 2));
    }
     
    let n = 4;
    console.log("Count of Derangements is " + countDer(n));