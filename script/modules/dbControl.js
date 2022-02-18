import { createPopupStatus201, createPopupStatusFalse, createEmailStatusFalse } from './popupStatus.js';

export const dbReservationControl = (tour) => {
  fetch('http://localhost:3000/tours', {
    method: 'POST',
    body: JSON.stringify({
      contact: tour.contact,
      date: tour.dates,
      people: tour.people,
      phone: tour.phone,
      price: tour.price,
    }),
		headers: {
			'Content-Type': 'application/json'
		},
  })
  .then(response => {
    if (response.status === 201) createPopupStatus201();
    if (response.status != 201) createPopupStatusFalse();
  })
  .catch(error => console.error(error));

};

export const dbEmailControl = (email) => {
  fetch('http://localhost:3000/emails', {
    method: 'POST',
    body: JSON.stringify({
      email: email.email
    }),
		headers: {
			'Content-Type': 'application/json'
		},
  })
  .then(response => {
    if (response.status === 201) createPopupStatus201();
    if (response.status != 201) createEmailStatusFalse();
  })
  .catch(error => console.error(error));

};
