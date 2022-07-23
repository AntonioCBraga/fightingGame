//General p1 AA

function aap1(){
     if(player.isAttacking){
        if(player.attackBox1.position.x + player.attackBox1.width >= enemy.position.x
            && player.attackBox1.position.x <= enemy.position.x + enemy.width
            && player.attackBox1.position.y + player.attackBox1.height >= enemy.position.y
            &&player.attackBox1.position.y <= enemy.position.y + enemy.height
            && player.isAttacking && player1turn == 1){
            console.log('deded')
        }
        else if(player.attackBox1.position.x + player.attackBox1.width  >= enemy.position.x
            && player.attackBox1.position.x <= enemy.position.x + enemy.width +50
            && player1turn == -1 && player.isAttacking 
            && player.attackBox1.position.y <= enemy.position.y + enemy.height
            && player.attackBox1.position.y + player.attackBox1.height >= enemy.position.y
            ){
                console.log('whatdifok')
            
        }
     }
    else if(enemy.isAttacking){
        console.log("hello")
        if(enemy.attackBox1.position.x - enemy.attackBox1.width <= player.position.x + player.width
           
            && enemy.attackBox1.position.y + enemy.attackBox1.height >= player.position.y
            &&enemy.attackBox1.position.y <= player.position.y + player.height
            && enemy.isAttacking && player1turn == 1){
            console.log('deded')
        }
        else if(enemy.attackBox1.position.x + enemy.attackBox1.width  >= player.position.x
            && enemy.attackBox1.position.x <= player.position.x + player.width +50
            && player1turn == -1 && enemy.isAttacking 
            && enemy.attackBox1.position.y <= player.position.y + player.height
            && enemy.attackBox1.position.y + enemy.attackBox1.height >= player.position.y
            ){
                console.log('whatdifok')
            
        }

    }
}




//---------------------------------------------------------Red Samurai P1------------------------------------------------------//

//------------------------------------------------------Ability Variables---------------------------------------------//

const projectiles = []  //projectile  attack
const ropes = [] //rope p1 attack
const grounds = []// ground attack

// ------------------------------------------------------------Red Samurai Q------------------------------------------------//

class Projectile{
    constructor({position,velocity}){
        this.position = position;
        this.velocity = velocity;
        this.radius = 15;
        this.counter =0;
    }
    draw(){
        c.beginPath();
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = 'red';
        c.fill()
        c.closePath();
    }
    update(){
        
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y 
        this.counter += 1
        console.log(this.counter)
    }
    
}

//------------------------- PJ Colision--------------------//
function pjcol(){
    projectiles.forEach((projectile,index )=> {
        if(p1CharSelect == "redsamurai"){  
            if(projectile.position.x + projectile.radius >= 1024 || projectile.position.x + projectile.radius <= 0  ){
                console.log(projectiles)
                projectiles.splice(index,1)
            }
            else if(projectile.position.x + projectile.radius >= enemy.position.x + 10 
                && projectile.position.x <= enemy.position.x + enemy.width
                    &&projectile.position.y + projectile.radius >= enemy.position.y
                    &&projectile.position.y <= enemy.position.y + enemy.height){
                    console.log('hit!')
                    projectiles.splice(index,1)
                }
            else{
                projectile.update();
            }
        }
        else if(p2CharSelect == "redsamurai"){
            if(projectile.position.x + projectile.radius >= 1024 || projectile.position.x + projectile.radius <= 0  ){
                projectiles.splice(index,1)
            }
            else if(projectile.position.x + projectile.radius >= enemy.position.x + 10 
                && projectile.position.x <= enemy.position.x + enemy.width
                    &&projectile.position.y + projectile.radius >= enemy.position.y
                    &&projectile.position.y <= enemy.position.y + enemy.height){
                    console.log('hit!')
                    projectiles.splice(index,1)
                }
            else{
                projectile.update();
            }
        }
        

       
    })
}


// -----------------------------------------------Red Samurai E Rope

class rope{
    constructor({position,velocity}){
        this.position = position;
        this.velocity = velocity;
        this.width = 30;
        this.height = 12;
    }
    draw(){
        c.fillStyle = 'red';
        c.fillRect(this.position.x,this.position.y,this.width,this.height);
        c.fill();
        
    }
    update(){
        this.draw();
        this.width += this.velocity.x;
    }
}

//-------------------------------------Rope Col


function ropecol(){
    ropes.forEach((rope,index ) =>{
        if(rope.position.x + rope.width >= 1024 || rope.position.x + rope.width <= 0  ){

            ropes.splice(index,1)
           
        }//-------------------- adjust so it isnt only 1 pixel of the rope under.
        else if(rope.position.x + rope.width >= enemy.position.x &&    
             rope.position.x + rope.width <= enemy.position.x + enemy.width &&  
             rope.position.y + rope.height >= enemy.position.y && 
             rope.position.y <= enemy.position.y + enemy.height){
            
            
         
            
            ropes.splice(index,1);
            getRoped =1 ;
            p2move = 0;
        }
        else {
            rope.update();
        }
    })

    if(getRoped != 0){ // i------------------------if gets hit by rope
        
        if(p2move == 0 && p2stunned == 0 ){
            enemy.velocity.x -= 4 * player1turn; 

            if((player.position.x + player.width + 20 <= enemy.position.x  && player.position.x + player.width + 25 >= enemy.position.x) || 
            (enemy.position.x + enemy.width + 20 <= player.position.x && enemy.position.x + enemy.width + 25 >= player.position.x)){
                p2stunned =1;
            }
            
        }
        else {
            getRoped ++;
            enemy.velocity.x = 0;
            if (getRoped == 30){
                getRoped = 0;
                p2move =1 ;
                p2stunned =0;

            }
        }
    }

        
        
    
}


// ----------------------------------------------------Red Samurai R


class Ground{
    constructor({position}){
        this.position = position;
       
        this.width = 30;
        this.height = 60;
        this.counter = 0;
        this.counter2 = 0;
    }
    draw(){
        c.fillStyle = 'purple';
        c.fillRect(this.position.x,this.position.y,this.width,this.height);
        
        
        c.fill()
        
    }
    update(){
        this.draw()
        this.counter ++;

        if(this.counter % 40  == 0 && this.counter2 <3 ){

            this.position.x += 50 * player1turn
            this.counter2 ++
            if(this.counter2 == 3){
                this.height = 120;
                this.position.y -= 50
                this.width = 50
                
            }
        }
        else if(this.counter == 200 && this.counter2 == 3 ){
            grounds.splice(0,1);
        }
    }
}


//--------------------------------Ground Collision ---------------------------------------//
 function groundcol(){
    grounds.forEach(ground =>{
       
        if(((ground.position.x + ground.width >= enemy.position.x  && ground.position.x  <= enemy.position.x + enemy.width)||
        (ground.position.x <= enemy.position.x + enemy.width && ground.position.x >= enemy.position.x)) &&
        ground.position.y  <= enemy.position.y + enemy.height ){
            console.log('uauza')
        }
            
        
        ground.update();
        })
    
 }






