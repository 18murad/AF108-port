function ceminiTapin(arr) {
    let cem = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 4 === 0 && arr [i] % 5 === 0) {
            cem += arr[i];
        }        
    }
    return cem;
}
let ededler = [14, 20, 35, 40, 57, 60, 100];