var play = ["The air in the Earth's atmosphere is approximately made up of how many oxygen?",
 "What is the instrument used to measure wind speed called?",
 "Clouds that look like fog that does not reach the ground.",
 "These clouds look like small rounded puffs that appear in long rows.",
 "These are thunderstorm clouds.",
 "The Lowest part of the atmosphere",
 "What is the region above 500km in the atmosphere called?",
 "A weather disturbance characterized by strong winds",
 "The boundary in the Earth's atmosphere between the Mesosphere and Thermosphere",
 "Which layer of the atmopsphere does weather occur?",
 ];

 	function question(){

    var lives=3;
    var z = "Wrong"
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
          document.getElementById('A').innerHTML = "Cumulunim- bus"
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
            document.getElementById('A').innerHTML = "Cumulunim- bus"
            document.getElementById('B').innerHTML = "Altostratus"
            document.getElementById('C').innerHTML = "Stratocum- ulus"

            document.getElementById('A').onclick = function(){
              document.getElementById('quest').innerHTML = play[5]
              document.getElementById('A').innerHTML = "Stratosphere"
              document.getElementById('B').innerHTML = "Mesosphere"
              document.getElementById('C').innerHTML = "Troposphere"

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
                document.getElementById('A').innerHTML = "Mesosphere"
                document.getElementById('B').innerHTML = "Ionosphere"
                document.getElementById('C').innerHTML = "Exosphere"

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
                  document.getElementById('quest').innerHTML = play[7]
                  document.getElementById('A').innerHTML = "Typhoon"
                  document.getElementById('B').innerHTML = "Thunder- storm"
                  document.getElementById('C').innerHTML = "Storm Surge"

                  document.getElementById('A').onclick = function(){
                    document.getElementById('quest').innerHTML = play[8]
                    document.getElementById('A').innerHTML = "Tropopause"
                    document.getElementById('B').innerHTML = "Stratopause"
                    document.getElementById('C').innerHTML = "Mesopause"

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
                      document.getElementById('quest').innerHTML = play[9]
                      document.getElementById('A').innerHTML = "Strato- sphere"
                      document.getElementById('B').innerHTML = "Troposphere"
                      document.getElementById('C').innerHTML = "Thermo- sphere"

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
                        window.location.replace('../html/win.html')
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
    