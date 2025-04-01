
function yanacaqAl() {
    const qiymetler = {
        dizel: 0.9,
        benzin: 1.0,
        premium: 1.5
    };

    let yanacaqSecimi = prompt(
        "Yanacaq novunu secin:\n1 - Dizel (0.9 AZN/litr)\n2 - Benzin (1.0 AZN/litr)\n3 - Premium (1.5 AZN/litr)"
    );

    let yanacaqNovu;
    if (yanacaqSecimi === "1") {
        yanacaqNovu = "dizel";
    } 
    else if (yanacaqSecimi ==="2") {
        yanacaqNovu = "benzin"
    }
    else if (yanacaqNovu === "3") {
        yanacaqNovu = "premium"
    }
    else {
        alert("Lütfən, düzgün Yanacaq Tipi daxil edin.")
    }

    let miqdar = prompt("Almaq istədiyiniz yanacaq miqdarını daxil edin (litr):")
    let balans = prompt("Mövcud pulunuzu daxil edin (AZN):")


    if (isNaN(miqdar) || isNaN(balans) || miqdar <= 0 || balans <=0) {
        alert("Zəhmət olmasa, düzgün miqdar və ya balans daxil edin.")
    }

    let umumiDeyer = miqdar * qiymetler[yanacaqNovu];

    if (balans >= umumiDeyer) {
        let qalanBalans = balans - umumiDeyer;
        alert(
            "Yanacaq nove: ${yanacaqNovu}\nAlinan miqdar: ${miqdar} litr\nUmumi mebleg: ${umumiDeyer.toFixed(2)} AZN\nQalan balansiniz: ${qalanBalans.toFixed(2)}"
        );
    } else {
        let catismayanMebleg = umumiDeyer - balans;
        alert(
            `Uzr isteyirik, balansiniz kitayet deyil!\nYanacaq novu: ${yanacaqNovu}\nAlinan miqdar; ${miqdar} litr\nUmumi mebleg: ${umumiDeyer.toFixed(2)} AZN\nMovcud balansiniz; ${balans.toFixed(2)} AZN\nCatismayan mebleg; ${catismayanMebleg.toFixed(2)} AZN`
        );
    }
}

yanacaqAl();
