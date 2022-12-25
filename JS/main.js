import Scroll from './Scroll.js'

const questions = document.querySelectorAll('.questions__content__all li h2');
const answers = document.querySelectorAll('.questions__content__all li p');

const right = document.querySelector('.content__container--buttonRight')
const container = document.querySelector('.content__container');
const bigel = document.querySelector('.content__container .reviewers');

const left = document.querySelector('.content__container--buttonLeft')

questions.forEach((item,index)=>{
  function toggleClass(){
    answers[index].classList.toggle('active');
  }

  item.addEventListener('click',toggleClass)
})

  
right.addEventListener("click", () => {
  const slideWidth = bigel.clientWidth;
  container.scrollLeft += slideWidth;
});

left.addEventListener("click", () => {
  const slideWidth = bigel.clientWidth;
  container.scrollLeft -= slideWidth;
});


if ('ontouchstart' in window) {
  right.addEventListener("touchstart", () => {
    const slideWidth = bigel.clientWidth;
    container.scrollLeft += slideWidth;
  });
  
  left.addEventListener("touchstart", () => {
    const slideWidth = bigel.clientWidth;
    container.scrollLeft -= slideWidth;
  });
}

Scroll()