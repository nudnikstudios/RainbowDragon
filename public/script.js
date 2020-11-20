
function setup() {
    let canvas = createCanvas(w, h);
    canvas.parent('sketch-holder');
    let adventurer = new Adventurer();
}

function draw() {
    background(255,255,255,255);
}

class Adventurer {
    constructor() {
        let hp = diceRoll(playerLvl);
        let int = diceRoll(playerLvl);
        let str = diceRoll(playerLvl);
        let dex = diceRoll(playerLvl);
        let man = diceRoll(playerLvl);
        let cha = diceRoll(playerLvl);
        let pChem = diceRoll(playerLvl) + cha;
        let adventurerLvl = 0;
        let stats = [hp,int,str,dex,man,cha,pChem];
        for(i=0;i<stats.length;i++) {
            adventurerLvl += stats[i];
        }
    console.log(stats);
    console.log(adventurerLvl);
    }
}