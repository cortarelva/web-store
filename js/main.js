

  function openNav(){
    document.getElementById("side-nav").style.width = "250px";
    document.getElementById("menubutton").style.color = "transparent";
    }
  
    function closeNav(){
    document.getElementById("side-nav").style.width = "0"; 
    document.getElementById("menubutton").style.color = "black";
    }
    function growButton(){
      document.getElementById("menubutton").style.font.size = "50px";
    }


    $(document).ready(function(){
      var l = $('.img-slider .img-slide .list').length;
      var w = $('.img-slider .img-slide .list').innerWidth();
      var final = l*w;
      $('.img-slider .img-slide').css('width', final);
    })