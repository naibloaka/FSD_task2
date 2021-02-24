import '../../node_modules/air-datepicker/dist/css/datepicker.min.css';

import 'air-datepicker';

import '../blocks/dropdown/dropdown';
import '../blocks/check-box_btn/check-box';
import '../blocks/like-checkbox/like-checkbox';
import '../blocks/pagination/pagination';
import '../blocks/range-slider/range-slider';

$('#ui-datepicker1').datepicker({
  range: true,
  prevHtml: '<i class="fas fa-arrow-left"></i>',
  nextHtml: '<i class="fas fa-arrow-right"></i>',
  dateFormat: 'd M',
  minDate: new Date(),
  navTitles: {
    days: 'MM yyyy',
  },
  clearButton: true,
  applyButton: true,
});
$('#ui-datepicker1__arrow-down').click(() => {
  $('#ui-datepicker1').trigger('click')
})

const dateDropdownLeft = $('#ui-datepicker2');
const dateDropdownRight = $('#ui-datepicker3');
dateDropdownRight.val('19.08.2019');

$('#ui-datepicker2__arrow-down').click(() => dateDropdownLeft.trigger('click'))
$('#ui-datepicker3__arrow-down').click(() => dateDropdownRight.trigger('click'))

const DropdownDatepicker = dateDropdownLeft.datepicker({
  prevHtml: '<i class="fas fa-arrow-left"></i>',
  nextHtml: '<i class="fas fa-arrow-right"></i>',
  range: true,
  dateFormat: 'd M',
  minDate: new Date(),
  navTitles: {
    days: 'MM yyyy',
  },
  clearButton: true,
  applyButton: true,
  // multipleDates: 2,

  onSelect(formattedDate, date) {
    dateDropdownLeft.val(date[0].toLocaleDateString());
    dateDropdownRight.val(date[1].toLocaleDateString());
  },

}).data('datepicker');

dateDropdownLeft.click(() => {
  DropdownDatepicker.show()
})

dateDropdownRight.click(() => {
  dateDropdownLeft.trigger('click')
})

$('#ui-datepicker4').datepicker({
  range: true,
  prevHtml: '<i class="fas fa-arrow-left"></i>',
  nextHtml: '<i class="fas fa-arrow-right"></i>',
  dateFormat: 'd M',
  minDate: new Date(),
  navTitles: {
    days: 'MM yyyy',
  },
  clearButton: true,
  applyButton: true,
});
$('#ui-datepicker4__arrow-down').click(() => {
  $('#ui-datepicker4').trigger('click')
})
$('#ui-datepicker4').val('19 авг - 23 авг');

$('#number-find-dropdown1').val('2 спальни, 2 кровати...')
$('#number-find-dropdown2').val('2 спальни, 2 кровати...')

// adding apply button
const okButton = '<span class="datepicker--button" data-action="hide">Применить</span>';
$('.datepicker--button[data-action="clear"]').each(function (index) {
  if ($('.datepicker--buttons').is('.datepicker--button[data-action="hide"]') === false) {
    $(okButton).insertAfter($(this));
  }
});
