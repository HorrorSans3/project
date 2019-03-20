
var play = ["How wide is the danger zone of a volcano?",
 "The mouth of the volcano is called _____.",
 "Molten rock inside a volcano is called _____.",
 "Which is not a part of the major types of volcanoes?",
 "Where is the tallest volcano every discorvered located?",
 "Known as Volcanic Glass.",
 "A very common Volcanic rock with low silica content.",
 "Known as resistance to flow",
 "An active volcano that is not erupting but is supposed to erupt again.",
 "Which is not a type of volcanic eruption?",
 ];


	function question() {
		document.getElementById('quest').innerHTML = play[0];
		var a = "30 miles in radius"
		var b = "20 miles in radius"
		var c = "10 miles in radius"
		var z = "Wrong"
		var lives = 3;
		

		document.getElementById('A').innerHTML = a
		document.getElementById('B').innerHTML = b
		document.getElementById('C').innerHTML = c

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
			document.getElementById('A').innerHTML = "Vent"
			document.getElementById('B').innerHTML = "Crater"
			document.getElementById('C').innerHTML = "Sill"

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
				document.getElementById('quest').innerHTML = play[2]
				document.getElementById('A').innerHTML = "Sill"
				document.getElementById('B').innerHTML = "Lava"
				document.getElementById('C').innerHTML = "Magma"

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
					document.getElementById('A').innerHTML = "Concave Volcano"
					document.getElementById('B').innerHTML = "Shield Volcano"
					document.getElementById('C').innerHTML = "Composite Volcano"

					document.getElementById('A').onclick = function() {
						document.getElementById('quest').innerHTML = play[4]
						document.getElementById('A').innerHTML = "Mars"
						document.getElementById('B').innerHTML = "Japan"
						document.getElementById('C').innerHTML = "Mercury"

						document.getElementById('A').onclick = function() {
							document.getElementById('quest'). innerHTML = play[5]
							document.getElementById('A').innerHTML = "Tuff"
							document.getElementById('B').innerHTML = "Obsidian"
							document.getElementById('C').innerHTML = "Basalt"

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
								document.getElementById('quest'). innerHTML = play[6]
								document.getElementById('A').innerHTML = "Basalt"
								document.getElementById('B').innerHTML = "Pumice"
								document.getElementById('C').innerHTML = "Tuff"

								document.getElementById('A').onclick = function() {
									document.getElementById('quest'). innerHTML = play[7]
									document.getElementById('A').innerHTML = "Flow"
									document.getElementById('B').innerHTML = "Solidity"
									document.getElementById('C').innerHTML = "Viscosity"

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
										document.getElementById('quest'). innerHTML = play[8]
										document.getElementById('A').innerHTML = "Extinct Volcano"
										document.getElementById('B').innerHTML = "Dormant Volcano"
										document.getElementById('C').innerHTML = "Erupting Volcano"

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
											document.getElementById('quest').innerHTML = play[9]
											document.getElementById('A').innerHTML = "Intrusive"
											document.getElementById('B').innerHTML = "Explosive"
											document.getElementById('C').innerHTML = "Effusive"

											document.getElementById('A').onclick = function() {
												window.location.replace('../html/win.html');
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



    		