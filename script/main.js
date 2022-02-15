import { countdownTimer } from './modules/timer.js';
import './modules/acc.js';
import './modules/burgerMenu.js';
import './modules/flay.js';
import './modules/fetch.js';

const start = () => {
	countdownTimer();
};

window.init = start();
