function checkLifeSpan(hoursUsed){
    const maxLifeSpan = 1000;
    if (hoursUsed < 800){
        return "Suit in working condition."
    } else if (hoursUsed >= 800 && hoursUsed < maxLifeSpan){
        return "Suit needs replacement soon."
    } else if (hoursUsed >= maxLifeSpan){
        return "Suit is no longer safe to use."
    } if (typeof hoursUsed !== "number"){
        return "Invalid input."
    }
};
let isSafeOrNot = checkLifeSpan(1000);
print(isSafeOrNot);