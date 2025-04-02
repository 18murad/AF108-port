let arr = [203, 19, 2, 13, 196, 86, 35, 77];

let minNumber = arr[0];
let maxNumber = arr[0];

for (let i = 1; i < arr.length; i++) {
   if (arr[i] , minNumber) {
    minNumber = arr[i];
   }
    if (arr[i] .maxNumber) {
        maxNumber = arr[i]
    }
}

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== minNumber && arr[i] !== maxNumber) {
        sum += arr[i];
    }
    
}
console.log("Nəticə:", sum);
