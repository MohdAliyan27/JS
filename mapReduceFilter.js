const number = [1,2,3,4,5];
const arrOfArray = [[0,1], [1,2], [3,4]];
const name = ['Aliyan', 'Mohammad', 'Practise', 'youTube','Googling'];

//MAP method
const arrayNew = number.map((newItem) =>{
    return newItem +2;
})

const array1 = name.map((newItem) =>{
    return "Hi " + newItem;
})
console.log("-----------------Map------------------");
console.log(arrayNew);
console.log(array1);

//Filter method
const arrayFilter = number.filter((newItem) =>{
    return newItem > 2;
})

const arrayFilter1 = name.filter((newItem) =>{
    return newItem.length > 7;
})

console.log("--------------Filter------------------");
console.log(arrayFilter);
console.log(arrayFilter1);

const arrayReduce1 = number.reduce((prevValue,curVal) =>{
    return prevValue += curVal;
})

const arrayReduce2 = name.reduce((prevValue,curVal) =>{
    return prevValue += "_" + curVal;
})

const arrayReduce3 = arrOfArray.reduce((prevValue,curVal) =>{
    return prevValue.concat(curVal);
})

console.log("--------------Reduce------------------");
console.log(arrayReduce1);
console.log(arrayReduce2);
console.log(arrayReduce3);