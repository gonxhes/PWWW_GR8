
      $(document).ready(function(){
        $('button').click(function(){
          const rated = $('#rate').val()
          switch(rated){
            case '1':
          $('#hidden').slideToggle().html("<p>You rated our game with " + rated);
          break;
           case '2':
          $('#hidden').slideToggle().html("<p>You rated our game with " + rated);
           break;
           case '3':
          $('#hidden').slideToggle().html("<p>You rated our game with " + rated);
           break;
           case '4':
          $('#hidden').slideToggle().html("<p>You rated our game with " + rated);
           break;
           case '5':
          $('#hidden').slideToggle().html("<p>You rated our game with " + rated);
          break;
           case '6':
          $('#hidden').slideToggle().html("<p>You rated our game with " + rated);
          break;
           case '7':
          $('#hidden').slideToggle().html("<p>You rated our game with " + rated);
           break;
           case '8':
          $('#hidden').slideToggle().html("<p>You rated our game with " + rated);
           break;
           case '9':
          $('#hidden').slideToggle().html("<p>You rated our game with " + rated);
           break;
           case '10':
          $('#hidden').slideToggle().html("<p>You rated our game with " + rated);
          break;
          default: $('#hidden').html("Rate properly please!");
          break;
        }
        });
       });
