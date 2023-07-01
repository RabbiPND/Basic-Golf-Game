const results = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
if (strokes == 1) {
  return results[0]
} else if (strokes <= par - 2) {
  return results[1]
} else if (strokes == par - 1) {
  return results[2]
} else if (strokes == par ) {
  return results[3]
} else if (strokes == par + 1) {
  return results[4]
} else if (strokes == par + 2) {
  return results[5]
} else {
  
}
}

/* 

Strokes      	    Return
    1	          "Hole-in-one!"
<= par - 2	         "Eagle"
par - 1	            "Birdie"
    par	              "Par"
par + 1	             "Bogey"
par + 2	         "Double Bogey"
>= par + 3	        "Go Home!"


*/