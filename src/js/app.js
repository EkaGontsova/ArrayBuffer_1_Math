import Magician from './magician.js';
import Daemon from './daemon.js';

const magician = new Magician(100);
magician.distance = 2;
console.log(magician.attack); 

magician.stoned = true;
console.log(magician.attack); 

const daemon = new Daemon(100);
daemon.distance = 3;
console.log(daemon.attack); 

daemon.stoned = true;
console.log(daemon.attack); 