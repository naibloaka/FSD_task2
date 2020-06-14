const menu = document.getElementById('nav-btn');

function menuClick() {
  const list = document.getElementsByClassName('navigation-block');

  if (list[0].style.display === 'none') {
    list[0].style.display = 'block';
  } else {
    list[0].style.display = 'none';
  }
}

menu.addEventListener('click', menuClick);
