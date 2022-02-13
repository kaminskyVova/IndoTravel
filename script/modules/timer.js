const days = document.querySelector('.timer__count_days');
const hours = document.querySelector('.timer__count_hours');
const minutes = document.querySelector('.timer__count_minutes');

const daysTitle = document.querySelector('.timer__units_days');
const hoursTitle = document.querySelector('.timer__units_hours');
const minutesTitle = document.querySelector('.timer__units_minutes');

const heroText = document.querySelector('.hero__text')
const timerWrapper = document.querySelector('.timer')


let timerId = null;

export const declensionNum = (num, words) => {
  return words[
    num % 100 > 4 && num % 100 < 20
      ? 2
      : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
  ];
}

export const countdownTimer = () => {
  const timerArticle = document.querySelector('.timer');
  timerArticle.dataset.timerDeadline = '2022, 02, 27';
  let deadline = timerArticle.dataset.timerDeadline;

  deadline = new Date(deadline);

  const diff = deadline - new Date();
  if (diff <= 0) {
    clearInterval(timerId);
		heroText.style.display = 'none'
		timerWrapper.style.display = 'none'
  }
  const _days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
  const _hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
  const _minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;

  days.textContent = _days < 10 ? '0' + _days : _days;
  hours.textContent = _hours < 10 ? '0' + _hours : _hours;
  minutes.textContent = _minutes < 10 ? '0' + _minutes : _minutes;
  daysTitle.textContent = declensionNum(_days, ['день', 'дня', 'дней']);
  hoursTitle.textContent = declensionNum(_hours, ['час', 'часа', 'часов']);
  minutesTitle.textContent = declensionNum(_minutes, [
    'минута',
    'минуты',
    'минут',
  ]);
};


timerId = setInterval(countdownTimer, 1000);

