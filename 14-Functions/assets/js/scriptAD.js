function aboundantVeYaDeficient(eded) {
    let cem = 0;
    for (let i = 0; i < eded; i++) {
        if (eded % i === 0) {
            cem += i
        }        
    }
    if (cem > eded) {
        return `${eded} Aboundantdir.`;
    } else{
        return `${eded} Deficientdir.`;
    }
}