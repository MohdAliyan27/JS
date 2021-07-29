// A generator can pause midway and then continues from where it paused. 

function* generate() {
    console.log('invoked 1st time');
    yield 1; // yield statement returns a value and pauses the execution of the function.
    console.log('invoked 2nd time');
    yield 2;
    console.log('invoked 3rd time');
    yield 3;
}

let gen = generate();

// result = gen.next();
// console.log(result);  // will return a generator object.
// console.log(result.value);
// console.log(result.done);

// result = gen.next();
// console.log(result);
// console.log(result.value);
// console.log(result.done);

// result = gen.next();
// console.log(result);
// console.log(result.value);
// console.log(result.done);

// result = gen.next();
// console.log(result);
// console.log(result.value);
// console.log(result.done);

for (const g of gen) {
    console.log(g);
}


/*

Generators are created by the generator function function* f(){}.
Generators do not execute its body immediately when they are invoked.
Generators can pause midway and resumes their executions where they were paused. The yield statement pauses the execution of a generator and returns a value.
Generators are iterable so you can use them with the for...of loop.

*/