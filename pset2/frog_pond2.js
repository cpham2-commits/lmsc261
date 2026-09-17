let frogActivities = ["babysit tadpoles", "catch flies", "tongue stretch", "swiming lessons"];
let babysitTadpoles = frogActivities[0];
let catchFlies = frogActivities[1];
let tongueStretch = frogActivities[2];
let swimingLessons = frogActivities[3]; 
let whatFrogDoing = prompt("What is the frog doing? choose from 0-3");
if (whatFrogDoing > 3) {print("Please choose a number between 0-3");}
print (frogActivities[whatFrogDoing]);