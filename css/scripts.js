$(function () {
    // ready function
    $('.carousel').carousel({ interval: 2000 }); // make the interval between the carousel go to 2000 miliseconds
    $('#carouselButton').click(function () {
      // function --> carousel Button
      if ($('#carouselButton').children('i').hasClass('fa-pause')) {
        //IF carouselButton has fa-pause class
        $('.carousel').carousel('pause'); // THEN PAUSE THE CAROUSEL
        $('#carouselButton').children('i').removeClass('fa-pause'); // ALSO REMOVE THE FA PAUSE CLASS
        $('#carouselButton').children('i').addClass('fa-play'); // ALSO ADD THE FA PLAY CLASS
      } else {
        // IF carouselButton is NOT fa-pause class
        $('.carousel').carousel('cycle'); // let the carousel cycle
        $('#carouselButton').children('i').removeClass('fa-play'); // remove fa-play class
        $('#carouselButton').children('i').addClass('fa-pause'); // add the fa-pause class
      }
    });
    $('#reserveButton').click(function () {
      $('#reserveModal').modal('show')
    });
    $("#loginButton").click(function() {
        $("#loginModal").modal("show")
    });
  });
    
    
    