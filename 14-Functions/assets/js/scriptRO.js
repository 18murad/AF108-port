function tekCut(...numbers) {
    let cutEded = [];
    let tekEded = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            return "Cut ededdir.";
        } else { 
            return "Tek ededdir.";
        }
    }
}