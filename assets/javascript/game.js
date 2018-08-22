$(document).ready(function() {
    var wins = 0;
    var losses = 0;
    var playerScore = 0;
    var targetScore = 0;
    var blueCrystal = $("#blue-crystal")
    var greenCrystal = $("#green-crystal")
    var redCrystal = $("#red-crystal")
    var yellowCrystal = $("#yellow-crystal")

    var crystal = {
        blue: {value: 0},
        green: {value: 0},
        red: {value: 0},
        yellow: {value: 0}
    }

    function getRandomNumber(min, max) {
       return Math.floor(Math.random() * (max - min + 1)) + min;
    };
   
    blueCrystal.click(function() {
        playerScore = playerScore + crystal.blue.value;
        checkWin();
    })
    greenCrystal.click(function() {
        playerScore = playerScore + crystal.green.value;
        checkWin();
    })
    redCrystal.click(function() {
        playerScore = playerScore + crystal.red.value;
        checkWin();
    })
    yellowCrystal.click(function() {
        playerScore = playerScore + crystal.yellow.value;
        checkWin();
    })
    
    
    function gameStart(){
        playerScore = 0;
        setTargetNumber();
        setCrystalValue();
        updateDisplay();
        console.log(crystal.blue.value);
        console.log(crystal.green.value);
        console.log(crystal.red.value);
        console.log(crystal.yellow.value);

    }
    function setTargetNumber() {
       targetScore = getRandomNumber(19, 120);

    } 
    function setCrystalValue(){ 
        crystal.blue.value = getRandomNumber(1, 12);
        crystal.green.value = getRandomNumber(1, 12);
        crystal.red.value = getRandomNumber(1, 12);
        crystal.yellow.value = getRandomNumber(1, 12);
        
        
        console.log("gem value set");
    }
    function updateDisplay() {
        console.log("all displays are set");
        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#user-score-display").text(playerScore);
        $("#target-score-display").text(targetScore);
    }
    function checkWin() {
        if (playerScore > targetScore) {
            losses ++;
            alert("To Bad. You lose.")
            gameStart();
        };
        if (playerScore === targetScore) {
            wins ++;
            alert("Hooray! You Won!");
            gameStart();
        };
        updateDisplay();
    }
    
    gameStart();


})