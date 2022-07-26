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

    



    //-----------------------------------------Maps-------------------------------------------//
    mapUpdate();

    player.update();
    enemy.update();
    
    if(enemy.health < 0 || player.health < 0){
        winner(timerID);
    }
    


    //------------------------tells what way players should be facing and send abilities.
    if(player.position.x <= enemy.position.x && p1Animating == false  && p1stunned == 0 && p1AnimationStun == 0){
        player1turn = 1;
        
      
    }
    else if(player.position.x > enemy.position.x && p1Animating == false  && p1stunned == 0 && p1AnimationStun == 0){
        player1turn = -1;
        
        
    }

    
    
  
    player.velocity.x = 0;
     // p2 AA making p1 AnimationStunned

    if(keys.a.pressed && player.lastKey ==='a' && p1move ==1 && p1stunned ==0 && pl1WalkL == 1 && p1AnimationStun == 0){
        if(player.position.x >= 0){
            animationTurns(player,'run');
            player.velocity.x = -5;
        }
       
    }
    else if(keys.d.pressed && player.lastKey ==='d' && p1move ==1 && p1stunned ==0 && pl1WalkR ==1 && p1AnimationStun == 0){
        if(player.position.x  + player.width <= 1024){
            
            animationTurns(player,'run');
            player.velocity.x = 5;
        }
    }  
    else if(p1stunned != 0){
        animationTurns(player,"stunned")
    }
    else{
        
        animationTurns(player,'idle');
       
    }
    

    if(keys.w.pressed && p1stunned ==0 && p1move ==1 && p1AnimationStun == 0){
        if( counterdjp1 == 1 || counterdjp1 ==3  ){
            
            player.velocity.y = -11.2;
            if(counterdjp1 == 3){
                doubleJump(player,p1DJarr)
            }
            counterdjp1 ++
        }
    }

    if(p1DJarr.length != 0){
        p1DJcounter ++
        p1DJarr[0].update()
        if(p1DJcounter == 16){
            p1DJarr.splice(0,1)
            p1DJcounter = 0;
        }
    }
   

   
    


    //--------------------------------jump animation
    if(player.velocity.y < 0){

        
        animationTurns(player,'jump');


    }
    else if(player.velocity.y > 0 ){
        animationTurns(player,'fall');
    }

    if(player.position.y + player.height + player.velocity.y >= distance2Ground){
        
        counterdjp1 = 0;
    }

    
    
    //------------------------------------------Enemy Movement------------------------------------------------//
    //Tells what side enemy should be facing
    
    enemy.velocity.x = 0;
    

    if(player.position.x <= enemy.position.x  && p2Animating == false  && p2stunned == 0 && p2AnimationStun == 0){
        player2turn = -1;
        
    }
    else if(player.position.x > enemy.position.x && p2Animating == false && p2stunned == 0 && p2AnimationStun == 0){
        player2turn = 1;
        
    }





    if(keys.ArrowLeft.pressed && enemy.lastKey ==='ArrowLeft' && p2move ==1 && p2stunned ==0 && pl2WalkL == 1 && p2AnimationStun == 0){
        if(enemy.position.x >= 0){
            animationTurns(enemy,'run');
            enemy.velocity.x = -5;
        }
    }
    else if(keys.ArrowRight.pressed && enemy.lastKey ==='ArrowRight' && p2move ==1 && p2stunned ==0 && pl2WalkR == 1 && p2AnimationStun == 0){
        if(enemy.position.x + enemy.width <= 1024){
            animationTurns(enemy,'run');
            enemy.velocity.x = 5;
        }
    }
    else if(p2stunned != 0){
        animationTurns(enemy,"stunned")
    }
    else{
        animationTurns(enemy,'idle');
    }


    if(keys.ArrowUp.pressed && p2move == 1 && p2stunned == 0 && p2AnimationStun == 0){
        if( counterdjp2 == 1|| counterdjp2 ==3 ){
            
            enemy.velocity.y = -11.2;
            if(counterdjp2 == 3){
            doubleJump(enemy,p2DJarr)
            }
           
            counterdjp2 ++;
        }
    }




    if(p2DJarr.length != 0){
        p2DJcounter ++
        p2DJarr[0].update()
        if(p2DJcounter == 16){
            p2DJarr.splice(0,1)
            p2DJcounter = 0;
        }
    }



    if(enemy.velocity.y < 0){

        
        animationTurns(enemy,'jump');


    }
    else if(enemy.velocity.y > 0 ){
        animationTurns(enemy,'fall');
    }
    

    if(enemy.position.y + enemy.height + enemy.velocity.y >= distance2Ground){
       
        counterdjp2 = 0;
    }



    //---------------------------------------------Cooldown && Delay Systems------------------------------------------------//
   
    //Q_col(p1Q,enemy);
   


  
   
    


   


  


    
   

    



    
    
    
    //----------------------------------------------And attacks doing stuff----------------------------------------//

    //----------------------p1 AA -------------------------//
    
    
    //--------------------------------Character Select -----------------------------//
    if(p1CharSelect == 'redsamurai'){
        if(rs_AACDp1 != 0){
            rs_AAp1()
        }
        if(rs_CDQp1 != 0){ // rs p1 abQ
            rs_CDQP1();
        }
       
        if(rs_CDEp1 != 0){ // rs p1 abE
            rs_CDEP1();
        }

        if(rs_delayRp1 != 0){ //rs p1 abE
            rs_DelaysP1();
        }
    }

    if(p2CharSelect == 'redsamurai'){
        if(rs_AACDp2 != 0){
            rs_AAp2()
        }
        
        if(rs_CDQp2!= 0){
            rs_CDQP2();
        }
        
        if(rs_CDEp2 != 0){  //rs p2 abE
            rs_CDEP2();
        }
        if(rs_delayRp2 != 0){//rs p2 abE
            rs_DelaysP2();
        }
    }
 
   
   
    
  

}   // END OF ANIMATE()






animate();
