let arr = [203, 19, 2, 13, 196, 86, 35, 77];
let maxIndex = 0, minIndex = 0;

for (let i = 1; i < arr.length; i++) {
    if(arr[i] > arr[maxIndex]) {
        maxIndex = i;
    }
    if (arr[i] < arr[minIndex]) {
        minIndex = i;
    }
}
let temp = arr[maxIndex];
arr[maxIndex] = arr[minIndex];
arr[minIndex] = temp;

console.log(arr);
