
var play = ["What is the frozen water part of the Earth called?",
 "Which is denser, water or ice?",
 "What is dry ice made of?",
 "How fast does fall snow?",
 "Where is the Snowiest city on Earth?",
 "For snowman-building, which type of ice is better to use?",
 "Deposits of ice crystals on objects exposed to air",
 "Which is not a type of frost?",
 "",
 "",
 ];

	function question()
	{
		var z = "Wrong"
		var lives = 3;
		document.getElementById('quest').innerHTML = play[0]
		document.getElementById('A').innerHTML = "Gyrosphere";
		document.getElementById('B').innerHTML = "Hydrosphere";
		document.getElementById('C').innerHTML = "Cryosphere";

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
			document.getElementById('quest').innerHTML = play[1]
			document.getElementById('A').innerHTML = "Water"
			document.getElementById('B').innerHTML = "Ice"
			document.getElementById('C').innerHTML = "Same density"
			

			document.getElementById('A').onclick = function() {
				document.getElementById('quest').innerHTML = play[2]
				document.getElementById('A').innerHTML = "Water";
				document.getElementById('B').innerHTML = "Nitrogen";
				document.getElementById('C').innerHTML = "Carbon Dioxide";

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
					document.getElementById('quest').innerHTML = play[3]
					document.getElementById('A').innerHTML = "2 - 3 ft. per second"
					document.getElementById('B').innerHTML = "1 - 6 ft. per second"
					document.getElementById('C').innerHTML = "1-12 inches per second"

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
						document.getElementById('quest').innerHTML = play[4]
						document.getElementById('A').innerHTML = "Alaska"
						document.getElementById('B').innerHTML = "Japan"
						document.getElementById('C').innerHTML = "Russia"

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
							document.getElementById('quest').innerHTML = play[5]
							document.getElementById('A').innerHTML = "Dry Ice"
							document.getElementById('B').innerHTML = "Compact Ice"
							document.getElementById('C').innerHTML = "Wet Ice"

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
								document.getElementById('A').innerHTML = "Frosting"
								document.getElementById('B').innerHTML = "Hoarfrost"
								document.getElementById('C').innerHTML = "Glacial Air"

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
									document.getElementById('quest').innerHTML = play[7]
									document.getElementById('A').innerHTML = "Icy"
									document.getElementById('B').innerHTML = "Advection"
									document.getElementById('C').innerHTML = "Window"
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
    
    		