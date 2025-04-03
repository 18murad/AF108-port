function  kvadrataYukselt(arr) {
    let yeniArray = 0;
    for (let i = 0; i < arr.length; i++) {
        yeniArray = arr[i] ** 2;        
    }
    return yeniArray;
}