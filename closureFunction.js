// closure means inner function always have access to the outer functions variable and parameters.
var z=3;// inner can access the global variable
function outer(){
    var outer_variable=27; // inner can access outer variable
    function inner(){
        var inner=2; // inner can access its own variable
        console.log((inner * outer_variable)/z)
    }
    inner()
}

outer()

