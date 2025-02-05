import Character from '../character.js';

describe('Character', () => {
    let character;

    beforeEach(() => {
        character = new Character(100);
    });

    test('should calculate attack correctly without stoned effect', () => {
        character.distance = 2;
        expect(character.attack).toBe(90);
    });

    test('should calculate attack correctly with stoned effect', () => {
        character.distance = 2;
        character.stoned = true;
        expect(character.attack).toBe(85); 
    });

    test('attack should not be negative', () => {
        character.baseAttack = 1;
        character.distance = 10;
        expect(character.attack).toBe(0);
    });

    test('should set and get base attack correctly', () => {
        character.attack = 120;
        expect(character.baseAttack).toBe(120);
    });

    test('should set and get stoned status correctly', () => {
        character.stoned = true;
        expect(character.stoned).toBe(true);
        character.stoned = false;
        expect(character.stoned).toBe(false);
    });

    test('should handle distance of 1 correctly', () => {
        character.distance = 1;
        expect(character.attack).toBe(100);
    });

    test('should handle zero base attack correctly', () => {
        character.baseAttack = 0;
        character.distance = 2;
        expect(character.attack).toBe(0);
    });
});