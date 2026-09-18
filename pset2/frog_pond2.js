const activities = ["babysit tadpoles", 
    "flies for lunch", 
    "tongue stretch", 
    "swimming lessons",];

let index = prompt("what is the frog doing? choose from 0-3");
index = index % 4;
print(activities[index]);