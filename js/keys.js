
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

            if(p1stunned === 0  && p2AnimationStun == 0){
                rs_AA(player,player1turn,rs_aa_p1)
                animationTurns(player,'attack')
            }   
            
          
            break;
        case 'q':
            
            if(p1stunned === 0 && rs_CDQp1 == 0 && p2AnimationStun == 0){
                animationTurns(player,'abilityQ')
                rs_Q(player,player1turn,p1Q);
                rs_CDQp1 ++;
            }
            
            
            
            break;
        case 'e':
            if(player.velocity.y === 0 && p1stunned === 0 && rs_CDEp1 == 0 && p2AnimationStun == 0){
                animationTurns(player,'abilityE');
                rs_E(player,player1turn,p1E1,p1E2);
                rs_CDEp1 ++ 
            }
        
            
        
            break;
        case 'r':
            if(rs_cdRp1== 0 && p2stunned == 0 && p2AnimationStun == 0){
                rs_delayRp1 = 1;
            }
            if(rs_delayRp1 === 1 && p1stunned ===0 && player.velocity.y === 0){
                animationTurns(player,'abilityR')
            }
               
                
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
            if(p2stunned === 0  && p2AnimationStun == 0){
                rs_AA(enemy,player2turn,rs_aa_p2)
                animationTurns(enemy,'attack')
            }
            break;
        }
        case '4':
            if(p2stunned === 0 && rs_CDQp2 == 0 && p2AnimationStun == 0){
                animationTurns(enemy,'abilityQ')
                rs_Q(enemy,player2turn,p2Q)
                rs_CDQp2 ++
            }
            break;
        case '8':
            if(enemy.velocity.y === 0 && p2stunned ===0 && rs_CDEp2 == 0  && p2AnimationStun == 0 ){

                animationTurns(enemy,'abilityE');
                rs_E(enemy,player2turn,p2E1,p2E2);
                rs_CDEp2 ++
            }
            break;
        case '6':
            if(rs_cdRp2== 0 && p2stunned == 0 && p2AnimationStun == 0 ){
                rs_delayRp2 = 1;
            }
            
            if(rs_delayRp2 === 1 && p2stunned ===0 && enemy.velocity.y === 0){
                animationTurns(enemy,'abilityR')
            }
           
            
            //rs_R(player,p2R)

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