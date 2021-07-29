// first callback

function first(callback) {
  console.log('First Code Execute.');
  callback();
}

function second() {
    console.log('Second code Execute.');
}

first(second);
// first and then second.
