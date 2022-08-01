
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

    if(fighterName == player && animationName == 'idle'){
        p1Animating = false;
    }

    if(fighterName == enemy && animationName == 'idle'){
        p1Animating = false;
    }
    

    if(fighterName.pl == 1){
        if(player1turn == 1){
            
            player.switchSprite(animationName + 'R');
        }
        else if(player1turn == -1){
            player.switchSprite(animationName + 'L');
        }
    }
   else {
        if(player2turn == 1){
            enemy.switchSprite(animationName + 'R');
        }
        else if(player2turn == -1){
            enemy.switchSprite(animationName + 'L');
        }
   }
}


function mapUpdate(){
   
    if(mapChoice == 0){
        DefaultMap.update();
        shop.update();
        
        if(mapGameEnd == 0){
                
            distance2Ground = canvas.height - 95;
            playerMinHeight = 331;
            mapGameEnd ++
        }

    }
    else if(mapChoice ==1){
        LesslovedMap.update();
        distance2Ground = canvas.height - 49;
        playerMinHeight = 380;
        
    }
    else if(mapChoice == 2){
        Stars.update();
           if(mapGameEnd == 0){
                
            distance2Ground = canvas.height - 95;
            playerMinHeight = 331;
            mapGameEnd ++
        }
    }
    else if(mapChoice == 3){
        Waterfall.update();
        if(mapGameEnd == 0){
                
            distance2Ground = canvas.height - 95;
            playerMinHeight = 331;
            mapGameEnd ++
        }
    }
}



function collision(projectile,fighter){
    if(projectile.position.x + projectile.width >= fighter.position.x + 10 
    && projectile.position.x <= fighter.position.x + fighter.width
    &&projectile.position.y + projectile.height >= fighter.position.y + 40
    &&projectile.position.y <= fighter.position.y + fighter.height){
        return true;
    }
    return false
}


function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}


function doubleRopeDebug(){
    if(p1stunned != 0 && p2stunned != 0){
        if(player.velocity.x ==0 && enemy.velocity.x == 0){
            console.log(buggcounter)
            buggcounter ++;
        }
        if(p1stunned != 0 && p2stunned != 0 && buggcounter ==150){
            p1stunned = 0;
            p2stunned = 0;
            buggcounter =0;
        }
    }
    
}



//collisoni of auto attacks--------------------------------------------------------------
