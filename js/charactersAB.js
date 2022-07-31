//General p1 AA
let p1AAcounter =0;
let p2AAcounter =0;



function aap1(){
     
    if(player.isAttacking){
        if(player.attackBox1.position.x + player.attackBox1.width >= enemy.position.x
            && player.attackBox1.position.x <= enemy.position.x + enemy.width
            && player.attackBox1.position.y + player.attackBox1.height >= enemy.position.y
            &&player.attackBox1.position.y <= enemy.position.y + enemy.height
            && player.isAttacking && player1turn == 1){
            p1AAcounter++;
            
            if(p1AAcounter >= 6){
                enemy.health -= 10;
                document.querySelector('#enemyHealth').style.width = enemy.health +'%'
                p1AAcounter =0;
            }
            
            
        }
        else if(player.attackBox1.position.x + player.attackBox1.width  >= enemy.position.x
            && player.attackBox1.position.x <= enemy.position.x + enemy.width +50
            && player1turn == -1 && player.isAttacking 
            && player.attackBox1.position.y <= enemy.position.y + enemy.height
            && player.attackBox1.position.y + player.attackBox1.height >= enemy.position.y
            ){
                p1AAcounter ++;
                if(p1AAcounter >= 6){
                    
                    enemy.health -= 10;
                    document.querySelector('#enemyHealth').style.width = enemy.health +'%'
                    p1AAcounter =0;
                }
            
        }
     }
    else if(enemy.isAttacking){
        if(enemy.attackBox1.position.x - enemy.attackBox1.width <= player.position.x + player.width
            && enemy.attackBox1.position.y + enemy.attackBox1.height >= player.position.y
            &&enemy.attackBox1.position.y <= player.position.y + player.height
            && enemy.isAttacking && player1turn == 1){
                p2AAcounter ++;
                if(p2AAcounter >= 6){
                    
                    player.health -= 10;
                    document.querySelector('#playerHealth').style.width = player.health +'%'
                    p2AAcounter =0;
                }
        }
        else if(enemy.attackBox1.position.x + enemy.attackBox1.width  >= player.position.x
            && enemy.attackBox1.position.x <= player.position.x + player.width +50
            && player1turn == -1 && enemy.isAttacking 
            && enemy.attackBox1.position.y <= player.position.y + player.height
            && enemy.attackBox1.position.y + enemy.attackBox1.height >= player.position.y
            ){
                p2AAcounter ++;
                if(p2AAcounter >= 6){
                    
                    player.health -= 10;
                    document.querySelector('#playerHealth').style.width = player.health +'%'
                    p2AAcounter =0;
                }
        }

    }
}




//---------------------------------------------------------Red Samurai P1 & P2------------------------------------------------------//

//------------------------------------------------------Ability Variables---------------------------------------------//

const projectiles = []  //projectile  attack
const projectiles2 = [] // projectile p2
const ropes = [] //rope p1 attack
const ropes2 = [] //rope p1 attack
const grounds = []// ground attack
let groundsc1 =0;
let groundsc2 =0;
const grounds2 = []// ground attackp2
// ------------------------------------------------------------Red Samurai Q------------------------------------------------//

class Projectile{
    constructor({position,velocity}){
        this.position = position;
        this.velocity = velocity;
        
        
        this.width = 15;
        this.height = 15;
    }
    draw(){
       
      
        c.fillStyle = 'red';
        c.fillRect(this.position.x,this.position.y,this.width,this.height);
        c.fill();
    }
    update(){
        
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y 
        
        
    }
    
}

//------------------------- PJ Colision--P1------------------//


