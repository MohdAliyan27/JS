let person = {
    name : 'Mohd',
    age : 28,
    isMale : true
}

console.log(person.isMale); //dot notation
console.log(person['name']); //bracket notation

person['gender'] ='Male';  //assigning a new type 

console.log(person);

console.log("Dot Notation is a cleaner method whwn compared to the bracket notation.");