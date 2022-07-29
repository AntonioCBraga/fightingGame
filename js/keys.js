
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
    console.log(e.key)
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
            player.attack()
            break;
        case 'q':
            animationTurns(player,'abilityQ')
            
            rs_Q(player,player1turn,p1Q)
            
            
            break;
        case 'e':
            ropes.push(new rope({ 
                position:{
                    x:player.position.x + 12,
                    y:player.position.y + 75
                },
                velocity:{
                    x: 5 * player1turn,
                    y:0
                },
            
            }))
            break;
        case 'r':
            grounds.push(new Ground({
                position:{
                    x:enemy.position.x + +12  ,
                    y:576 - 90
                },
                pl:1,
                
            }))
            
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
            
            enemy.attack()
            break;
        }
        case '4':
            animationTurns(enemy,'abilityQ')
            red_samurai_p1Q();
            break;
        case '8':
            ropes2.push(new rope({ 
                position:{
                    x:enemy.position.x  ,
                    y:enemy.position.y + 75
                },
                velocity:{
                    x: -5 * player1turn,
                    y:0
                },
            
            }))
            break;
        case '6':
            grounds2.push(new Ground({
                position:{
                    x:player.position.x  + 12  ,
                    y:576 -90
                },
                pl:2,

                
            }))
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