export const dbControl = (tour) => {
  fetch('http://localhost:3000/api/goods', {
    method: 'POST',
    body: JSON.stringify({
      contact: tour.contact,
      dates: tour.dates,
      people: tour.people,
      phone: tour.phone,
      price: tour.price,
    }),
		headers: {
			'Content-Type': 'application/json'
		},
  });
};
