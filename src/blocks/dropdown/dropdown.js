import $ from 'jquery'
// show list
function dropdownShow() {
  const container = $(this).parent();

  container.children('.dropdown__buttons-list').slideToggle(10);

  if (container.children('.dropdown__buttons-list').is(':visible')) {
    container.children('input').css('border-radius', '5px 5px 0px 0px');
  }
}

function getValueFromFurniture(jqObj) {
  const container = jqObj.parent().parent();
  const numbersArr = $.makeArray(container.find('.number'));

  const bedRooms = Number(numbersArr[0].innerHTML);
  const beds = Number(numbersArr[1].innerHTML);
  const bathRooms = Number(numbersArr[2].innerHTML);

  let bedRoomStr;
  let bedStr;
  let bathRoomStr;

  if (bedRooms % 10 === 0) bedRoomStr = 'спален,';
  if (bedRooms % 10 === 1) bedRoomStr = 'спальня,';
  if (bedRooms % 10 > 1 && bedRooms % 10 < 5) bedRoomStr = 'спальни,';
  if (bedRooms % 10 >= 5 && bedRooms % 10 <= 9) bedRoomStr = 'спален,';
  if (bedRooms % 100 > 10 && bedRooms % 100 < 20) bedRoomStr = 'спален,';
  if (bedRooms === 0) bedRoomStr = '';

  if (beds % 10 === 0) bedStr = 'кроватей,';
  if (beds % 10 === 1) bedStr = 'кровать,';
  if (beds % 10 > 1 && beds % 10 < 5) bedStr = 'кровати,';
  if (beds % 10 >= 5 && beds % 10 <= 9) bedStr = 'кроватей,';
  if (beds % 100 > 10 && beds % 100 < 20) bedStr = 'кроватей,';
  if (beds === 0) bedStr = '';

  if (bathRooms % 10 === 0) bathRoomStr = 'ванных комнат';
  if (bathRooms % 10 === 1) bathRoomStr = 'ванная комната';
  if (bathRooms % 10 > 1 && bathRooms % 10 < 5) bathRoomStr = 'ванных комнаты';
  if (bathRooms % 10 >= 5 && bathRooms % 10 <= 9) bathRoomStr = 'ванных комнат';
  if (bathRooms % 100 > 10 && bathRooms % 100 < 20) bathRoomStr = 'ванных комнат';
  if (bathRooms === 0) bathRoomStr = '';

  let resultStr = '';
  if (bedRooms !== 0) {
    resultStr += `${bedRooms} ${bedRoomStr}`;
  }
  if (beds !== 0) {
    resultStr += ` ${beds} ${bedStr}`;
  }
  if (bathRooms !== 0) {
    resultStr += ` ${bathRooms} ${bathRoomStr}`;
  }

  return resultStr;
}

function dropdownComfortShow() {
  const container = $(this).parent();

  container.children('.dropdown__buttons-list').slideToggle(10);

  const stringValue = getValueFromFurniture($(this));
  $(this).val(stringValue);
  console.log(stringValue)
}

function getValueFromGuests(arr) {
  const guests = Number(arr[0].innerHTML) + Number(arr[1].innerHTML);
  const baby = Number(arr[2].innerHTML);
  let guestStr;

  if (guests % 10 === 0) guestStr = 'гостей';
  if (guests % 10 === 1) guestStr = 'гость';
  if (guests % 10 > 1 && guests % 10 < 5) guestStr = 'гостя';
  if (guests % 10 >= 5 && guests % 10 <= 9) guestStr = 'гостей';
  if (guests % 100 > 10 && guests % 100 < 20) guestStr = 'гостей';

  guestStr = `${guests} ${guestStr}`;
  if (baby === 0) return guestStr;

  let babyStr;

  if (baby % 10 === 0) babyStr = ` ${baby} младенцев`;
  if (baby % 10 === 1) babyStr = ` ${baby} младенец`;
  if (baby % 10 > 1 && baby % 10 < 5) babyStr = ` ${baby} младенца`;
  if (baby % 10 >= 5 && baby % 10 <= 9) babyStr = ` ${baby} младенцев`;
  if (baby % 100 > 10 && baby % 100 < 20) babyStr = ` ${baby} младенцев`;

  return guestStr + babyStr;
}

function plusMinusClick() {
  const minus = $(this).children('.minus');
  const plus = $(this).children('.plus');
  const num = $(this).children('.number');

  let numValue = Number(num.html());
  function minusClick() {
    if (numValue === 1) {
      numValue--;
      num.html(Number(numValue));
      minus.css('border', '1px solid #c7c7cf');
      minus.css('color', '#c7c7cf');
    }

    if (numValue > 1) {
      numValue--;
      num.html(Number(numValue));
    }
  }

  function plusClick() {
    numValue++;
    num.html(Number(numValue));
    minus.css('border', '1px solid #8f90a0');
    minus.css('color', '#8f90a0');
  }

  minus.on('click', minusClick)
  plus.on('click', plusClick);
}

function acceptOnClick() {
  const container = $(this).parent().parent();

  const numbersArr = $.makeArray(container.find('.number'));

  const valStr = getValueFromGuests(numbersArr);

  container.parent().children('input').val(valStr);
  container.hide();
}

function clearOnClick() {
  const container = $(this).parent().parent();
  container.find('.number').html(0);
  container.parent().children('input').val(undefined);

  container.hide();
}

function hideList() {
  $('.dropdown__buttons-list').hide();
}

const numberFindDropdown = $('#number-find-dropdown');
const arrow = $('.dropdown__arrow-down');
const numberCalcDropdown = $('#number-calc-dropdown');

numberCalcDropdown.on('click', dropdownShow);
numberFindDropdown.on('click', dropdownShow);
arrow.on('click', dropdownShow);

const buttonsBlock = $('.block-calc');
buttonsBlock.on('mouseover', plusMinusClick);
buttonsBlock.on('click', plusMinusClick);

const clearBtn = $('.dropdown__clear-btn');
clearBtn.on('click', clearOnClick);

const acceptBtn = $('.dropdown__accept-btn');
acceptBtn.on('click', acceptOnClick)

const comfortDrop = $('#number-page-comfort-dropdown');
comfortDrop.on('click', dropdownComfortShow);
