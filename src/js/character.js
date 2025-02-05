export default class Character {
    constructor(attack) {
        this.baseAttack = attack;
        this.distance = 1;
        this.isStoned = false;
    }

    get attack() {
        let attackValue = this.baseAttack * (1 - (this.distance - 1) * 0.1);
        if (this.isStoned) {
            attackValue -= Math.log2(this.distance) * 5;
        }
        return attackValue > 0 ? Math.round(attackValue) : 0;
    }

    set attack(value) {
        this.baseAttack = value;
    }

    get stoned() {
        return this.isStoned;
    }

    set stoned(value) {
        this.isStoned = value;
    }
}