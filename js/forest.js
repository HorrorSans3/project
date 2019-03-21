
var play = ["What causes the most forest loss?",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 ];

	function question()
	{
		var z = "Wrong"
		var lives = 3;
		document.getElementById('quest').innerHTML = play[0]
		document.getElementById('A').innerHTML = "Natural Disasters"
		document.getElementById('B').innerHTML = "Human Activities"
		document.getElementById('C').innerHTML = "Animal Activities"

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
			document.getElementById('')
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
    
    		