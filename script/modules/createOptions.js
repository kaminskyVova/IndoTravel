import { loadDb } from './fetch.js';

export const renderOptions = (data) => {
  // console.log(data);

  const selectDataTour = document.querySelector('#reservation__date');
  const selectPeopleCount = document.querySelector('#reservation__people');

  data.map((item) => {
    selectDataTour.insertAdjacentHTML(
      'beforeend',
      `
    <option value="${item.date}" class="tour__option reservation__option">${item.date}</option>
    `
    );
  });

  selectDataTour.addEventListener('change', (e) => {
    const options = selectPeopleCount.querySelectorAll('option');

    data.forEach((el) => {
      if (e.target.value === el.date) {
        const keys = Object.values(el);

        for (let i = Number(keys[1]); i <= Number(keys[2]); i++) {
          selectPeopleCount.insertAdjacentHTML(
            'beforeend',
            `
						<option value="${i}" class="tour__option reservation__option">${i}</option>
						`
          );
        }
      }
    });

		const oldOpt = [...options]

		oldOpt.slice(1).forEach(el => {
			el.remove()
		})
  });
};

// loadDb(renderOptions);
