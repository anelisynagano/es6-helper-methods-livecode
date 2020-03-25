const people = [
    { name: 'James', age: 18 },
    { name: 'Alice', age: 20 },
    { name: 'John', age: 17 }
];

const older = people.filter(person => person.age >= 18)
console.log(older)
// TODO use #filter to create an array with people that are 18 or older (>=)
// [
//     { name: 'James', age: 18 },
//     { name: 'Alice', age: 20 }
// ]