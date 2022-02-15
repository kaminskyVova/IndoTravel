import { countdownTimer } from './modules/timer.js';
import './modules/acc.js';
import './modules/burgerMenu.js';
import './modules/flay.js';
import './modules/createOptions.js'
import { formControl } from './modules/formControl.js';
import { renderOptions } from './modules/createOptions.js';
import { loadDb } from './modules/fetch.js';

const start = () => {
	countdownTimer();
	loadDb(renderOptions);
	loadDb(formControl)
};

window.init = start();
