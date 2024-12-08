let arr2 = [-5, 10, 35, 12, 66, -20, 18, 0, 0, 0, 35, 100.5];
let arr = [-5, 10, 35, 12, 66, -20, 18, 0, 0, 0, 35, 100.5];
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
        let t = arr[i]
arr[i] = arr[j]
arr[j] = t
    }
}
}


console.log(arr2);
console.log("<", arr);

