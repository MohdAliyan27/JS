// closure means inner function always have access to the outer functions variable and parameters.
function outer(){
    var outer_variable=27;
    function inner(){
        console.log(outer_variable)
    }
    inner()
}

outer()
