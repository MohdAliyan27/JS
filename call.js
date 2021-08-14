let name={
    fname:'Mohd',
    lname:'Aliyan'
}
//the below function is borrowed.
let printName = function(organisation, years){
    console.log("Full Name is "+" "+this.fname+" "+this.lname+" working with "+organisation+" for "+years+"yrs");
}

printName.call(name,"TCS",5)

let name2 ={
    fname:'Mohd',
    lname:'Rehan'
}

printName.call(name2,"Wipro",5)