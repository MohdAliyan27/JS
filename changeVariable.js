// Input: this_is_a_variable 
// Output: thisIsAVariable

function transform(str){
    str=str.trim().split('');
    let res='';

    str.forEach((element,index) => {
        if(str[index]==='_'){
            res = res+str[index+1].toUpperCase();
            str.splice(index,1)
        }
        else if(str[index]===str[index].toUpperCase()){
            res =res + '_'+str[index].toLowerCase()
        }
        else{
            res = res + str[index]
        }
    });
    console.log(res)
}

transform('this_is_a_variable')
transform('thisIsAVariable')
