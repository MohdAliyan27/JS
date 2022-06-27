//let var const

var x=1,y=2;
let z=5;
const a='hi'
console.log("Before Block Execution x is "+x+"\n y is "+y+"\n z is "+z+ "\n and a is constant with value "+a);
if(x==1){
    y=20
    z=30
    x='Hello'
    console.log("Inside Block x is "+x+"\n y is "+y+" \nz is "+z + " \nand a is constant with value "+a);
}
console.log("After Block x is "+x+"\n y is "+y+" \nz is "+z + " \nand a is constant with value "+a);
