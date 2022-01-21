function getSecondLargest(nums) {
    let max1 = 0;
    for (const e of nums) {
        if (max1 < e) {
            max1 = e;
        }
    }
    
    let max2 = 0;
    for (const e of nums) {
        if (max2 < e && e < max1) {
            max2 = e;
        }
    }
    console.log(max2)
    return max2;
}

let arr=[1,5,7,2,5,6,6,6,5];
getSecondLargest(arr)
