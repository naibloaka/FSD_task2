function likeOnClick() {
  const span = $(this).siblings('.like-btn__count');
  let count = span.html()

  if ($(this).is(':checked')) {
    count++;
    span.html(count);
  } else {
    count--;
    span.html(count);
  }
}

$('#like1').on('click', likeOnClick);
$('#like2').on('click', likeOnClick);
