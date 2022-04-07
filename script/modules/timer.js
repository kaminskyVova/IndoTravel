const countDays = document.querySelector('.timer__count_days');
const countHours = document.querySelector('.timer__count_hours');
const countMinutes = document.querySelector('.timer__count_minutes');

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
  const addZero = num => num < 10 ? `0${num}` : num
  timerArticle.dataset.timerDeadline = '2022/05/25, 12:00';
  let deadline = timerArticle.dataset.timerDeadline;

  deadline = new Date(deadline);

  const diff = deadline - new Date();
  if (diff <= 0) {
    clearInterval(timerId);
		heroText.style.display = 'none'
		timerWrapper.style.display = 'none'
  }

  const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
  const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
  const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;

	days > 0.5 ? timerWrapper.style.backgroundColor = 'rgb(56, 231, 19, .6)' : timerWrapper.style.backgroundColor = 'rgb(247, 39, 11, .6)';

  countDays.textContent = addZero(days)
  countHours.textContent = addZero(hours)
  countMinutes.textContent = addZero(minutes)
  daysTitle.textContent = declensionNum(days, ['день', 'дня', 'дней']);
  hoursTitle.textContent = declensionNum(hours, ['час', 'часа', 'часов']);
  minutesTitle.textContent = declensionNum(minutes, [
    'минута',
    'минуты',
    'минут',
  ]);
};


timerId = setInterval(countdownTimer, 1000);

