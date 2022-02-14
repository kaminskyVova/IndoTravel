import {countdownTimer} from './modules/timer.js';
import './modules/acc.js'
import './modules/burgerMenu.js'

const start = () => {

	countdownTimer()
};

window.init = start();
