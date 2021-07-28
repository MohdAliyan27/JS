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