// comfort dropdown
const dropdownComfort = document.getElementById('dropdown__comfort-calc');
const dropdownComfortList = document.getElementById('dropdown-comfort__buttons');
const dropdownComfortBlock = document.getElementById('comfort-border_style');

const plusBedroom = document.getElementById('plus-bedroom');
const minusBedroom = document.getElementById('minus-bedroom');
const numBedroom = document.getElementById('number-bedroom');

const plusBed = document.getElementById('plus-bed');
const minusBed = document.getElementById('minus-bed');
const numBed = document.getElementById('number-bed');

const plusBathroom = document.getElementById('plus-bathroom');
const minusBathroom = document.getElementById('minus-bathroom');
const numBathroom = document.getElementById('number-bathroom');

dropdownComfort.onclick = function () {
  if (dropdownComfortList.style.display === 'none') {
    dropdownComfortList.style.display = 'block';
    dropdownComfortBlock.style.borderRadius = '5px 5px 0 0';
  } else {
    dropdownComfortList.style.display = 'none';
    dropdownComfortBlock.style.borderRadius = '5px';
  }

  let bedroom;
  if (Number(numBedroom.innerHTML) === 0) {
    bedroom = '';
  }
  if (Number(numBedroom.innerHTML) === 1) {
    bedroom = ' спальня, ';
  }
  if (Number(numBedroom.innerHTML) >= 2 && Number(numBed.innerHTML) < 5) {
    bedroom = ' спальни, ';
  }
  if (Number(numBedroom.innerHTML) >= 5) {
    bedroom = ' спален, ';
  }

  let bed;
  if (Number(numBed.innerHTML) === 0) {
    bed = '';
  }
  if (Number(numBed.innerHTML) === 1) {
    bed = ' кровать, ';
  }
  if (Number(numBed.innerHTML) >= 2 && Number(numBed.innerHTML) < 5) {
    bed = ' кровати, ';
  }
  if (Number(numBed.innerHTML) >= 5) {
    bed = ' кроватей, ';
  }

  let bathroom;
  if (Number(numBathroom.innerHTML) === 0) {
    bathroom = '';
  }
  if (Number(numBathroom.innerHTML) === 1) {
    bathroom = ' ванная комната';
  }
  if (Number(numBathroom.innerHTML) >= 2 && Number(numBed.innerHTML) < 5) {
    bathroom = ' ванных комнаты';
  }
  if (Number(numBathroom.innerHTML) >= 5) {
    bathroom = ' ванных комнат';
  }

  let valueComfort = '';
  if (Number(numBedroom.innerHTML) > 0) {
    valueComfort += numBedroom.innerHTML + bedroom;
  }
  if (Number(numBed.innerHTML) > 0) {
    valueComfort += numBed.innerHTML + bed;
  }
  if (Number(numBathroom.innerHTML) > 0) {
    valueComfort += numBathroom.innerHTML + bathroom;
  }
  document.getElementById('drop-comfort_val').value = valueComfort;
};

// for bedrooms

plusBedroom.onclick = function () {
  let count = numBedroom.innerHTML;
  minusBedroom.style.color = '#8F90A0';
  minusBedroom.style.border = '1px solid #8F90A0';
  count++;
  numBedroom.innerHTML = count;
};
minusBedroom.onclick = function () {
  if (numBedroom.innerHTML === '1') {
    minusBedroom.style.color = '#C7C7C';
    minusBedroom.style.border = '1px solid #C7C7CF';
  }
  if (numBedroom.innerHTML > 0) {
    let count = numBedroom.innerHTML;
    count--;
    numBedroom.innerHTML = count;
  }
};

// for beds
plusBed.onclick = function () {
  let count = numBed.innerHTML;
  minusBed.style.color = '#8F90A0';
  minusBed.style.border = '1px solid #8F90A0';
  count++;
  numBed.innerHTML = count;
};

minusBed.onclick = function () {
  if (numBed.innerHTML === '1') {
    minusBed.style.color = '#C7C7C';
    minusBed.style.border = '1px solid #C7C7CF';
  }
  if (numBed.innerHTML > 0) {
    let count = numBed.innerHTML;
    count--;
    numBed.innerHTML = count;
  }
};

// for bathroom
plusBathroom.onclick = function () {
  let count = numBathroom.innerHTML;
  minusBathroom.style.color = '#8F90A0';
  minusBathroom.style.border = '1px solid #8F90A0';
  count++;
  numBathroom.innerHTML = count;
};
minusBathroom.onclick = function () {
  if (numBathroom.innerHTML === '1') {
    minusBathroom.style.color = '#C7C7C';
    minusBathroom.style.border = '1px solid #C7C7CF';
  }
  if (numBathroom.innerHTML > 0) {
    let count = numBathroom.innerHTML;
    count--;
    numBathroom.innerHTML = count;
  }
};
