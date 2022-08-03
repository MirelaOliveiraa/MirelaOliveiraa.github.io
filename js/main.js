window.addEventListener('load', () => {
  document.querySelector('.scroll-down').addEventListener('click', scrollDown);
  document.querySelector('.scroll-top').addEventListener('click', scrollTop);

  initSlider();
  getFullYear();
});

function scrollDown(event) {
  event.preventDefault();

  const element = event.target;
  const { href } = element.tagName === 'A' ? element : element.parentElement;
  const [, section] = href.split('#');

  document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
}

function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function initSlider() {
  new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

function getFullYear() {
  document.getElementById('year').textContent = new Date().getFullYear();
}
