
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
            console.log(ropes.lenght)
            player.attack()
            break;
        case 'q':
            if(projectiles.length <1 ){
                projectiles.push(new Projectile({
                    position: {
                        x:player.position.x  + 20 ,
                        y:player.position.y + 50
                    },
                    velocity:{
                       x: 7 * player1turn,
                       y:0 
                    }
                })) 
            }
            break;
        case 'e':
            ropes.push(new rope({ 
                position:{
                    x:player.position.x + 40,
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
                    x:player.position.x + 60* player1turn  ,
                    y:player.position.y +100
                }
                
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
            if(projectiles2.length <1 ){
                projectiles2.push(new Projectile({
                    position: {
                        x:enemy.position.x  + 20 ,
                        y:enemy.position.y + 50
                    },
                    velocity:{
                       x: -7 * player1turn,
                       y:0 
                    }
                })) 
            }
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