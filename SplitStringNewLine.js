var string="abcslksaalal";
console.log(string); 
var matchesCount = string.split("").length - 1;
for(var i=0;i<matchesCount;i++)
{ 
    console.log(string.split("")[i]); 
}
