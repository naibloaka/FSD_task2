import '../../../node_modules/air-datepicker/dist/css/datepicker.min.css';

import 'air-datepicker';

// datepicker on number page
const dateDropdownLeft = $('#number-find__datepicker-from');
const dateDropdownRight = $('#number-find__datepicker-to');

$('#number-find__datepicker-from__arrow-down').click(() => dateDropdownLeft.trigger('click'))
$('#number-find__datepicker-to__arrow-down').click(() => dateDropdownRight.trigger('click'))

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

// datepicker on review page
const ReviewDatePickerLeft = $('#review-page-datepicker-from')
const ReviewDatePickerRight = $('#review-page-datepicker-to')

$('#review-page-datepicker-from__arrow-down').click(() => ReviewDatePickerLeft.trigger('click'))
$('#review-page-datepicker-to__arrow-down').click(() => ReviewDatePickerRight.trigger('click'))

const ReviewDatepicker = ReviewDatePickerLeft.datepicker({
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
    ReviewDatePickerLeft.val(date[0].toLocaleDateString());
    ReviewDatePickerRight.val(date[1].toLocaleDateString());
  },

}).data('datepicker');

ReviewDatePickerLeft.click(() => {
  ReviewDatepicker.show()
})

ReviewDatePickerRight.click(() => {
  ReviewDatePickerLeft.trigger('click')
})

const numberDatepicker = $('#search-room__datepicker');
$('#search-room__datepicker__arrow-down').click(() => {
  numberDatepicker.trigger('click')
})

// datepicker on number page
numberDatepicker.datepicker({
  range: true,
  prevHtml: '<i class="fas fa-arrow-left"></i>',
  nextHtml: '<i class="fas fa-arrow-right"></i>',
  dateFormat: 'd M',
  // minDate: new Date(),
  navTitles: {
    days: 'MM yyyy',
  },
  clearButton: true,
  applyButton: true,
});

$('#cards__datepicker').datepicker({
  inline: true,
  range: true,
  prevHtml: '<i class="fas fa-arrow-left"></i>',
  nextHtml: '<i class="fas fa-arrow-right"></i>',
  dateFormat: 'd M',
  // minDate: new Date(),
  navTitles: {
    days: 'MM yyyy',
  },
  clearButton: true,
  applyButton: true,
});

// adding apply button
const okButton = '<span class="datepicker--button" data-action="hide">Применить</span>';
$('.datepicker--button[data-action="clear"]').each(function (index) {
  $(okButton).insertBefore($(this));
});
