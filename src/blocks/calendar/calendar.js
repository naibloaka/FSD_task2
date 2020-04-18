import './calendar.scss'
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
  minDate: new Date(),
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



$("#number-page__datepicker").datepicker({
  range:true,
  prevHtml: '<i class="fas fa-arrow-left"></i>',
  nextHtml: '<i class="fas fa-arrow-right"></i>',
  dateFormat: 'd M',
  minDate: new Date(),
  navTitles: {
    days: 'MM yyyy'
  },
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



