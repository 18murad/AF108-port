function calculate(a, b, callback) {
    return callback(a, b);
}
let add = (a, b) => a + b;
let sub = (a, b) => a - b;
let mult = (a, b) => a * b;
let div = (a, b) => a / b;