// Conditionals: If Statements

// Decision tree!
let playerOne;
let computer;

if (playerOne === computer) {
    console.log("tie game");

} else if (playerOne === "scissors") {

    if (computer === "rock") {
        console.log("computer win!");
    } else {
        console.log("playerOne win!");
    };

} else if (playerOne === "rock") {

    if (computer === "paper") {
        console.log("computer win!");
    } else {
        console.log("playerOne win!");
    }

} else {
    
    if (computer === "scissors") {
        console.log("computer win!");
    } else {
        console.log("playerOne win!");
    }
}