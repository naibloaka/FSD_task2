/*
if (!$.fn.datepicker) {
    require('jquery-ui/ui/widgets/datepicker');
    require('jquery-ui/themes/base/datepicker.css');
  }
import "./../../../node_modules/datepicker.extention/datepicker.extension.min";
  $( function() {
    
    var dateFormat = "mm/dd/yy",
      from = $( ".in" ).datepicker({
          defaultDate: null,
          changeMonth: true,
          numberOfMonths: 1
          
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( ".out" ).datepicker({
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