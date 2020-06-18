const Navigation = document.querySelector('.footer__nav-block');
const About = document.querySelector('.footer__about-block');
const Sup = document.querySelector('.footer__sup-block');

function navShow() {
  const list = document.querySelector('.navigation__list')
  const arrow = document.querySelector('.arrow-nav')

  if (list.style.display === 'none') {
    list.style.display = 'block'
    arrow.style.transform = 'rotate(90deg)'
  } else {
    list.style.display = 'none'
    arrow.style.transform = 'rotate(0deg)'
  }
}
function aboutShow() {
  const list = document.querySelector('.about__list')
  const arrow = document.querySelector('.arrow-about')
  if (list.style.display === 'none') {
    list.style.display = 'block'
    arrow.style.transform = 'rotate(90deg)'
  } else {
    list.style.display = 'none'
    arrow.style.transform = 'rotate(0deg)'
  }
}
function supShow() {
  const list = document.querySelector('.support__list')
  const arrow = document.querySelector('.arrow-sup')
  if (list.style.display === 'none') {
    list.style.display = 'block'
    arrow.style.transform = 'rotate(90deg)'
  } else {
    list.style.display = 'none'
    arrow.style.transform = 'rotate(0deg)'
  }
}

if (Navigation != null) {
  Navigation.addEventListener('click', navShow);
  About.addEventListener('click', aboutShow);
  Sup.addEventListener('click', supShow);
}
