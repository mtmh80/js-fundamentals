// --- lesson 1 Variables & data types --- 
const myName = "TMH";
let age = 45;
const isSysadmin = true;
let yearsInIT = 26;
const favoriteOS = "Windows";

console.log(myName);
console.log(age);
console.log(isSysadmin);
console.log(yearsInIT);
console.log(favoriteOS);

// --- lesson 2 Functions --- 
function greet(person) {
    return "Hello " + person;
}

function add(a, b) {
    return a + b;
}

function isAdult(years) {
    return years >= 18;
}

console.log(greet("TMH"));
console.log(add(4, 7));
console.log(isAdult(20));
console.log(isAdult(15));