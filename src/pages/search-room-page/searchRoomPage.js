import '../../blocks/header/header';
import '../../blocks/footer/footer';
import '../../blocks/dropdown/dropdown';
import '../../blocks/calendar/datepicker';
import '../../blocks/range-slider/range-slider';
import '../../blocks/check-box_btn/check-box';
import '../../blocks/carousel/carousel';
import '../../blocks/pagination/pagination';
import '../../blocks/star-rating/star-rating';

function showSettings() {
  $(this).siblings('.search__settings').toggle(300);
}

$('.search__btn').on('click', showSettings);
