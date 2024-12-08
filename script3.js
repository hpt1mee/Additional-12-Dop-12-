let arr = [-5, 10, 35, 12, 66, -20, 18, 0, 0, 0, 35, 100.5];
let arr2 = [];
for(;arr.length>0;){ 
    let max = Math.max.apply(null, arr); 
    arr2.push(max);
    arr.splice(arr.indexOf(max), 1);
}
console.log(arr2); 
console.log(arr2.reverse()); 
