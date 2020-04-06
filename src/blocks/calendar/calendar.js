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



function Createbut(){
  var element = document.getElementById("button-place");
  var btn = document.createElement('button');
  btn.id = "buttonSave";

  $(document).ready(function() {
    $("#buttonSave").click(function(){
        alert("Hello World!");
    })
  })
  btn.innerHTML = "Button";
  element.appendChild(btn);
};

$('#calendar_from').datepicker({ 
  onSelect: function (fd, d, picker) { 
    $("#calendar_from").val(fd.split("-")[0]);
    $("#calendar_to").val(fd.split("-")[1]);
  },
  range:true,
  prevHtml: '<i class="fas fa-arrow-left"></i>',
  nextHtml: '<i class="fas fa-arrow-right"></i>',
  navTitles: {
    days: 'MM yyyy'
  },
  Acceptbut: function(){
    var datepicker_container = document.getElementById("datepickers-container");
    var btn = document.createElement('button');
    btn.id = "Accept_but";
    btn.innerHTML = "Button";
    datepicker_container.appendChild(btn);
  },
  
  clearButton: true,
});

  
/*
today: function () {
  this.silent = true;
  this.view = this.opts.minView;
  this.silent = false;
  this.date = new Date();

  if (this.opts.todayButton instanceof Date) {
      this.selectDate(this.opts.todayButton)
  }
},

clear: function () {
  this.selectedDates = [];
  this.minRange = '';
  thView]._render();
  this._setInputVis.maxRange = '';
  this.views[this.currentalue();
  if (this.opts.onSelect) {
      this._triggerOnChange()
  }
},*/



