import './number-block.scss'

import 'owl.carousel'
import './../../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css'
import './../../../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css'

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        nav : true, // для стрелок
        pagination : true, // для пагинации
        loop : true,  //прокрутка по кругу
        dots : true
    });
});

