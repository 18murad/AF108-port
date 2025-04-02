let num = prompt("Bir ədəd daxil edin:");
let modNum = prompt("Hansı ədədə görə mod tapmaq istəyirsiniz?");

if ((num) && modNum && modNum !== 0) {
    let result = num % modNum;
    console.log(`${result}`);
} else {
    console.log("Zəhmət olmasa düzgün ədədlər daxil edin. (Mod sıfıra bölünə bilməz!)");
    
}