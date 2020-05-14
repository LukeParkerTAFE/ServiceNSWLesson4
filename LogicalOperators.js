// Not Operator !
let name = "Luke";
if (!(9 > 10)) {
    console.log("I'm inside the if statement")
} else {
    console.log("I'm inside the else statement")
}

let myEmptyValue;

if (!myEmptyValue) {
    myEmptyValue = "Default value";
}

// OR Operator - ||
let a = true || true; // true
let b = false || true; // true
let c = true || false; // true
let d = false || false; // false
console.log(a);
console.log(b);
console.log(c);
console.log(d);

let person = {
    name: "Luke",
    age: 23
}

if (person.name[0] == "D" || person.age > 20) {

}


// AND Operator &&

let a = true && true; // true
let b = false && true; // false
let c = true && false; // false
let d = false && false; // false

if(person.name[0] == "L" && person.age < 18){
    
}