let arr = [203, 19, 2, 13, 196, 86, 35, 77];

let num = parseInt(prompt("Axtarmaq istədiyiniz ədədi daxil edin:"));

if (arr.includes(num)) {
    console.log(num + " array-də mövcuddur.");
} else {
    console.log(num + " array-də mövcud deyil.");
}