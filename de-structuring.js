// without de structuring the same thing can be called multiple times
//

const Person = {
    name :'Aliyan',
    age:28,
    greet(){
        console.log(`Hi ${this.name}`)
    }
}

//Before
// console.log(Person.name);
// console.log(Person.age);
const {name,age} = Person; //de structuring
console.log(name,age);

const arr =['qwerty','Aligarh','Agra']
const [abc,bc] = arr;
console.log(abc,bc);

let person = {
    firstName: 'John',
    lastName: 'Doe',
    middleName: 'C.'
    //currentAge: 28
};

let { firstName,  lastName, middleName = '', currentAge: age_ = 18 } = person;
// middleName = ''  //default value.
// currentAge: age = 18 //if no value is supplied then this works

console.log(middleName); // 'C.'
console.log(age_); // 28

//extra
let person2 = {
    firstName: 'John',
    lastName: 'Doe'
};

let {firstName :f,lastName :l} = person2;

console.log("my name is "+f +l)