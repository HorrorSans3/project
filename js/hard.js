var cars = ["What color is the M in Mc Donalds?",
 "It is the chance of an event to occur.",
 "When a thunderstorm produces hail, it is called _____.",
 "How many schools of AICS are located in cebu?",
 "How many months are there in a year?",
 ];

	function question() {
		document.getElementById('quest').innerHTML = cars[0];
		var a = "yellow"
		var b = "red"
		var c = "blue"

		document.getElementById('A').innerHTML = a
		document.getElementById('B').innerHTML = b
		document.getElementById('C').innerHTML = c

		document.getElementById('A').onclick = function() {
			document.getElementById('quest').innerHTML = cars[1];
			document.getElementById('A').innerHTML = "Statistics"
			document.getElementById('B').innerHTML = "Probability"
			document.getElementById('C').innerHTML = "Your mother"
			document.getElementById('output').innerHTML = ""

			document.getElementById('A').onclick = function(){
				document.getElementById('output').innerHTML = "wrong"
			}
			document.getElementById('B').onclick = function(){
				document.getElementById('quest').innerHTML = cars[2];
				document.getElementById('A').innerHTML = "Hail"
				document.getElementById('B').innerHTML = "Hailstorm"
				document.getElementById('C').innerHTML = "Hailstone"
				document.getElementById('output').innerHTML = ""

				document.getElementById('A').onclick = function(){
					document.getElementById('output').innerHTML = "Nope"
				}
				document.getElementById('B').onclick = function(){
					document.getElementById('quest').innerHTML = cars[3];
					document.getElementById('A').innerHTML = "1"
					document.getElementById('B').innerHTML = "2"
					document.getElementById('C').innerHTML = "21"
					document.getElementById('output').innerHTML = ""

					document.getElementById('A').onclick = function(){
						document.getElementById('quest').innerHTML = cars[4]
						document.getElementById('A').innerHTML = "21"
						document.getElementById('B').innerHTML = "13"
						document.getElementById('C').innerHTML = "12"
						document.getElementById('output').innerHTML = ""

						document.getElementById('A').onclick = function(){
							document.getElementById('output').innerHTML = "Go to School"
						}
						document.getElementById('B').onclick = function(){
							document.getElementById('output').innerHTML = "dundundun nu uh!!"
						}
						document.getElementById('C').onclick = function(){
							document.getElementById('')
						}
					}
					document.getElementById('B').onclick = function(){
						document.getElementById('output').innerHTML = "Ask Miss Lou"
					}
					document.getElementById('C').onclick = function(){
						document.getElementById('output').innerHTML = "That's for OverAll"
					}
				}
				document.getElementById('C').onclick = function(){
					document.getElementById('output').innerHTML = "You are wrong"
				}
			}
			document.getElementById('C').onclick = function(){
				document.getElementById('output').innerHTML = "Obviously Wrong DumbAss"
			}

		}
		document.getElementById('B').onclick = function() {
			document.getElementById('output').innerHTML="Go outside more"
		}
		document.getElementById('C').onclick = function() {
			document.getElementById('output').innerHTML="Wrong"
			
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


    		 

    		