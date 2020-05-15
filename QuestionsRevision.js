// 1 Create a function that takes 3 parameters called floor, ceiling and num. All 3 parameters should be numbers. Return true if num is between floor and ceiling. Otherwise return false
function checkBetween(floor, ceiling, num) {
    if (num > floor && num < ceiling) {
        return true;
    } else {
        return false;
    }
}

let myAns = checkBetween(12, 24, 40);
// console.log(myAns);


// 2 Create a function that takes 1 parameter that is an object with 2 properties, name and age. Return true if the person's age is greater than 30 or their name contains the letter x (case insensitive). Otherwise return false.
function checkNameAndAge(person) {
    let ageMatch = person.age > 30;
    let hasX = false;
    for (let i = 0; i < person.name.length; i++) {
        let letter = person.name[i];
        if (letter.toLowerCase() == "x") {
            hasX = true;
            break;
        }
    }
    if (ageMatch || hasX) {
        return true;
    } else {
        return false;
    }
}

// console.log(checkNameAndAge({ name: "Anna", age: 31 }));

// 3 Create a function that takes 3 parameters. The first should be an object with two properties name and age. The second should be a number, the third should be a string. The function should return true if the age of the object is equal to the second parameter and the name is not equal to the third parameter. Otherwise return false.
function checkAgeNotName(person, age, nameNotToMatch) {
    let ageMatch = person.age == age;
    let namesMatch = person.name == nameNotToMatch;
    if (ageMatch && !namesMatch) {
        return true;
    } else {
        return false;
    }
}

let personLuke = {
    name: "Luke",
    age: 23
};
let ans = checkAgeNotName(personLuke, 24, "Luke")
// console.log(ans);

let pets = [
    {
        name: "Rex",
        age: 4,
        ownerName: "Luke"
    }, {
        name: "Spot",
        age: 7,
        ownerName: "Jade"
    }, {
        name: "Scooby",
        age: 3,
        ownerName: "Shaggy"
    }, {
        name: "Lucky",
        age: 1,
        ownerName: "Luke"
    }, {
        name: "Sadie",
        age: 3,
        ownerName: "Daniel"
    }, {
        name: "Duke",
        age: 5,
        ownerName: "Sabine"
    }
];
// 1 Use the Array.filter function to create an array of all the pets owned by Luke.

function petBelongsToLuke(pet) {
    return pet.ownerName == "Luke";
}

let lukesPets = pets.filter(petBelongsToLuke);
// console.log(lukesPets);

// 2 Use the Array.map function to create an array of all the names of the owners
function getOwnerName(pet) {
    return pet.ownerName;
}
let ownerNames = pets.map(getOwnerName);

let uniqueNames = [];
for (let i = 0; i < ownerNames.length; i++) {
    let found = false;
    for (let j = 0; j < uniqueNames.length; j++) {
        if (uniqueNames[j] == ownerNames[i]) {
            found = true;
            break;
        }
    }
    if (!found) {
        uniqueNames.push(ownerNames[i]);
    }
}

// console.log(uniqueNames);

// 3 Use the Array.find function to retrieve the pet owned by Shaggy
function isShagysPet(pet) {
    return pet.ownerName == "Shaggy";
}
let shaggysPet = pets.find(isShagysPet);
// console.log(shaggysPet.name);

// 4 Use the Array.filter function to create an array of all the pets that are less than 5 years old and that have either a pet or owner name that starts with "S"
function getMatchingPets(pet) {
    let lessThan5 = pet.age < 5;
    let petStartsWithS = pet.name[0].toLowerCase() == "s";
    let ownerStartsWithS = pet.ownerName[0].toLowerCase() == "s";
    let startsWithS = petStartsWithS || ownerStartsWithS;
    return lessThan5 && startsWithS;
}

let myPetMatches = pets.filter(getMatchingPets);

console.log(myPetMatches);
