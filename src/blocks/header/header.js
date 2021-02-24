function headerNavShow() {
  $(this).siblings('.header__navigation').toggle(300);
}

$('.header__nav-btn').on('click', headerNavShow);
