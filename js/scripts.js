$(function(){

  var calendarRender = [];

  $("#scheduler form").submit(function(event){
    var userName = $("#user-name").val();
    var userDesc = $("#user-desc").val();
    var userDate = $("#user-date").val();
    var userTime = $("#user-time").val();

    $('#confirmation h1').text(userName + "!");
    $('#confirmation p').text(userDesc);
    $('#confirmation h2').text(userDate);
    $('#confirmation h3').text(userTime);
    event.preventDefault();
  });
});
