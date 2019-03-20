var play = ["The air in the Earth's atmosphere is approximately made up of how many oxygen?",
 "What is the instrument used to measure wind speed called?",
 "Clouds that look like fog that does not reach the ground.",
 "These clouds look like small rounded puffs that appear in long rows.",
 "These are thunderstorm clouds.",
 "",
 "",
 "",
 "",
 "",
 ];

 	function question(){

 		document.getElementById('quest').innerHTML = play[0]
 		document.getElementById('A').innerHTML = "34%"
 		document.getElementById('B').innerHTML = "52%"
 		document.getElementById('C').innerHTML = "21%"

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
 			document.getElementById('quest').innerHTML = play[1]
 			document.getElementById('A').innerHTML = "Anemometer"
 			document.getElementById('B').innerHTML = "Stratometer"
 			document.getElementById('C').innerHTML = "Tachometer"

 			document.getElementById('A').onclick = function(){
        document.getElementById('quest').innerHTML = play[2]
        document.getElementById('A').innerHTML = "Cumulus"
        document.getElementById('B').innerHTML = "Stratus"
        document.getElementById('C').innerHTML = "Cirrus"

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
          document.getElementById('quest').innerHTML = play[3]
          document.getElementById('A').innerHTML = "Cumulunimbus"
          document.getElementById('B').innerHTML = "Cirrocumulus"
          document.getElementById('C').innerHTML = "Altocumulus"

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
            document.getElementById('quest').innerHTML = play[4]
            document.getElementById('A').innerHTML = "Cumulunimbus"
            document.getElementById('B').innerHTML = "Altostratus"
            document.getElementById('C').innerHTML = "Stratocumulus"

            document.getElementById('A').onclick = function(){
              document.getElementById('quest').innerHTML = play[5]
              document.getElementById('A').innerHTML = ""
              document.getElementById('B').innerHTML = ""
              document.getElementById('C').innerHTML = ""
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
    