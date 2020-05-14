let people = [
    {
        name: "Luke",
        message: "Hi",
        heightInches: 73
    },
    {
        name: "Dan",
        message: "I'm Dan!",
        heightInches: 69
    },
    {
        name: "Stephanie",
        message: "Hi",
        heightInches: 62
    },
    {
        name: "Gerry",
        message: "Hey",
        heightInches: 64
    },
    {
        name: "David",
        message: "Hello",
        heightInches: 60
    }
];

function myGreeter(people, callback) {
    for (let i = 0; i < people.length; i++) {
        let person = people[i];
        let greeting = callback(person.message);
        console.log(`${greeting} ${person.name}`);
    }
}

function myCallbackFunction(message) {
    if (message == "Hi" || message == "Hello") {
        return "Hi";
    } else {
        return "Hello There";
    }
}

function anotherCallbackFunction(message) {
    if (message == "I'm Dan!") {
        return "NO WAY, THAT'S SO COOL";
    } else {
        return "Hello";
    }
}

myGreeter(people, myCallbackFunction);

// Array.filter
function myFilterFunction(person) {
    if (person.name == "Luke") {
        return true; // will be included in filtered array
    } else {
        return false; // will be excluded from filtered array
    }
}

let filteredArray = people.filter(function (person) {
    if (person.name == "Luke") {
        return true; // will be included in filtered array
    } else {
        return false; // will be excluded from filtered array
    }
});

// console.log("people");
// console.log(people);
// console.log("filteredArray");
// console.log(filteredArray);


function getNames(person){
    return person.name;
}

function convertHeightToCm(person){
    return {
        name: person.name,
        message: person.message,
        heightInCm: person.heightInches * 2.54
    };
}

let peopleCm = people.map(convertHeightToCm); // outputs ['Luke','Dan']

console.log(people);
console.log(peopleCm);


let newArr = [];
for (let i = 0; i < people.length; i++) {
    let person = people[i];
    newArr.push(person.name);
}

// Array.find

function findUnder65(person) {
    return person.heightInches < 65;
}

let person = people.find(findUnder65);
console.log(person);
