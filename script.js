const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;
c.fillRect(0,0,canvas.width,canvas.height);



//--------------------------------------------------------------Sprite!!---------------------------------------------//
class Sprite{
    constructor({position,velocity,color = 'red'}){
        this.position = position
        this.width = 50;
        this.velocity = velocity
        this.height = 150;
        this.lastKey

        this.attackBox1 ={
            position: this.position,
            width: 100,
            height: 50
        }

        this.color = color;
        this.isAttacking
    }

    draw(){
        c.fillStyle = this.color;
        c.fillRect(this.position.x,this.position.y,this.width,this.height);
        
        //attackBox
        c.fillStyle ='blue';
        if(this.isAttacking){
            if(player1turn == 1){
                c.fillRect(this.attackBox1.position.x,
                    this.attackBox1.position.y,
                    this.attackBox1.width,
                    this.attackBox1.height)
            }
            else if(player1turn == -1){
                c.fillRect(this.attackBox1.position.x - 50,
                    this.attackBox1.position.y,
                    this.attackBox1.width,
                    this.attackBox1.height)
                  
            }
        }
        //c.fillStyle ='purple';
        
        //c.fillRect(this.attackBox2.position.x,this.attackBox2.position.y, this.attackBox2.width,this.attackBox2.height)
       
        

    }
    
    update(){
        this.draw()

        
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if(this.position.y + this.height + this.velocity.y >= canvas.height ){
            this.velocity.y = 0
        }
        else{
            this.velocity.y += gravity;
        }

    }
    attack(){
        this.isAttacking = true;
        setTimeout(()=>{
            this.isAttacking = false;
        },100)
    }

}



//------------------------------------------------p1 && p2------------------------------------------------//
const player = new Sprite({
    position:{
    x:0,
    y:0
    },
    velocity:{
        x:0,
        y:0
    }
})



const enemy = new Sprite({
    position:{
    x:400,
    y:100
    },
    velocity:{
        x:0,
        y:0
    },
    color: 'blue'
})


//----------------------------------------------------Animate--------------------------------------------------------//



function animate(){
    
    window.requestAnimationFrame(animate);
    
    c.fillStyle = 'black';
    c.fillRect(0,0,canvas.width,canvas.height);

    //-------------------------------------------------Updates--------------------------------------------------------//

 

    player.update();
    enemy.update();





    // //---------------------------------------------Player Movement--------------------------------------------------------//
    
    
    
    if(player.position.x <= enemy.position.x){
        player1turn = 1;
    }
    else{
        player1turn = -1;
    }

    player.velocity.x = 0;

    if(keys.a.pressed && player.lastKey ==='a' && p1move ==1 && p1stunned !=1){
        if(player.position.x >= 0){
            player.velocity.x = -5;
        }
       
    }
    else if(keys.d.pressed && player.lastKey ==='d' && p1move ==1 && p1stunned !=1 ){
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
    

    if(player.position.y + player.height + player.velocity.y >= canvas.height){
       
        counterdjp1 = 0;
    }

    
    //------------------------------------------Enemy Movement------------------------------------------------//
    enemy.velocity.x = 0;


    if(keys.ArrowLeft.pressed && enemy.lastKey ==='ArrowLeft' && p2move ==1 && p2stunned !=1){
        if(enemy.position.x >= 0){
            enemy.velocity.x = -5;
        }
    }
    else if(keys.ArrowRight.pressed && enemy.lastKey ==='ArrowRight' && p2move ==1 && p2stunned !=1){
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


  
    if(enemy.position.y + enemy.height + enemy.velocity.y >= canvas.height){
       
        counterdjp2 = 0;
    }

   
    //----------------------------------------------And attacks doing stuff----------------------------------------//

    //----------------------p1 AA -------------------------//
    aap1();
    
    //--------------------------------Character Select -----------------------------//
    if(p1CharSelect == 'redsamurai'){
        pjcol();
        ropecol();
        groundcol();
    }



}   // END OF ANIMATE()






animate();
