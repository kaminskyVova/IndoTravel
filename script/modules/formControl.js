import { loadDb } from "./fetch.js";


const reservationData = document.querySelector('.reservation__data')
const reservationPrice = document.querySelector('.reservation__price')
const selectPeopleCount = document.querySelector('#reservation__people');
let dataT = ''
let totalPrice = 0

export const formControl = (data) => {
	dataT = data
  const form = document.querySelector('.reservation__form');
	reservationPrice.textContent = `${totalPrice}₽`;


	form.addEventListener('submit', (e) => {
		e.preventDefault();
		
    const formData = new FormData(e.target);
		const tourData = Object.fromEntries(formData)
		
			dataT.forEach(tour => {
				if(tour.date === tourData.dates) {
					tourData.price = tour.price
				}
			});
			totalPrice = tourData.price * tourData.people

			reservationData.textContent = `${tourData.dates}, ${tourData.people} человека`
			reservationPrice.textContent = `${totalPrice}₽`;
    form.reset();

		return {tourData}
  });

};



		