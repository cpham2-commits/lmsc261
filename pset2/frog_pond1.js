let numFrogs = prompt("How many frogs are in the pond?");
let maxFrogs = 15;
let isPondOvercrowded = numFrogs >= maxFrogs; // boolean
let messageToPrint = isPondOvercrowded ? "Too crowded!" : "Hop in!";
print(messageToPrint); 