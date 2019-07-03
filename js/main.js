
    
    // Function for opening and closing the navbar
    $(document).ready(function(){
      var counter = 0;
       var nav = $('#side-nav');
       var disp = $('#menubutton');
       
       $('#menubutton').click(function(){
         nav.css('width', '250px');
         disp.css('display','none');
         counter = 1;
         
       
       if(counter == 1){
         $('a').click(function(){
           nav.css('width', '0px');
           disp.css('display','block');
           counter = 0 ;
           });     
          }

          nav.on('mouseleave',function(){
            nav.css('width','0px');
            disp.css('display','block');
            counter = 0;
          })
       });
     })
    


     //Function to validate email

     $('#emailInput').click(function(e){
      e.preventDefault();
     });

     
     $(function(){
	     
      $('#email-form').on('submit', () =>{
        
        let hasError = false;
        let emailaddressVal = $('#emailInput').val();
        const emailReg = /^[\w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
        
        if(emailaddressVal == ''){
          $('.email-modal p').text('Please enter your email');
          $(".email-modal").css("display", "block");
          hasError = true;
        }
        else if(!emailReg.test(emailaddressVal)){
          $('.email-modal p').text('Please enter a valid email');
		    	$(".email-modal").css("display", "block");
          hasError = true;
        }
        else {
          $('.email-modal p').text('Subscribed. Thank You.');
          $(".email-modal").css("display", "block");
          hasError = true;
        }
         
        if(hasError == true){ 
          return false; }	
      });

      //Close the modal and clear input field
      $(".email-modal-close").on("click", () => {
	      $(".email-modal").css("display", "none");
	      $('#emailInput').val('');
    });
   });



    //funtction to enable lookbook popup
      $(function() {
          let pic = $('.pic');
          let bool = false;

        $(pic).on('click', () =>{
          $(this).magnificPopup({
            type:'image',
            closeOnBgClick:true,
            closeOnContentClick:true,
            enableEscapeKey:true
        });
      });

       $('.next').click(function(e){
         e.preventDefault();
       })

      $(function(){
          var next = $('.next');
          var slide = $('.img-slide');

          $(next).on('click', () =>{
            for(var i = 4; i < slide.length; ++i){
              $(slide[i].removeClass('active'));
              $(slide[i+1].addClass('active'));
            }
          })


      })










    
    /*open and close side navbar*/
    /*function openNav(){
      document.getElementById("side-nav").style.width = "250px";
      document.getElementById("menubutton").style.display = "none";
    }
  
    function closeNav(){
      document.getElementById("side-nav").style.width = "0"; 
      document.getElementById("menubutton").style.display = "block";
    }*/
    
    




   









    

   