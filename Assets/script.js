// Date Display
var todaysDate = dayjs();
$('#todaysDate').text(todaysDate.format('dddd, MMMM D'));

//make function availble after load//
$(document).ready(function() {

//clicking save button//
  var saveBtn = $('.savBtn');
  saveBtn.on('click', function () {

  //get values written//
  var textEnter = $(this).siblings('.description').val();

  //id of hour-x//
  var time =$(this).parent().attr('id');

  //set var into local//
  localStorage.setitem(time, textEnter);
});


function getTime() {
  //current-24hr clock//
  var currentHour = dayjs().hour();
  console.log(currentHour)

  $('.time-block').each(function () {
  var myHour = parseInt($(this).attr("id").split("-")[1]);

  if (currentHour > myHour) {
    //add past
    $(this).addClass('past');
  } else if (currentHour === myHour) {
    //add present
    $(this).removeClass('past');
    $(this).addClass('present');
  } else {
    //add future
    $(this).removeClass('past');
    $(this).removeClass('present');
    $(this).addClass('future');
  }
  })
}

//create GET to select local storage inputs and transfer to page 

$('#hour-9.description').var(localStorage.getItem('hour-9'));

//testing calling the function
getTime();
});



 