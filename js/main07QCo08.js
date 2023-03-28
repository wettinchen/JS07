// Conditionals: If Statements

let customerIsBanned = false;
let soup = "chicken noodle soup";
let crackers = true;
let reply;

if (customerIsBanned) {
    reply = "No soup for you!";
} else if (soup && crackers) {
    reply = `Here is your order of ${soup} and crackers.`;
} else if (soup) {
    reply = `Here is your order of ${soup}.`;
} else {
    reply = "Sorry, we are out of soup.";
}

console.log(reply);