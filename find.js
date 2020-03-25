const people = [
    { name: 'James', age: 18 },
    { name: 'Alice', age: 20 },
    { name: 'John', age: 17 },
    { name: 'Maria', age: 65 },
    { name: 'James', age: 65 },
];

// TODO use #find to find James, 65

const james = people.find(person => person.name == 'James' && person.age == 65);

console.log(james)