function projectilecolp1(){
    projectiles.forEach((projectile,index )=> {
        if(p1CharSelect == "redsamurai"){  
            if(projectile.position.x + projectile.radius >= 1024 || projectile.position.x + projectile.radius <= 0  ){
                console.log(projectiles)

                projectiles.splice(index,1)
            }
            else if(projectile.position.y >= distance2Ground || projectile.position.y <=200){
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
let coldred_samurai_Qp1 = 0

function red_samurai_p1Q(){
   if(coldred_samurai_Qp1 == 0){
        coldred_samurai_Qp1 ++;
        if(projectiles.length <3 ){
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
        if(projectiles.length <3 ){
            projectiles.push(new Projectile({
                position: {
                    x:player.position.x  + 20 ,
                    y:player.position.y + 50
                },
                velocity:{
                x: 6.5 * player1turn,
                y:2 * player1turn
                }
            })) 
        }
        if(projectiles.length <3 ){
            projectiles.push(new Projectile({
                position: {
                    x:player.position.x  + 20 ,
                    y:player.position.y + 50
                },
                velocity:{
                x: 6.5 * player1turn,
                y:-2 * player1turn
                }
            })) 
        }
    }
    

}







//------------------------- PJ Colisio--P2------------------//
function projectilecolp2(){
    projectiles2.forEach((projectile,index )=> {
        if(p2CharSelect == "redsamurai"){  
            if(projectile.position.x + projectile.radius >= 1024 || projectile.position.x + projectile.radius <= 0  ){
                console.log(projectiles)
                projectiles2.splice(index,1)
            }
            else if(projectile.position.x + projectile.radius >= player.position.x + 10 
                && projectile.position.x <= player.position.x + player.width
                    &&projectile.position.y + projectile.radius >= player.position.y
                    &&projectile.position.y <= player.position.y + player.height){
                    console.log('hit!')
                    projectiles2.splice(index,1)
                }
            else{
                projectile.update();
            }
        }

        

       
    })
}


// -----------------------------------------------Red Samurai E Rope


//-------------------------------------Rope Col p2

        




// ----------------------------------------------------Red Samurai R


class Ground{
    constructor({position,pl}){
        this.position = position;
       
        this.width = 30;
        this.height = 0;
        this.counter = 0;
        this.counter2 = 0;
        this.pl = pl;
    }
    draw(){
        c.fillStyle = 'purple';
        c.fillRect(this.position.x,this.position.y,this.width,this.height);
        
        
        c.fill()
        
    }
    update(){
        this.draw()
        this.counter += 2;
        if(this.pl == 1){
            groundsc1 ++;

        }
        else if(this.pl == 2){
            groundsc2 ++;
        }
        
         //---------------------------------------------- Work on this
            
        this.height += 1.5;
        this.position.y --;
         
        
        if(this.counter == 100 ){
            this.height =0;
            this.position.y = 576;
            this.counter2 ++;
            this.counter = 0;
            if(this.pl == 2){
                this.position.x = player.position.x + 12 ;
                this.position.y = 576 - 90
            }
            if(this.pl == 1){
                this.position.x = enemy.position.x +12 ;
                this.position.y = 576 - 90
            }
            
            if(this.counter2 == 3 ){
                if(this.pl == 1){

                    grounds.splice(0,1);
                }
                if(this.pl ==2){
                    grounds2.splice(0,1);
                }
            }
            
            
        }
    }
}


//--------------------------------Ground Collision ---------------------------------------//
 function groundcol(){
    grounds.forEach(ground =>{
       
        if(((ground.position.x + ground.width >= enemy.position.x  && ground.position.x  <= enemy.position.x + enemy.width)||
        (ground.position.x <= enemy.position.x + enemy.width && ground.position.x >= enemy.position.x)) &&
        ground.position.y  <= enemy.position.y + enemy.height ){
            
        }
            
        
        ground.update();
        })
    
 }

function groundcolp2(){
    grounds2.forEach(ground =>{
       
        if(((ground.position.x + ground.width >= player.position.x  && ground.position.x  <= player.position.x + player.width)||
        (ground.position.x <= player.position.x + player.width && ground.position.x >= player.position.x)) &&
        ground.position.y  <= player.position.y + player.height ){
            console.log('uauza')
        }
            
        
        ground.update();
        })
    
 }
 


function p1redSamurai(){
    projectilecolp1();
    ropecol();
    groundcol();
    
}

function p2redSamurai(){
    projectilecolp2();
    
    groundcolp2();
}



