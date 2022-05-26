new Swiper('.mySwiper', {
  spaceBetween: 15,
  loop: true,

  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },

  autoplay: {
    delay: 4000,
  },

  navigation: {
    nextEl: '.album__left',
    prevEl: '.album__right',
  },
});
