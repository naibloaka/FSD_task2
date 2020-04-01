import './calendar.scss'

         

/*if (!$.fn.datepicker) {
    require('jquery-ui/ui/widgets/datepicker');
    require('jquery-ui/themes/base/datepicker.css');
  }

  $( function() {
    var dateFormat = "mm/dd/yy",
      from = $( "#from" )
        .datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          numberOfMonths: 1
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( "#to" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });
 
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
 
      return date;
    }
  } );
*/

import "air-datepicker"
import "./../../../node_modules/air-datepicker/dist/css/datepicker.min.css"



$('#calendar_from').datepicker({ 
  onSelect: function (fd, d, picker) { 
    $("#calendar_from").val(fd.split("-")[0]);
    $("#calendar_to").val(fd.split("-")[1]);
  },
  range:true,
  prevHtml: '<i class="fas fa-arrow-left"></i>',
  nextHtml: '<i class="fas fa-arrow-right"></i>',
  avTitles: {
    days: 'MMyyyy'
  },
  startDate: new Date(),
  
});

