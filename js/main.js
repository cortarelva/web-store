
    
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
          });
       });
     });
    


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

   
   
   

    

//function for slick slider    
 $(function(){
  $('.slider-container').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
       breakpoint: 400,
       settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
  });   
      

//functions for product gallery image switching
$(function(){
  $('#gallery-item-1').on('click',() =>{
      $('#change-img').attr('src','../pictures/training-gray.jpg')
  });
});
$(function(){
  $('#gallery-item-2').on('click',() =>{
      $('#change-img').attr('src','../pictures/training-white.jpg')
  });
});
$(function(){
  $('#gallery-item-3').on('click',() =>{
      $('#change-img').attr('src','../pictures/training-long-sleeve.jpg')
  });
});
$(function(){
  $('#gallery-item-4').on('click',() =>{
      $('#change-img').attr('src','../pictures/training-green.jpg')
  });
});
$(function(){
  $('#gallery-item-5').on('click',() =>{
      $('#change-img').attr('src','../pictures/training-to-fight-the-mountain.jpg')
  });
});


 //function to enable lookbook popup
 