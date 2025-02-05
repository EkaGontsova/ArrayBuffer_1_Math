import Daemon from '../daemon.js';

test('Daemon attack calculation', () => {
  const daemon = new Daemon(100);
  daemon.distance = 3;
  expect(daemon.attack).toBe(80);
  
  daemon.stoned = true;
  expect(daemon.attack).toBe(72);
});