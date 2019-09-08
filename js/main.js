
    
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
    
//-----------------------------------------------------------------------------------------------

  //Function to validate newsletter email submission on home page

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
//-------------------------------------------------------------------------------------------
   
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
      
//------------------------------------------------------------------------------------------------

//functions for product gallery image switching and to switch popup image
$(function(){
  $('#gallery-item-1').on('click',() =>{
      $('#change-img').attr('src','../pictures/training-gray.jpg')
      $('#change-popup').attr('href','../pictures/training-gray.jpg')
  });
});
$(function(){
  $('#gallery-item-2').on('click',() =>{
      $('#change-img').attr('src','../pictures/training-white.jpg')
      $('#change-popup').attr('href','../pictures/training-white.jpg')
  });
});
$(function(){
  $('#gallery-item-3').on('click',() =>{
      $('#change-img').attr('src','../pictures/training-long-sleeve.jpg')
      $('#change-popup').attr('href','../pictures/training-long-sleeve.jpg')
  });
});
$(function(){
  $('#gallery-item-4').on('click',() =>{
      $('#change-img').attr('src','../pictures/training-green.jpg')
      $('#change-popup').attr('href','../pictures/training-green.jpg')
  });
});
$(function(){
  $('#gallery-item-5').on('click',() =>{
      $('#change-img').attr('src','../pictures/training-to-fight-the-mountain.jpg')
      $('#change-popup').attr('href','../pictures/training-to-fight-the-mountain.jpg')
  });
});


//--------------------------------------------------------------------------------------------------


//shipping form validator
$(function(){
	$("form[name = 'shippinginfo']").validate({
		rules:{
			shippingmethod:"required",
			firstname:"required",
			lastname:"required",
			addressline1:"required",
			city:"required",
			postalcode:"required",
			phone:{required: true, minlength: 9},
			email:{required: true, email: true},  
			paymethod:"required"
		},
		messages:{
      shippingmethod:"Please select a delivery method",
			firstname:"Please enter your first name",
			lastname:"Please enter your last name",
			adressline1:"Please enter your address",
			city:"Please enter your city",
			postalcode:"Please enter your postal code",
			email:"Please enter a valid email address",
			phone:{
				required:"Please provide a phone number",
				minlength:"Number must be at least 9 digits long"
      }, 
      paymethod:"Please select payment method"
    },

		 submitHandler: function(form){
      form.submit();  
		}
	});
})

// function to submit form
  const submitForm = () => {
    document.form["shippinginfo"].submit();
    return true;
  } 

    

//--------------------------------------------------------------------------------------------

 //function to enable lightbox (image to pop is changed in the image switch function )
 $(function() {
  $('#change-img').magnificPopup({type:'image'});
 });
 

