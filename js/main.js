
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
    






    
    /*open and close side navbar*/
    /*function openNav(){
      document.getElementById("side-nav").style.width = "250px";
      document.getElementById("menubutton").style.display = "none";
    }
  
    function closeNav(){
      document.getElementById("side-nav").style.width = "0"; 
      document.getElementById("menubutton").style.display = "block";
    }*/
    
    




   









    

   