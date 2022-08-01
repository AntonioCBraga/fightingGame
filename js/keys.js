
const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    w:{
        pressed: false
    },
    ArrowRight:{ 
        pressed: false
    },
    ArrowLeft:{ 
        pressed: false
    },
    ArrowUp:{ 
        pressed: false
    }
}







//-----------------------------------------------------Key commands-------------------------------------------------//

window.addEventListener('keydown',(e)=>{
  
    switch(e.key){
        case 'd':
            keys.d.pressed = true;
            player.lastKey = 'd';
            break;
        case 'a':    
            keys.a.pressed = true;
            player.lastKey = 'a';
            break;
        case 'w':
            keys.w.pressed = true;
            
            counterdjp1 ++
            break;
        case ' ':
            if(p1stunned === 0){
                player.attack()
            }
          
            break;
        case 'q':
            if(p1stunned === 0){
                animationTurns(player,'abilityQ')
                rs_Q(player,player1turn,p1Q);
            }
            
            
            
            break;
        case 'e':
            if(player.velocity.y === 0 && p1stunned === 0){
                animationTurns(player,'abilityE');
                rs_E(player,player1turn,p1E1,p1E2);
            }
           
            
        
            break;
        case 'r':
                //animationTurns(player,'abilityR')
                rs_R(enemy,p1R)
            break;
    
        //--------------------------------------------------Player 2 commands-------------------------------------------//
        
        case 'ArrowRight':
            keys.ArrowRight.pressed = true;
            enemy.lastKey = 'ArrowRight';
            
            break;
        case 'ArrowLeft':    
            keys.ArrowLeft.pressed = true;
            enemy.lastKey = 'ArrowLeft';
            break;
        case 'ArrowUp':{
            keys.ArrowUp.pressed = true;
             counterdjp2 ++
            
             break;
        }
        case '0': {
            if(p2stunned === 0){
               
                enemy.attack()
            }
            
            break;
        }
        case '4':
            if(p2stunned === 0){
                animationTurns(enemy,'abilityQ')
                rs_Q(enemy,player2turn,p2Q)
            }
            break;
        case '8':
            if(enemy.velocity.y === 0){
                animationTurns(enemy,'abilityE');
                rs_E(enemy,player2turn,p2E1,p2E2);
            }
            break;
        case '6':
            //animationTurns(enemy,'abilityR')
            rs_R(player,p2R)

            break;
    }


})

//---------------------------------------------------------p2 and p1 keyUP---------------------------------------------------//
window.addEventListener('keyup',(e)=>{
    switch(e.key){
        case 'd':
            keys.d.pressed = false;
            break
        case 'a':
            keys.a.pressed = false;
            break;
        case 'w':
            keys.w.pressed = false;
            break
            
        
    }
    switch(e.key){    
        
        case 'ArrowRight':
            keys.ArrowRight.pressed = false;
            
            break;
            
        case 'ArrowLeft':    
            keys.ArrowLeft.pressed = false;
            
            break;
        case 'ArrowUp':{
            keys.ArrowUp.pressed = false;
            break;
        }
    }
    
})