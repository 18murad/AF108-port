let sezon = prompt("Hansi sezonu secirsiniz?\n1 - Yaz\n2 - Yay\n3 - Payiz\n4 - Qis\nSezonu dxil edin (1-4):");

switch(sezon) {
    case "1":
        console.log("Yaz sezonu: Mart, Aprel, May");
        break;
    case "2":
        console.log("Yay sezonu; Iyun, Iyul, Avqust");
        break;
    case "3":
            console.log("Payiz sezonu: Sentyabr, Oktyabr, Noyabr");
            break;
    case "4":
        console.log("Qış sezonu: Dekabr, Yanvar, Fevral");
        break;
    default:
        console.log("Yanlış sezon nömrəsi daxil etdiniz!");                 
}