let people = [
    {
      name: "Luke",
      message: "Hi"
    },
    {
      name: "Dan",
      message: "I'm Dan!"
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

myGreeter(people, anotherCallbackFunction);