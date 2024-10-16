const nav = document.querySelector('.nav');
const navButton = document.querySelector('.nav__button');

nav.classList.add('nav--closed');

navButton.addEventListener('click', () => {
  nav.classList.toggle('nav--closed');
  nav.classList.toggle('nav--opened');
});

const slider = document.querySelector('.slider');
const sliderButton = document.querySelector('.slider__toggle');

if (slider) {
  let flag = false;
  sliderButton.addEventListener('click', () => {
    if (!flag) {
      flag = true;
      slider.classList.add('slider--before');
    } else {
      slider.classList.toggle('slider--before');
      slider.classList.toggle('slider--after');
    }
  });
}
