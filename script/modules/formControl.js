import { createModalConfirm } from './createModalConfirm.js';
import { dbReservationControl, dbEmailControl } from './dbControl.js';
import { loadStyles } from './loadStylesCss.js';

const reservationData = document.querySelector('.reservation__data');
const reservationPrice = document.querySelector('.reservation__price');
const selectDataTour = document.querySelector('#reservation__date');
const selectPeopleCount = document.querySelector('#reservation__people');
const reservationName = document.querySelector('.reservation__input_name');
const reservationPhone = document.querySelector('#reservation__phone');
let dataT = '';
let totalPrice = 0;
let tour = {
  dates: 0,
  people: 0,
};

export const confirmModalControl = async (tour) => {
  await loadStyles('css/confirm-popup.css');

  const { overlayConfirm, modal } = createModalConfirm(tour);

  modal.addEventListener('click', ({ target }) => {
    if (target.classList.contains('modal__btn_confirm')) {
      dbReservationControl(tour);
      overlayConfirm.classList.remove('is-visible');
    }
    if (target.classList.contains('modal__btn_edit'))
      overlayConfirm.classList.remove('is-visible');
  });
};

export const formReservationControl = (data) => {
  let flag = false;
  dataT = data;
  const form = document.querySelector('.reservation__form');
  reservationPrice.textContent = `${totalPrice}₽`;

  selectDataTour.addEventListener('change', (e) => {
    tour.dates = e.target.value;
    reservationData.textContent = `${tour.dates}, ${tour.people} человека`;
  });

  selectPeopleCount.addEventListener('change', (e) => {
    tour.people = e.target.value;
    reservationData.textContent = `${tour.dates}, ${tour.people} человека`;

    dataT.forEach((tourObj) => {
      if (tourObj.date === tour.dates) {
        tour.price = tourObj.price;
      }
    });
    totalPrice = Number(tour.price) * Number(tour.people);

    reservationPrice.textContent = `${totalPrice}₽`;
  });

  reservationName.addEventListener('input', () => {
    reservationName.value = reservationName.value.replace(/[^а-яё ]/gi, '');
  });

  reservationName.addEventListener('change', () => {
    const text = reservationName.value.trim();
    text.match(/[а-я]/gi);
    const n = text.split(' ');

    if (n.length < 3) {
      flag = false;
    } else {
      flag = true;
    }

    const justValidate = new JustValidate(form).addField(
      '.reservation__input_name',
      [
        {
          rule: 'required',
          errorMessage:
            n.length < 3
              ? alert('Должны быть указанны Фамилия Имя Отчество')
              : '',
        },
      ]
    );
  });

  const telMask = new Inputmask('+7 (999)-999-99-99');
  telMask.mask(reservationPhone);

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const tourData = Object.fromEntries(formData);
    tourData.price = totalPrice;
    dataT.forEach((tour) => {
      if (tour.date === tourData.dates) {
        tourData.price = tour.price;
      }
    });

    totalPrice = tourData.price * tourData.people;

    if (tour.people != 0) {
      tour = tourData;
      form.reset();
    } else {
      alert(`Выберите количестов человек!`);
    }

    reservationData.textContent = '';
    reservationPrice.textContent = `0₽`;

    tour.price = totalPrice;

    flag ? confirmModalControl(tour) : '';

    return { tourData };
  });
};

export const formEmailControl = () => {
  const form = document.querySelector('.footer__form');
  const footerEmail = form.querySelector('.footer__input-wrap')

  const justValidate = new JustValidate(form).addField('.footer__input', [
    {
      rule: 'email',
      errorMessage: 'Не верно указан Email',
    },
  ]);

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const emailData = Object.fromEntries(formData);

    dbEmailControl(emailData);

    return { emailData };
  });
};
