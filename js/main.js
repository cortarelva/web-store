
    /*open and close side navbar*/
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

    
    /*function for dropdown*/
    function showDrop(){
      document.getElementById("dropdown-list").style.display.show;
    }

   