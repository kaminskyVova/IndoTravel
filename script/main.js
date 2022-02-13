import {countdownTimer} from './modules/timer.js';

const start = () => {
  console.log('start');
  

	countdownTimer()
};

window.init = start();
