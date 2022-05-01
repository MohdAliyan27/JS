function EvenOdd(word){
    var x ="",y="";
    for (var i=0;i<word.length;i++){
        if(i%2==0){
            x=x+word[i];
        }
    }
    for (var j=0;j<word.length;j++){
        if(j%2!=0){
            y=y+word[j];
        }
    }
    console.log("Odd Index :"+x);
    console.log("Even Index: "+y);
}


//output
function processData(input) {
    //Enter your code here
    var pieces = input.split('\n');
    for (var i = 0; i < parseInt(pieces[0]); i++) {
        EvenOdd(pieces[i+1]);
    }
} 


process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
