import "./range-slider.scss"
import "jquery"
import "jquery-ui/ui/widgets/slider"
import "jquery-ui/themes/base/slider.css"


$( function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 10000,
        values: [ 0, 10000 ],
        slide: function( event, ui ) {
          $( "#amount" ).val( ui.values[ 0 ] + "Р"   +"- "+ ui.values[ 1 ] + "Р");
        }
      });
      $( "#amount" ).val( + $( "#slider-range" ).slider( "values", 0 ) + "P"  +
        " - " + $( "#slider-range" ).slider( "values", 1 ) + "Р");
  } );