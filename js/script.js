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

   

    // //---------------------------------------------Player Movement--------------------------------------------------------//
    //-------------------------------------------------And animations------------------------------------------------------//
    //trying out cooldowns
    if(coldred_samurai_Qp1 >= 180){
        coldred_samurai_Qp1 = 0;
    }
    else if(coldred_samurai_Qp1 != 0){
        coldred_samurai_Qp1 ++;
        
     
    }

    //------------------------tells what way players should be facing and send abilities.
    if(player.position.x <= enemy.position.x){
        player1turn = 1;
        sideRope ='./img/Red_Samurai/Sprites/kunaiwithRope/ropeshuriken.png'
    }
    else{
        player1turn = -1;
        sideRope ='./img/Red_Samurai/Sprites/kunaiwithRope/ropeshurikenL.png'
    }

    


    player.velocity.x = 0;

    if(keys.a.pressed && player.lastKey ==='a' && p1move ==1 && p1stunned !=1 && pl1WalkL == 1){
        if(player.position.x >= 0){
            animationTurns(player,'run');
            player.velocity.x = -5;
        }
       
    }
    else if(keys.d.pressed && player.lastKey ==='d' && p1move ==1 && p1stunned !=1 && pl1WalkR ==1){
        if(player.position.x  + player.width <= 1024){
            
            animationTurns(player,'run');
            player.velocity.x = 5;
        }
    }  
    else{
        
        animationTurns(player,'idle');
       
    }
    console.log(p1stunned)

    if(keys.w.pressed && p1stunned ==0 && p1move ==1){
        if( counterdjp1 == 1 || counterdjp1 ==3  ){
            player.velocity.y = -11.2;
            counterdjp1 ++
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

    if(player.position.x <= enemy.position.x){
        player2turn = -1;
    }
    else{
        player2turn = 1;
    }





    if(keys.ArrowLeft.pressed && enemy.lastKey ==='ArrowLeft' && p2move ==1 && p2stunned ==0 && pl2WalkL == 1){
        if(enemy.position.x >= 0){
            animationTurns(enemy,'run');
            enemy.velocity.x = -5;
        }
    }
    else if(keys.ArrowRight.pressed && enemy.lastKey ==='ArrowRight' && p2move ==1 && p2stunned ==0 && pl2WalkR == 1){
        if(enemy.position.x + enemy.width <= 1024){
            animationTurns(enemy,'run');
            enemy.velocity.x = 5;
        }
    }
    else{
        animationTurns(enemy,'idle');
    }


    if(keys.ArrowUp.pressed && p2move == 1 && p2stunned == 0){
        if( counterdjp2 == 1|| counterdjp2 ==3 ){
            
            enemy.velocity.y = -11.2;
            counterdjp2 ++;
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

    //---------------------------------------------player collision------------------------------------------------//

   
    //----------------------------------------------And attacks doing stuff----------------------------------------//

    //----------------------p1 AA -------------------------//
    aap1();
    
    //--------------------------------Character Select -----------------------------//
    if(p1CharSelect == 'redsamurai'){


        p1RS();

    }




    if(p2CharSelect == 'redsamurai'){
        p2redSamurai()

        p2RS();
    }



}   // END OF ANIMATE()






animate();
