let arr = [203, 19, 2, 13, 196, 86, 35, 77, 7, 5];

let oneDigitCount = 0;
let twoDigitCount = 0;
let threeDigitCount = 0;

for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num >= 0 && num < 10) {
        oneDigitCount++;
    } else if (num >=10 && num < 100) {
        twoDigitCount++;
    } else if (num >= 100 && num < 1000) {
        threeDigitCount++;
    }
}

console.log("Bir rəqəmli ədədlərin sayı:", oneDigitCount);
console.log("İki rəqəmli ədədlərin sayı:", twoDigitCount);
console.log("Üç rəqəmli ədədlərin sayı:", threeDigitCount);