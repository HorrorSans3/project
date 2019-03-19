var play = ["The air in the Earth's atmosphere is approximately made up of how many oxygen?",
 "What is the instrument used to measure wind speed called?",
 "How many moons does Jupiter have?",
 "Which is not a part of the major types of volcanoes?",
 "",
 ];

 	function question(){

 		document.getElementById('quest').innerHTML = play[0]
 		document.getElementById('A').innerHTML = "34%"
 		document.getElementById('B').innerHTML = "52%"
 		document.getElementById('C').innerHTML = "21%"

 		document.getElementById('A').onclick = function(){
 			document.getElementById('output').innerHTML = "Wrong"
 		}
 		document.getElementById('B').onclick = function(){
 			document.getElementById('output').innerHTML = "Poisonuous amount!!"
 		}
 		document.getElementById('C').onclick = function(){
 			document.getElementById('quest').innerHTML = play[1]
 			document.getElementById('A').innerHTML = "Anemometer"
 			document.getElementById('B').innerHTML = "Stratometer"
 			document.getElementById('C').innerHTML = "Tachometer"

 			document.getElementById('A').onclick = function(){

 			}
 			document.getElementById('B').onclick = function(){
 				
 			}
 			document.getElementById('C').onclick = function(){
 				
 			}
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
    