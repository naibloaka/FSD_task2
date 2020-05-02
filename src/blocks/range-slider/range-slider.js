import "./range-slider.scss"
import "jquery"
import "jquery-ui/ui/widgets/slider"
import "jquery-ui/themes/base/slider.css"

function space_maker(mas) {
  var thousnds = Math.round(mas[0]/1000);
  var sotni = mas[0] - Math.round(mas[0]/1000);
  
  mas[0] = String(thousnds) + " " + String(sotni);
  return mas[0];
}
$( function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 15000,
        values: [ 0, 15000],
        
        slide: function( event, ui ) {
          $( "#amount" ).val( ui.values[ 0 ] + "₽"   +" - "+ ui.values[ 1 ] + "₽");
        }
      });
      $( "#amount" ).val( + $( "#slider-range" ).slider( "values", 0 ) + "₽"  +
        "     -     " + $( "#slider-range" ).slider( "values", 1 ) + "₽");
  } );