const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;
c.fillRect(0,0,canvas.width,canvas.height);



//--------------------------------------------------------------Sprite!!---------------------------------------------//

//-------------------------------------------------Decrease Timer--------------------------------------------------//


decreaseTimer();
//----------------------------------------------------Animate--------------------------------------------------------//



function animate(){
    
    window.requestAnimationFrame(animate);
    
    c.fillStyle = 'black';
    c.fillRect(0,0,canvas.width,canvas.height);

    //-------------------------------------------------Updates--------------------------------------------------------//

    background.update();
    shop.update();
    player.update();
    enemy.update();
    
    if(enemy.health < 0 || player.health < 0){
        winner(timerID);
    }



    // //---------------------------------------------Player Movement--------------------------------------------------------//
    
    
    
    if(player.position.x <= enemy.position.x){
        player1turn = 1;
    }
    else{
        player1turn = -1;
    }

    player.velocity.x = 0;

    if(keys.a.pressed && player.lastKey ==='a' && p1move ==1 && p1stunned !=1 && pl1WalkL == 1){
        if(player.position.x >= 0){
            player.velocity.x = -5;
        }
       
    }
    else if(keys.d.pressed && player.lastKey ==='d' && p1move ==1 && p1stunned !=1 && pl1WalkR ==1){
        if(player.position.x  + player.width <= 1024){
            player.velocity.x = 5;
        }
    }   
    if(keys.w.pressed ){
        if( counterdjp1 == 1 || counterdjp1 ==3 && p1stunned !=1 ){
            
            player.velocity.y = -12.8;
            counterdjp1 ++
        }
    }
    

    if(player.position.y + player.height + player.velocity.y >= canvas.height- 95){
       
        counterdjp1 = 0;
    }

    
    //------------------------------------------Enemy Movement------------------------------------------------//
    enemy.velocity.x = 0;


    if(keys.ArrowLeft.pressed && enemy.lastKey ==='ArrowLeft' && p2move ==1 && p2stunned !=1 && pl2WalkL == 1){
        if(enemy.position.x >= 0){
            enemy.velocity.x = -5;
        }
    }
    else if(keys.ArrowRight.pressed && enemy.lastKey ==='ArrowRight' && p2move ==1 && p2stunned !=1 && pl2WalkR == 1){
        if(enemy.position.x + enemy.width <= 1024){
            enemy.velocity.x = 5;
        }
    }
    if(keys.ArrowUp.pressed && p2move == 1 && p2stunned !=1){
        if( counterdjp2 == 1|| counterdjp2 ==3 ){
            
            enemy.velocity.y = -12.8;
            counterdjp2 ++;
        }
    }


  
    if(enemy.position.y + enemy.height + enemy.velocity.y >= canvas.height- 95){
       
        counterdjp2 = 0;
    }

    //---------------------------------------------player collision------------------------------------------------//
  
   
    // if(player.position.x + player.width > enemy.position.x - 5 && player.position.x + player.width + enemy.position.x -3){
        
    //     //player.velocity.y = 0;
    //     pl1WalkR = 0;
    //     if(player.position.y + player.height <= enemy.position.y  ){
    //         console.log('ayayay')
    //         pl1WalkR = 1;

    //         if(player.position.y + player.height <= enemy.position.y  && player.position.y + player.height >= enemy.position.y -1){
    //             console.log('what')
    //             player.velocity.y =0 ;
    //         }
    //     }
        
    //     // if(player.position.x > enemy.position.x + enemy.width){
    //     //     player.velocity.y =
    //     // }
        
    // }
    // else if(player.position.x + player.width <= enemy.position.x -6  ){
    //     pl1WalkR = 1;
        
    // }
   
    
   







   
    //----------------------------------------------And attacks doing stuff----------------------------------------//

    //----------------------p1 AA -------------------------//
    aap1();
    
    //--------------------------------Character Select -----------------------------//
    if(p1CharSelect == 'redsamurai'){
        p1redSamurai();
    }




    if(p2CharSelect == 'redsamurai'){
        p2redSamurai()
    }



}   // END OF ANIMATE()






animate();