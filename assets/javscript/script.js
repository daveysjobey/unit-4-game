$(document).ready(function(){
   
    var goal = 0;
    var score = 0;
    var wins = 0;
    var losses= 0;

    var gemNumbers = [1,2,4,5,7,9,10,13,15,20,25,30,50]
    var pinkGem =0
    var orangeGem =0
    var yellowGem =0
    var greenGem =0

    console.log("anything")
    randomizeGems();
    function randomizeGems(){
        pinkGem = gemNumbers[Math.floor(Math.random() * gemNumbers.length)];
        console.log("pinkgem= "+ pinkGem);
        orangeGem = gemNumbers[Math.floor(Math.random() * gemNumbers.length)];
        console.log("orangegem= "+ orangeGem);
        yellowGem = gemNumbers[Math.floor(Math.random() * gemNumbers.length)];
        console.log("yellowgem= "+ yellowGem);
        greenGem = gemNumbers[Math.floor(Math.random() * gemNumbers.length)];
        console.log("greengem= "+ greenGem);

        if (pinkGem == orangeGem || pinkGem==yellowGem || pinkGem==greenGem || orangeGem == yellowGem || orangeGem == greenGem || yellowGem == greenGem) {
            randomizeGems();
        } else {
            setupGame();
        };
    function setupGame(){
        goal = 29 + Math.floor(Math.random() * 121);
        console.log("goal is: "+goal)
        score = 0;
        $(".wins").html("Wins: " + wins);
		$(".losses").html("Losses: " + losses);
		$("#goal").html("Goal: "+ goal);
		$("#score").html("Total "+score);
    }
    };

    $(".crystal").on("click", function() {

		var pressed = $(this).attr("id");
        console.log(pressed);
        // add the value of the gem the score
        if (pressed == "pinkgem") {
        	score += pinkGem;
        } else if (pressed == "orangegem") {
        	score += orangeGem;
        } else if (pressed == "yellowgem") {
        	score += yellowGem;
        } else if (pressed == "greengem") {
        	score += greenGem;
        } else {
        	console.log("error");
        }
        $("#score").html("Total "+score);

            if (score === goal) {
                wins ++;
                randomizeGems();
            }

            if (score > goal){
                losses ++;
                randomizeGems();
            }

    });








});