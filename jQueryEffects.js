
	$(document).ready(function(){
  $("input[name=submit]").click(function(){
  	var s = $("input[name=input]").val().text();
  	var line = $(".line");
    var line2 = $(".line2");
    var line3 = $(".line3");
    var shownav1 = $(".nav1").show(1000);
	var shownav2 = $(".nav2").show(1000);
	var hidenav1 = $(".nav1").hide(1000);
	var hidenav2 = $(".nav2").hide(1000);
    console.log(s);
    alert(s);


    if (s=='show') {
    	
			shownav1;
			shownav2;    
		  
		  /*  line.show();
			line2.show();
			line3.show();

			line.animate({right: '600px'},"slow");
		    line2.animate({right: '610px'},"slow");
		    line3.animate({right: '600px'},"slow");

		    line.animate({right: '655px'},"slow");
		    line2.animate({right: '650px'},"slow");
		    line3.animate({right: '655px'},"slow");*/
		}

	else if (s=='hide') {
				hidenav1;
				hidenav2;
			    
			  
			/*    line.hide();
				line2.hide();
				line3.hide();

				line.animate({right: '600px'},"slow");
			    line2.animate({right: '610px'},"slow");
			    line3.animate({right: '600px'},"slow");

			    line.animate({right: '655px'},"slow");
			    line2.animate({right: '650px'},"slow");
			    line3.animate({right: '655px'},"slow");*/
	}

	else {alert("No other values are accepted");}

  /*	switch(s){
  		case 'show':
	  		shownav1;
	  		shownav2;
		    
		  
		    line.show();
			line2.show();
			line3.show();

			line.animate({right: '600px'},"slow");
		    line2.animate({right: '610px'},"slow");
		    line3.animate({right: '600px'},"slow");

		    line.animate({right: '655px'},"slow");
		    line2.animate({right: '650px'},"slow");
		    line3.animate({right: '655px'},"slow");
			break;
		  	
	  	case 'hide':
	  			hidenav1;
	  			hidenav2;
			  
			    line.hide();
				line2.hide();
				line3.hide();

				line.animate({right: '600px'},"slow");
			    line2.animate({right: '610px'},"slow");
			    line3.animate({right: '600px'},"slow");

			    line.animate({right: '655px'},"slow");
			    line2.animate({right: '650px'},"slow");
			    line3.animate({right: '655px'},"slow");
			    break;
  		default:alert("No other values are accepted")


  	}*/

  });
});
	
	
