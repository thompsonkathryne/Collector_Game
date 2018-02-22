$(document).ready(function() {

        var shivaNumber = Math.floor(Math.random() * 12) + 1;
        var ifritNumber = Math.floor(Math.random() * 12) + 1;
        var bahNumber = Math.floor(Math.random() * 12) + 1;
        var animaNumber = Math.floor(Math.random() * 12) + 1;
        var wins = 0;
        var losses = 0;
        var playerScore = 0;
        var compChoice = Math.floor(Math.random() * 101) + 19;



        function reset(){
        playerScore = 0;
        
    }
        
    console.log(compChoice);


    $(".numberPicked").html(compChoice);

    $("#shiva").on("click", function() {
        $(shivaNumber).appendTo().on("click", "#shiva");
        (playerScore += shivaNumber);
        $('.playerScore').html(playerScore);
        console.log(shivaNumber);
        console.log(playerScore);

        if (playerScore === compChoice) {
            alert('You won!');
            wins++;
            reset();
            
            

        } else if (playerScore > compChoice) {
            alert('You lost!');
            losses++;
            reset();
            
            
        }

        $('.wins').html(wins);
        $('.losses').html(losses);

    });

    $("#ifrit").on("click", function() {
        $(ifritNumber).appendTo().on("click", "#ifrit");
        (playerScore += ifritNumber);
        $('.playerScore').html(playerScore);
        console.log(ifritNumber);
        console.log(playerScore);

        if (playerScore === compChoice) {
            alert('You won!');
            wins++;
            reset();
           
        } else if (playerScore > compChoice) {
            alert('You lost!');
            losses++;
            reset();
           
        }

        $('.wins').html(wins);
        $('.losses').html(losses);

    });

    $("#bahamut").on("click", function() {
        $(bahNumber).appendTo().on("click", "#bahamut");
        (playerScore += bahNumber);
        $('.playerScore').html(playerScore);
        console.log(bahNumber);
        console.log(playerScore);

        if (playerScore === compChoice) {
            alert('You won!');
            wins++;
            reset();
           
        } else if (playerScore > compChoice) {
            alert('You lost!');
            losses++;
            reset();
            
        }

        $('.wins').html(wins);
        $('.losses').html(losses);

    });

    $("#anima").on("click", function() {
        $(animaNumber).appendTo().on("click", "#anima");
        (playerScore += animaNumber);
        $('.playerScore').html(playerScore);
        console.log(animaNumber);
        console.log(playerScore);

        if (playerScore === compChoice) {
            alert('You won!');
            wins++;
            reset();
           
        } else if (playerScore > compChoice) {
            alert('You lost!');
            losses++;
            reset();
            
        }

        $('.wins').html(wins);
        $('.losses').html(losses);
    });


    $('.playerScore').html(playerScore);
    $('.wins').html(wins);
    $('.losses').html(losses);





});
