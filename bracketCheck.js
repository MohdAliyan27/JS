function bracketCheck(expr){

    let stack=[];
    for (let i=0; i< expr.length ; i++){
        let x= expr[i];
        if(x=='('|| x=='{' || x=='[')
        {
            stack.push(x);
            continue;
        }
        if(stack.length ==0)
        return false;

        let check;
        switch (x){
            case ')':
                check
        }

    }
}

let expr='[{()}}]'
if(bracketCheck(expr))
    console.log("Balanced");
else
    console.log("Not Balanced");