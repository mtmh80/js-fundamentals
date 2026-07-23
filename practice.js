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

// --- lesson 3 Control Flow ---

function checkAccess(userRole) {
    if (userRole === "admin") {
        return "Full access";
    } else if (userRole === "operator") {
        return "Read and restart";
    } else if (userRole === "auditor") {
        return "Read only";
    } else {
        return "Denied";
    }
}

console.log(checkAccess("admin"));
console.log(checkAccess("operator"));
console.log(checkAccess("auditor"));
console.log(checkAccess("intern"));

// --- for loop ---

const servers = ["web01", "web02", "db01", "dc01"];

for (let i = 0; i < servers.length; i++) {
  console.log("Checking " + servers[i]);
}

// --- while loop ---

let retries = 0;

while (retries < 3) {
  console.log("Retry attempt " + retries);
  retries = retries + 1;
}