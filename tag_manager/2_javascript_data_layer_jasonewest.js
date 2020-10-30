<!-- Customer Experience Digital Data Layer (ceddl)-->

// Function to clear any previous data layer call and create data layer JSON object
// based on source: https://www.bounteous.com/insights/2017/06/22/developers-guide-implementing-data-layer/
var ceddl = window.ceddl = window.ceddl || [];

// Function to get today's date and provide format option
// based on source: https://www.w3resource.com/javascript-exercises/javascript-date-exercise-2.php

var curday = function(sp){
  today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //As January is 0.
  var yyyy = today.getFullYear();

  if(dd<10) dd='0'+dd;
  if(mm<10) mm='0'+mm;
  return (mm+sp+dd+sp+yyyy);
};

//Begin JSON data layer generation
ceddl.push({
  key: 'test',
  date_visit: curday('|'),
  url: window.location.href
});

<!-- End Customer Experience Digital Data Layer (ceddl) -->

