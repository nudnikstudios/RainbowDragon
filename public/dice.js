function diceRoll(diceCount) {
    for (i = 0; i < diceCount; i++) {
        rolls[i] = floor(random(1,7));
        roll += rolls[i];    
    }
}