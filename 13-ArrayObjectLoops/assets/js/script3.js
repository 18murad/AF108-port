let users = [
    { name: "Murad", age: 20},
    { name: "Babək", age: 25},
    { name: "Ramil", age: 30},
    { name: "Yusif", age: 35},
    { name: "Rövşən", age: 40},
];
let youngerThan30 = users.filter(user => user.age < 30);
let olderThan30 = users.filter(user=> user.age > 30);

console.log("30 yaşdan kiçik olanlar:", youngerThan30);
console.log("30 yaşdan böyük olanlar:", olderThan30);

