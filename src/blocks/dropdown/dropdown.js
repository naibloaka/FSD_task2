const dropdownField = document.getElementById('dropdown__guests-calc'); // label dropdown field
const dropdownList = document.getElementById('dropdown__buttons'); // invisible list
const dropdownBlock = document.getElementById('border_style');

function dropdownShow() {
  if (dropdownList.style.display === 'none') {
    dropdownList.style.display = 'block';
    dropdownBlock.style.borderRadius = '5px 5px 0 0';
  } else {
    dropdownList.style.display = 'none';
    dropdownBlock.style.borderRadius = '5px';
  }
}

if (dropdownField != null) {
  dropdownField.addEventListener('click', dropdownShow);


  // for adults
  const plusAdult = document.getElementById('plus-adult');
  const minusAdult = document.getElementById('minus-adult');
  const numAdult = document.getElementById('number-adult');

  plusAdult.onclick = function () {
    let count = numAdult.innerHTML;
    minusAdult.style.color = '#8F90A0';
    minusAdult.style.border = '1px solid #8F90A0';
    count++;
    numAdult.innerHTML = count;
  };
  minusAdult.onclick = function () {
    if (numAdult.innerHTML === '1') {
      minusAdult.style.color = '#C7C7C';
      minusAdult.style.border = '1px solid #C7C7CF';
    }
    if (numAdult.innerHTML > 0) {
      let count = numAdult.innerHTML;
      count--;
      numAdult.innerHTML = count;
    }
  };

  // for children
  const plusChild = document.getElementById('plus-child');
  const minusChild = document.getElementById('minus-child');
  const numChild = document.getElementById('number-child');

  plusChild.onclick = function () {
    let count = numChild.innerHTML;
    minusChild.style.color = '#8F90A0';
    minusChild.style.border = '1px solid #8F90A0';
    count++;
    numChild.innerHTML = count;
  };
  minusChild.onclick = function () {
    if (numChild.innerHTML === '1') {
      minusChild.style.color = '#C7C7C';
      minusChild.style.border = '1px solid #C7C7CF';
    }
    if (numChild.innerHTML > 0) {
      let count = numChild.innerHTML;
      count--;
      numChild.innerHTML = count;
    }
  };

  // for baby
  const plusBaby = document.getElementById('plus-baby');
  const minusBaby = document.getElementById('minus-baby');
  const numBaby = document.getElementById('number-baby');

  plusBaby.onclick = function () {
    let count = numBaby.innerHTML;
    minusBaby.style.color = '#8F90A0';
    minusBaby.style.border = '1px solid #8F90A0';
    count++;
    numBaby.innerHTML = count;
  };
  minusBaby.onclick = function () {
    if (numBaby.innerHTML === '1') {
      minusBaby.style.color = '#C7C7C';
      minusBaby.style.border = '1px solid #C7C7CF';
    }
    if (numBaby.innerHTML > 0) {
      let count = numBaby.innerHTML;
      count--;
      numBaby.innerHTML = count;
    }
  };

  // clear ana apply buttons
  const okBtn = document.getElementById('ok-but');

  okBtn.onclick = function () {
    document.getElementById('drop_val').value = Number(numAdult.innerHTML) + Number(numChild.innerHTML);
    if (Number(numBaby.innerHTML) > 0) {
      // Проверка есть ли младенцы
      document.getElementById('drop_val').value = `${String(document.getElementById('drop_val').value)
      }, ${
        numBaby.innerHTML
      } младенец`;
    }
    dropdownList.style.display = 'none';
    dropdownBlock.style.borderRadius = '5px';
  };

  const clearBtn = document.getElementById('clear-but');

  clearBtn.onclick = function () {
    document.getElementById('drop_val').value = null;
    numAdult.innerHTML = 0;
    numChild.innerHTML = 0;
    numBaby.innerHTML = 0;
    dropdownList.style.display = 'none';
    dropdownBlock.style.borderRadius = '5px';
  };
}
