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
