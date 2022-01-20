function split(string1){
  let count=0;
  let str2 =[...string1];
  for(var i=0;i<str2.length;i++){
  //console.log(str2.length);
  if(str2[i]=="a"){
      count=0;
    	count++;
  }
  if(str2[i]!="a"){
  count++;
  }
  }
  console.log(count);
}

split("abcabcabcdef");


//Second way is this.

//console.log("abcabcabcdef");

function split(string1){
  let count=0,counter=0;
  let str2 =[...string1];
  for(var i=0;i<str2.length;i++){
  //console.log(str2.length);
  counter = count;
  if(str2[i]=="a"){
      count=0;
    	count++;
  }
  if(str2[i]!="a"){
  count++;
  }
  
  if(counter>count){
  console.log(counter);
  }
  }
  console.log(str2);
  //console.log(counter);
}
split("abcabcabcdef");
split("abcdefgabcabcdef");
