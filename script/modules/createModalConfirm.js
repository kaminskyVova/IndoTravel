export const createModalConfirm = (tour) => {
  const overlayConfirm = document.createElement('div');
  overlayConfirm.classList.add('overlay', 'overlay_confirm', 'is-visible');
  const modal = document.createElement('div');
  modal.classList.add('modal');
  const title = document.createElement('h2');
  title.classList.add('modal__title');
  title.textContent = 'Подтверждение заявки';
  const peopleName = document.createElement('p');
  peopleName.classList.add('modal__text');
  peopleName.textContent = `Бронирование путешествия на имя: ${tour.contact}`;
  const peopleCount = document.createElement('p');
  peopleCount.classList.add('modal__text');
  peopleCount.textContent = `Бронирование путешествия в Индонезию на ${tour.people} человек`;
  const peopleDates = document.createElement('p');
  peopleDates.classList.add('modal__text');
  peopleDates.textContent = `В даты: ${tour.dates}`;
  const peoplePrice = document.createElement('p');
  peoplePrice.classList.add('modal__text');
  peoplePrice.textContent = `Стоимость тура ${tour.price}₽`;
  const btnsWrapper = document.createElement('div');
  btnsWrapper.classList.add('modal__button');
  const btnConfirm = document.createElement('button');
  btnConfirm.classList.add('modal__btn', 'modal__btn_confirm');
  btnConfirm.textContent = 'Подтверждаю';
  const btnEdit = document.createElement('button');
  btnEdit.classList.add('modal__btn', 'modal__btn_edit');
  btnEdit.textContent = 'Изменить данные';

  overlayConfirm.append(modal);
  btnsWrapper.append(btnConfirm, btnEdit);
  modal.append(
    title,
    peopleName,
    peopleCount,
    peopleDates,
    peoplePrice,
    btnsWrapper
  );
  document.body.append(overlayConfirm);

  return { overlayConfirm, modal };
};
