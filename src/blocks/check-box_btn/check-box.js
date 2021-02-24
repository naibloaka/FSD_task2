function showList() {
  const list = $(this).siblings('#extra-checkbox-list')
  list.toggle(350);

  $(this).children('.extra-check-arrow').toggleClass('transform');
}

$('#extra-check').on('click', showList);
