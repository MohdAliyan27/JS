function EvenOdd(word){
    var x =[];
    var y=[];
    for (var i=0;i<word.length;i++){
        if(i%2==0){
            x[i]= word[i];
        }
    }
    for (var j=0;j<word.length;j++){
        if(j%2!=0){
            y[j]=word[j];
        }
    }
   x = x.filter(element => { return element !== undefined; });
   y = y.filter(element => { return element !== undefined; });
    console.log(x);
    console.log(y);
}
//output
EvenOdd([10,2,30,4,50,60,7]);
