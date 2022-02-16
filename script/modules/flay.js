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

const reversFly = () => {

  const maxScroll = docEl.scrollHeight - docEl.clientHeight;
  const percentScroll = (window.pageYOffset * 100) / maxScroll;


  window.addEventListener('scroll', () => {
    const start = percentScroll - (window.pageYOffset * 100) / maxScroll;

    if (start > 0) {
      fly.style.cssText = ` 
      transform: rotate(180deg);
      position: fixed;
      width: 50px;
      height: 50px;
      right: 0;
      bottom: 0;
      pointer-events: none;
      background: url('../../img/airplane/airplane.svg') center/contain;
      `;
      // fly.classList.remove('rotate-down')
      // fly.classList.add('rotate-up')
    }
    if (start < 0) {
      fly.style.cssText = `
      transform:rotate(360deg);
      position: fixed;
      width: 50px;
      height: 50px;
      right: 0;
      bottom: 0;
      pointer-events: none;
      background: url('../../img/airplane/airplane.svg') center/contain;
      `;
      // fly.classList.remove('rotate-up')
      // fly.classList.add('rotate-down')
    }
  });
};

const calcPositionFly = () => {
  const maxTop = docEl.clientHeight - fly.clientHeight;
  const maxScroll = docEl.scrollHeight - docEl.clientHeight;
  const percentScroll = (window.pageYOffset * 100) / maxScroll;

  const shareHeightViewPort = maxTop / 100;

  fly.style.transform = `translateY(${-shareHeightViewPort * percentScroll}px)`;
};

window.addEventListener('scroll', reversFly);
window.addEventListener('scroll', calcPositionFly);

calcPositionFly();
