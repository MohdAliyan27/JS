//Comparing Objects

//WAY 1
function getCount(objects) {
    let n = 0;
    for(let o of objects) {
        n += (o.x == o.y);
    }
    return n;
}

//WAY 2
function getCount(objects) {
    var ctr = 0;
    for(var i=0; i<objects.length; i++){
      if(objects[i].x == objects[i].y) {
        ctr++;
      }
    }
    return ctr;
}

//WAY 3
function getCount(objects) {
    return objects.reduce((count,o) => count + (o.x == o.y), 0)
}

//WAY 4
function getCount(objects) {
    return objects.filter(function(o){return o.x==o.y}).length
}
