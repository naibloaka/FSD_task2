const extraCheckbox = document.getElementById('extra-check');
const checkboxList = document.getElementById('extra-checkbox-list');

function hideBoxes() {
  if (checkboxList.style.display === 'none') {
    checkboxList.style.display = 'block';
  } else {
    checkboxList.style.display = 'none';
  }
}


extraCheckbox.addEventListener('click', hideBoxes);
