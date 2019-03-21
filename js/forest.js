
var play = ["What causes the most forest loss?",
 "More than what percentage of Earth's natural forests have been destroyed?",
 "The largest living organism in the planet is a ___.",
 "Which country has the biggest artificial forest?",
 "Which country is named after a tree?",
 "How much percentage of water does a cabbage contain?",
 "What is a cluster of bananas called?",
 "On what age does oak trees produce acorns?",
 "Which kind of tree is struck by lightning more than the others?",
 "Where can 85% of the Earth's plant life be found?",
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
			document.getElementById('quest').innerHTML = play[1]
			document.getElementById('A').innerHTML = "60%"
			document.getElementById('B').innerHTML = "80%"
			document.getElementById('C').innerHTML = "40%"

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
				document.getElementById('quest').innerHTML = play[2]
				document.getElementById('A').innerHTML = "Mushroom"
				document.getElementById('B').innerHTML = "Tree"
				document.getElementById('C').innerHTML = "Flower"

				document.getElementById('A').onclick = function(){
					document.getElementById('quest').innerHTML = play[3]
					document.getElementById('A').innerHTML = "Indonesia"
					document.getElementById('B').innerHTML = "Malaysia"
					document.getElementById('C').innerHTML = "China"

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
						document.getElementById('quest').innerHTML = play[4]
						document.getElementById('A').innerHTML = "Thailand"
						document.getElementById('B').innerHTML = "Singapore"
						document.getElementById('C').innerHTML = "Brazil"

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
							document.getElementById('quest').innerHTML = play[5]
							document.getElementById('A').innerHTML = "42%"
							document.getElementById('B').innerHTML = "81%"
							document.getElementById('C').innerHTML = "60%"

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
								document.getElementById('quest').innerHTML = play[6]
								document.getElementById('A').innerHTML = "Band"
								document.getElementById('B').innerHTML = "Hand"
								document.getElementById('C').innerHTML = "Rand"

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
									document.getElementById('A').innerHTML = "23 yrs."
									document.getElementById('B').innerHTML = "50 yrs."
									document.getElementById('C').innerHTML = "65 yrs."

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
										document.getElementById('quest').innerHTML = play[8]
										document.getElementById('A').innerHTML = "Oak Trees"
										document.getElementById('B').innerHTML = "Birch Trees"
										document.getElementById('C').innerHTML = "Spruce Trees"

										document.getElementById('A').onclick = function(){
											document.getElementById('quest').innerHTML = play[9]
											document.getElementById('A').innerHTML = "In The Mountains"
											document.getElementById('B').innerHTML = "In the Plains"
											document.getElementById('C').innerHTML = "In the Ocean"

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
												window.location.replace('../html/win.html')
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
    
    		