const dailyActivities = [
    "Clean solar panel",
    "Video chat with Houston",
    "Hydrate space food",
    "Take earth picture",
    "Learn Russian"
];
let randomActivity = dailyActivities[Math.floor(Math.random() * dailyActivities.length)];
print("today's activity is: " + randomActivity + ".");