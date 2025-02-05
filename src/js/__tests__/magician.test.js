import Magician from '../magician.js';

test('Magician attack calculation', () => {
  const magician = new Magician(100);
  magician.distance = 2;
  expect(magician.attack).toBe(90);
  
  magician.stoned = true;
  expect(magician.attack).toBe(85);
});