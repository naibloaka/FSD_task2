function showOnClick() {
  $(this).siblings('.navigation__list').toggle(300);

  $(this).children('.fa-chevron-right').toggleClass('transform');
}

$('.js-footer__title-block').on('click', showOnClick);
