
var play = ["What is the hottest planet?",
 "Which planet is the windiest?",
 "How many moons does Jupiter have?",
 "How long is one day in Venus?",
 "What happens to your ffet in space?",
 "Is a celestal body mostly made of ice, and some dust and rocks.",
 "",
 "",
 "",
 "",
 ];

 	function question() {

    var z = "Wrong"
    var lives = 3;
 		document.getElementById('quest').innerHTML = play[0]
 		document.getElementById('A').innerHTML = "Mercury"
 		document.getElementById('B').innerHTML = "Venus"
 		document.getElementById('C').innerHTML = "Earth"

 		document.getElementById('A').onclick = function() {
 			lives -= 1;
      if ((lives)==2){
        alert(z + ", 2 lives left")
        document.getElementById('heart3').style.visibility = "hidden"
      }
      else if ((lives)==1){
        alert(z + ", 1 life left")
        document.getElementById('heart2').style.visibility = "hidden"
      }
      else if ((lives)==0){
        window.location.replace('gameover.html')
      }
 		}
 		document.getElementById('B').onclick = function() {
 			document.getElementById('quest').innerHTML = play[1]
 			document.getElementById('A').innerHTML = "Venus"
 			document.getElementById('B').innerHTML = "Jupiter"
 			document.getElementById('C').innerHTML = "Neptune"

 			document.getElementById('A').onclick = function() {
 				lives -= 1;
        if ((lives)==2){
          alert(z + ", 2 lives left")
          document.getElementById('heart3').style.visibility = "hidden"
        }
        else if ((lives)==1){
          alert(z + ", 1 life left")
          document.getElementById('heart2').style.visibility = "hidden"
        }
        else if ((lives)==0){
          window.location.replace('gameover.html')
        }
 			}
 			document.getElementById('B').onclick = function() {
 				lives -= 1;
        if ((lives)==2){
          alert(z + ", 2 lives left")
          document.getElementById('heart3').style.visibility = "hidden"
        }
        else if ((lives)==1){
          alert(z + ", 1 life left")
          document.getElementById('heart2').style.visibility = "hidden"
        }
        else if ((lives)==0){
          window.location.replace('gameover.html')
        }
 			}
 			document.getElementById('C').onclick = function() {
 				document.getElementById('quest').innerHTML = play[2]
 				document.getElementById('A').innerHTML = "42"
 				document.getElementById('B').innerHTML = "67"
 				document.getElementById('C').innerHTML = "63"

 				document.getElementById('A').onclick = function() {
 					lives -= 1;
          if ((lives)==2){
            alert(z + ", 2 lives left")
            document.getElementById('heart3').style.visibility = "hidden"
          }
          else if ((lives)==1){
            alert(z + ", 1 life left")
            document.getElementById('heart2').style.visibility = "hidden"
          }
          else if ((lives)==0){
            window.location.replace('gameover.html')
          }
 				}
 				document.getElementById('B').onclick = function() {
 					document.getElementById('quest').innerHTML = play[3]
          document.getElementById('A').innerHTML = "243 Earth days"
          document.getElementById('B').innerHTML = "0.80 Earth days"
          document.getElementById('C').innerHTML = "11 Earth days"

          document.getElementById('A').onclick = function(){
            document.getElementById('quest').innerHTML = play[4]
            document.getElementById('A').innerHTML = "The skin peels off"
            document.getElementById('B').innerHTML = "Your feet enlarges"
            document.getElementById('C').innerHTML = "Your bones will crack"

            document.getElementById('A').onclick = function(){
                document.getElementById('quest').innerHTML = play[5]
                document.getElementById('A').innerHTML = "Asteroid"
                document.getElementById('B').innerHTML = "Planet"
                document.getElementById('C').innerHTML = "Comet"

                document.getElementById('A').onclick = function(){
                  lives -= 1;
                  if ((lives)==2){
                    alert(z + ", 2 lives left")
                    document.getElementById('heart3').style.visibility = "hidden"
                  }
                  else if ((lives)==1){
                    alert(z + ", 1 life left")
                    document.getElementById('heart2').style.visibility = "hidden"
                  }
                  else if ((lives)==0){
                    window.location.replace('gameover.html')
                  }
                }
                document.getElementById('B').onclick = function(){
                  lives -= 1;
                  if ((lives)==2){
                    alert(z + ", 2 lives left")
                    document.getElementById('heart3').style.visibility = "hidden"
                  }
                  else if ((lives)==1){
                    alert(z + ", 1 life left")
                    document.getElementById('heart2').style.visibility = "hidden"
                  }
                  else if ((lives)==0){
                    window.location.replace('gameover.html')
                  }
                }
                document.getElementById('C').onclick = function(){
                  document.getElementById('quest').innerHTML = play[6]
                  document.getElementById('A').innerHTML = ""
                  document.getElementById('B').innerHTML = ""
                  document.getElementById('C').innerHTML = ""
                }
            }
            document.getElementById('B').onclick = function(){
              lives -= 1;
              if ((lives)==2){
                alert(z + ", 2 lives left")
                document.getElementById('heart3').style.visibility = "hidden"
              }
              else if ((lives)==1){
                alert(z + ", 1 life left")
                document.getElementById('heart2').style.visibility = "hidden"
              }
              else if ((lives)==0){
                window.location.replace('gameover.html')
              }
            }
            document.getElementById('C').onclick = function(){
              lives -= 1;
              if ((lives)==2){
                alert(z + ", 2 lives left")
                document.getElementById('heart3').style.visibility = "hidden"
              }
              else if ((lives)==1){
                alert(z + ", 1 life left")
                document.getElementById('heart2').style.visibility = "hidden"
              }
              else if ((lives)==0){
                window.location.replace('gameover.html')
              }
            }
          }
          document.getElementById('B').onclick = function(){
            lives -= 1;
            if ((lives)==2){
              alert(z + ", 2 lives left")
              document.getElementById('heart3').style.visibility = "hidden"
            }
            else if ((lives)==1){
              alert(z + ", 1 life left")
              document.getElementById('heart2').style.visibility = "hidden"
            }
            else if ((lives)==0){
              window.location.replace('gameover.html')
            }
          }
          document.getElementById('C').onclick = function(){
            lives -= 1;
            if ((lives)==2){
              alert(z + ", 2 lives left")
              document.getElementById('heart3').style.visibility = "hidden"
            }
            else if ((lives)==1){
              alert(z + ", 1 life left")
              document.getElementById('heart2').style.visibility = "hidden"
            }
            else if ((lives)==0){
              window.location.replace('gameover.html')
            }
          }
 				}
 				document.getElementById('C').onclick = function() {
 					lives -= 1;
          if ((lives)==2){
            alert(z + ", 2 lives left")
            document.getElementById('heart3').style.visibility = "hidden"
          }
          else if ((lives)==1){
            alert(z + ", 1 life left")
            document.getElementById('heart2').style.visibility = "hidden"
          }
          else if ((lives)==0){
            window.location.replace('gameover.html')
          }
 				}
 			}
 			
 		}
 		document.getElementById('C').onclick = function() {
 			lives -= 1;
      if ((lives)==2){
        alert(z + ", 2 lives left")
        document.getElementById('heart3').style.visibility = "hidden"
      }
      else if ((lives)==1){
        alert(z + ", 1 life left")
        document.getElementById('heart2').style.visibility = "hidden"
      }
      else if ((lives)==0){
        window.location.replace('gameover.html')
      }
 			
 		}

				
		


		var timeleft = 60;
    var downloadTimer = setInterval(function(){
      document.getElementById("time").innerHTML = timeleft ;
      timeleft -= 1;
      if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("time").innerHTML = "End"
      window.location.replace('../html/gameover.html')
      }
    }, 1000);
	}

    		 

function home(){
  window.location.replace('../html/second.html')
}
    