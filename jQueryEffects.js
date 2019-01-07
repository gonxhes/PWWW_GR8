$(document).ready(function() {
  $(".nav1").on('mouseenter', function() {
    $(this).hide(800, function() {
      $('.nav1').show(600);

  });

      $(".nav1").click(function(){
    $("svg, .line, .line2, .line3").slideToggle("slow").fadeToggle();
  });
  });

    
  });

	

