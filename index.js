var i = 0;

var len = document.querySelectorAll(".drum").length;
document.addEventListener("keypress",function(kBoard){
   clk(kBoard.key);
   animationkey(kBoard.key);
 }
);
while (i < len) {
   
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var switchring = this.innerHTML;
    clk(switchring);
    animationkey(switchring);
  });
  i++;
}
 
 
  function clk(switchring) {
   

    switch(switchring){
      case "w":
        var tom1 = new Audio("/sounds/tom-1.mp3");
        tom1.play();
        break;

      case "a":
          var tom1 = new Audio("/sounds/tom-2.mp3");
          tom1.play();
          break;


      case "s":
            var tom1 = new Audio("/sounds/tom-3.mp3");
            tom1.play();
            break;


      case "d":
              var tom1 = new Audio("/sounds/tom-4.mp3");
              tom1.play();
              break;

      case "j":
          var tom1 = new Audio("/sounds/snare.mp3");
          tom1.play(); 
          break;   

      case "k":
            var tom1 = new Audio("/sounds/crash.mp3");
            tom1.play();
            break;

      case "l":
              var tom1 = new Audio("/sounds/kick-bass.mp3");
              tom1.play();
              break;
      default:
        break;
    }
  }
  

  function animationkey(currentKey){
    document.querySelector("."+ currentKey).classList.add("pressed");
    setTimeout(function(){document.querySelector("."+ currentKey).classList.remove("pressed");
  },100);
    }

   
  



