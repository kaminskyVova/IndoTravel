const docEl = document.documentElement;
const fly = document.createElement('div');

fly.style.cssText = `
    position: fixed;
    width: 50px;
    height: 50px;
    right: 0;
    bottom: 0;
    pointer-events: none;

    background: url('../../img/airplane/airplane.svg') center/contain;

`;
document.body.append(fly);

const calcPositionFly = () => {
  const maxTop = docEl.scrollWidth - fly.clientWidth;
  const maxScroll = docEl.scrollHeight - docEl.clientHeight;
  const percentScroll = (window.pageYOffset * 100) / maxScroll;

  const top = maxTop * ((percentScroll / 100) / 2.17);

  fly.style.transform = `translateY(${-top}px)`;
};

window.addEventListener('scroll', calcPositionFly);

calcPositionFly();
