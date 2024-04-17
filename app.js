var person = {
    name: "Alice",
    age: 30,
    city: "Wonderland"
};
var jsonString = JSON.stringify(person, null, 2);
console.log(jsonString);
