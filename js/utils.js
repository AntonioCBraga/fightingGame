
//Display game results Live
function winner(timerId){
    clearTimeout(timerId);
    document.querySelector('#displayText').style.visibility = 'visible';
    if(player.health == enemy.health){
        document.querySelector('#displayText').innerHTML = 'Tie';
        
    }
    else if(player.health > enemy.health){
        document.querySelector('#displayText').innerHTML = 'Player1 Wins!';
        
    }
    else if(player.health < enemy.health){
        document.querySelector('#displayText').innerHTML = 'Player2 Wins!';
        
    }
}



//Game timer
function decreaseTimer(){
    timerID =setTimeout(decreaseTimer,1000)
    if(timer > 0){
        timer --
        document.querySelector('#timer').innerHTML = timer;
    }
    if(timer == 0){
        winner(timerID);
    }  
}

// Takes fighterName and animationName to decide
//wich sided animation to use
function animationTurns(fighterName,animationName){
    if(fighterName.pl == 1){
        if(player1turn == 1){
            
            player.switchSprite(animationName + 'R');
        }
        else if(player1turn == -1){
            player.switchSprite(animationName + 'L');
        }
    }
   else {
        if(player1turn == -1){
            player.switchSprite(animationName + 'R');
        }
        else if(player1turn == 1){
            player.switchSprite(animationName + 'L');
        }
   }
}