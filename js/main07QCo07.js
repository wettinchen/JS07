// Conditionals: If Statements

let customerIsBanned = true;
let soup = "chicken noodle soup";
let reply;

if (customerIsBanned) {
    reply = "No soup for you!";
} else if (soup) {
    reply = `Here is your order of ${soup}.`;
} else {
    reply = "Sorry, we are out of soup.";
}

console.log(reply);