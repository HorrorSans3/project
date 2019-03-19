
var play = ["What is the hottest planet?",
 "Which planet is the windiest?",
 "How many moons does Jupiter have?",
 "Which is not a part of the major types of volcanoes?",
 "",
 ];

 	function question() {

 		document.getElementById('quest').innerHTML = play[0]
 		document.getElementById('A').innerHTML = "Mercury"
 		document.getElementById('B').innerHTML = "Venus"
 		document.getElementById('C').innerHTML = "Earth"

 		document.getElementById('A').onclick = function() {
 			document.getElementById('output').innerHTML = "Unexpectedly Wrong"
 		}
 		document.getElementById('B').onclick = function() {
 			document.getElementById('quest').innerHTML = play[1]
 			document.getElementById('A').innerHTML = "Venus"
 			document.getElementById('B').innerHTML = "Jupiter"
 			document.getElementById('C').innerHTML = "Neptune"

 			document.getElementById('A').onclick = function() {
 				document.getElementById('output').innerHTML = "Not"
 			}
 			document.getElementById('B').onclick = function() {
 				document.getElementById('output').innerHTML = "Yes it is not the Answer "
 			}
 			document.getElementById('C').onclick = function() {
 				document.getElementById('quest').innerHTML = play[2]
 				document.getElementById('A').innerHTML = "42"
 				document.getElementById('B').innerHTML = "67"
 				document.getElementById('C').innerHTML = "63"

 				document.getElementById('A').onclick = function() {
 					document.getElementById('output').innerHTML = "you are Wrong"
 				}
 				document.getElementById('B').onclick = function() {
 					
 				}
 				document.getElementById('C').onclick = function() {
 					
 				}
 			}
 			
 		}
 		document.getElementById('C').onclick = function() {
 			document.getElementById('output').innerHTML = "Fortunately Not"
 			
 		}

				
		


		var tim = 17;
		var timer = setInterval(function(){
  			document.getElementById("time").value = 17 - tim;
  			tim -= 1;
  			if(tim <= 0){
    		window.location.replace('gameover.html');
    		clearInterval(timer);
    	}
		}, 1000);
	}

    		 

function home(){
  window.location.replace('../html/second.html')
}
    