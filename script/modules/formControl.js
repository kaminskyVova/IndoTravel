import { loadDb } from './fetch.js';

const reservationData = document.querySelector('.reservation__data');
const reservationPrice = document.querySelector('.reservation__price');
const selectDataTour = document.querySelector('#reservation__date');
const selectPeopleCount = document.querySelector('#reservation__people');
let dataT = '';
let totalPrice = 0;
let tour = {
  dates: 0,
  people: 0,
};

export const formControl = (data) => {
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

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const tourData = Object.fromEntries(formData);

    dataT.forEach((tour) => {
      if (tour.date === tourData.dates) {
        tourData.price = tour.price;
      }
    });
    totalPrice = tourData.price * tourData.people;

    tour = tourData;

    form.reset();

    return { tourData };
  });
};
