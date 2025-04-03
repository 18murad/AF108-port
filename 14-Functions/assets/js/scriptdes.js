function decDesTap(cumle, simvol) {
    let say = 0;

    for (let i = 0; i < cumle.length; i++) {
        if (cumle[i] === simvol) {
            say++;
        }        
    }
    return say;
}
let cumle = "CodeAcademy ile heyatinizi gozellesdirin.";
let simvol = "e";
console.log(`"${simvol}" cumlede ${decDesTap(cumle, simvol)} dene var.`);
