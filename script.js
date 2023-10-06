let state = {
    hero: {
        name: 'Lucas',
        power: 0,
        xp: 0,
        multiply: 0
    },
    enemy: {
        power: 0,
    },
    result: {
        status: '',
    }
}

function resultFight() {
    if (state.hero.power > state.enemy.power) {
        state.hero.multiply = 3;
    } else if (state.hero.power < state.enemy.power) {
        state.hero.multiply = 1;
    } else {
        state.hero.multiply = 2;
    }
    state.hero.xp = state.hero.power * state.hero.multiply;
}

function fight() {
    resultFight()

    if (state.hero.xp) {
        if (state.hero.xp <= 1000){
            state.result.status = 'Ferro';
        } else if (state.hero.xp >= 1001 && state.hero.xp <= 2000){
            state.result.status = 'Bronze';
        } else if (state.hero.xp >= 2001 && state.hero.xp <= 5000){
            state.result.status = 'Prata';
        } else if (state.hero.xp >= 5001 && state.hero.xp <= 7000){
            state.result.status = 'Ouro';
        } else if (state.hero.xp >= 7001 && state.hero.xp <= 8000){
            state.result.status = 'Platina';
        } else if (state.hero.xp >= 8001 && state.hero.xp <= 9000){
            state.result.status = 'Ascendente';
        } else if (state.hero.xp >= 9001 && state.hero.xp < 10000){
            state.result.status = 'Imortal';     
        } else if (state.hero.xp >= 10001){
            state.result.status = 'Radiante';
        }
           
            
    }
}

function numberRandom() {
    number = Math.floor(Math.random() * (10000 - 100 + 1)) + 1;
    return number;
}

function main() {
    state.hero.power = numberRandom();
    state.enemy.power = numberRandom();
    
    fight();
    console.log(`O Herói de nome ${state.hero.name} está no nível de ${state.result.status}`)
}

main();