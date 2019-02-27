        // An array of sitcomLetters: computerChoices
        var sitcomLetters = ['a', 'c', 'e', 'g', 'i', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v'];

        // Define variables that holds the following
        var wins = 0;
        var losses = 0;
        var guessesLeft = 9;
        var userChoice = "";

        // reference html text getElementBy...
        var winsText = document.getElementById("Wins-text");
        var lossesText = document.getElementById("Losses-text");
        var guessesLeftText = document.getElementById("GuessesLeft-text");
        var userChoiceText = document.getElementById("GuessesSoFar-text");
        var directionsText = document.getElementsByClassName("directions-text");


        document.onkeyup = function (event) {
            var userGuess = event.key
            userChoice = userChoice + " " + userGuess

            // var arrayLength = sitcomNames.length;
            var computerAnswerText = sitcomLetters[Math.floor(Math.random() * sitcomLetters.length)];
            // gueesing game begins
            console.log('computerGuess:' + computerAnswerText);

            var options = ['a', 'c', 'e', 'g', 'i', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v'];

            // This logic determines the outcome of the game (win/loss), and increments the appropriate number
            if (options.indexOf(userGuess) > -1) {

                if (userGuess === computerAnswerText) {
                    wins++;
                    alert("You win!");
                    guessesLeft = 9;
                    userChoice = "";
                }
                if (userGuess !== computerAnswerText) {
                    guessesLeft--;
                }
                if (guessesLeft === 0) {
                    guessesLeft = 9;
                    losses++;
                    alert("Sorry, try again");
                    userChoice = "";
                }
            }
            // Hide the directions
            
            // Display the user and computer guesses, and wins/losses/guesses left.
            winsText.textContent = "" + wins;
            lossesText.textContent = "" + losses;
            guessesLeftText.textContent = "" + guessesLeft;
            userChoiceText.textContent = "" + userChoice;
        };