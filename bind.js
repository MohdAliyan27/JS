let name={
    fname:'Mohd',
    lname:'Aliyan'
}
//the below function is borrowed.
let printName = function(organisation, years){
    console.log("Full Name is "+" "+this.fname+" "+this.lname+" working with "+organisation+" for "+years+"yrs");
}

//printName.call(name,"TCS",5)

let name2 ={
    fname:'Mohd',
    lname:'Rehan'
}
// We are passing the values as parameters
//printName.call(name2,"Wipro",5)

// We are passing the values as an ARRAY List
//printName.apply(name2,["Wipro",6])



// Bind doesnot call the method but it makes the copy of the method/function.
// Keep the copy and use later.

let printFullName = printName.bind(name2,"Infosys",5)
console.log(printFullName)  //function will be printed here.
printFullName(); // this will print the result.
