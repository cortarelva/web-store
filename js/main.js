
    /*open and close side navbar*/
    function openNav(){
      document.getElementById("side-nav").style.width = "250px";
      document.getElementById("menubutton").style.display = "none";
    }
  
    function closeNav(){
      document.getElementById("side-nav").style.width = "0"; 
      document.getElementById("menubutton").style.display = "block";
    }
    function growButton(){
      document.getElementById("menubutton").style.font.size = "50px";
    }

    
   $(document).ready(function(){
     var l = $('.img-slider .img-slide .pic').length;
     var w = $('.img-slider .img-slide .pic').innerWidth();
     var final = l*w;
     $('.img-slider .img-slide').css('width', final);
   })
   









    

   