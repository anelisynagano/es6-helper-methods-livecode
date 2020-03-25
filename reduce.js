const people = [
    { name: 'James', age: 18 },
    { name: 'Alice', age: 20 },
    { name: 'John', age: 17 },
    { name: 'Maria' },
    { name: 'James', age: 65 },
];


// TODO use reduce to count how many people are called James
// i.e: return a number

const countJames = people.reduce((count, person) => {
    if (person.name === "James") {
        count = count + 1;
    }
    return count;
}, 0);

console.log(countJames);