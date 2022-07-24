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