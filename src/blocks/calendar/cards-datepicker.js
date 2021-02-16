// datepicker on card page
const dateDropdownLeft = $('#cards-datepicker-from')
const dateDropdownRight = $('#cards-datepicker-to')

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
