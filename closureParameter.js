function A(x,y){
    function B(){
        console.log(x);
        console.log(y)
    }
    B()
}
A(5,4)

// function outer(x,y){
//     function inner(){
//         console.log(x*y);
//         }
//     inner();
// }
// outer(5,4)