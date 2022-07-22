const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;
c.fillRect(0,0,canvas.width,canvas.height);






let counterdjp1 = 0;   //doublejump player1 counter
let counterdjp2 = 0;   //doublejump player2 counter

let p1move =1;
let p2move =1;


const gravity = 0.5;

const projectiles = []


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

        // this.attackBox2 ={
        //     position:this.position,
        //     width: 200,
        //     height: 25
        // }
        this.color = color;
        this.isAttacking
    }

    draw(){
        c.fillStyle = this.color;
        c.fillRect(this.position.x,this.position.y,this.width,this.height);
        
        //attackBox
        c.fillStyle ='blue';
        if(this.isAttacking){
            c.fillRect(this.attackBox1.position.x,this.attackBox1.position.y, this.attackBox1.width,this.attackBox1.height)
        }
        c.fillStyle ='purple';
        
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


//--------------------------------------------------Projectile---------------------------------------------------//
class Projectile{
    constructor({position,velocity}){
        this.position = position;
        this.velocity = velocity;
        this.radius = 15;
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

//----------------------------------------------------Animate--------------------------------------------------------//

let lastKey

function animate(){
    
    window.requestAnimationFrame(animate);
    
    c.fillStyle = 'black';
    c.fillRect(0,0,canvas.width,canvas.height);

    //-------------------------------------------------Updates--------------------------------------------------------//


    player.update();
    enemy.update();

    //---------------------------------------------Player Movement--------------------------------------------------------//
    
    
    player.velocity.x = 0;

    if(keys.a.pressed && player.lastKey ==='a' && p1move ==1){
        if(player.position.x >= 0){
            player.velocity.x = -5;
        }
       
    }
    else if(keys.d.pressed && player.lastKey ==='d' && p1move ==1 ){
        if(player.position.x  + player.width <= 1024){
            player.velocity.x = 5;
        }
    }   
    if(keys.w.pressed ){
        if( counterdjp1 == 1 || counterdjp1 ==3 ){
            
            player.velocity.y = -12.8;
            counterdjp1 ++
        }
    }
    

    if(player.position.y + player.height + player.velocity.y >= canvas.height){
       
        counterdjp1 = 0;
    }

    
     //------------------------------------------Enemy Movement------------------------------------------------//
    enemy.velocity.x = 0;

    if(keys.ArrowLeft.pressed && enemy.lastKey ==='ArrowLeft' && p2move ==1){
        if(enemy.position.x >= 0){
            enemy.velocity.x = -5;
        }
    }
    else if(keys.ArrowRight.pressed && enemy.lastKey ==='ArrowRight' && p2move ==1){
        if(enemy.position.x + enemy.width <= 1024){
            enemy.velocity.x = 5;
        }
    }
    if(keys.ArrowUp.pressed ){
        if( counterdjp2 == 1|| counterdjp2 ==3 ){
            
            enemy.velocity.y = -12.8;
            counterdjp2 ++;
        }
    }


  
    if(enemy.position.y + enemy.height + enemy.velocity.y >= canvas.height){
       
        counterdjp2 = 0;
    }

    //----------------------------------------------Collision Detection---------------------------------------------//
    if(player.attackBox1.position.x + player.attackBox1.width >= enemy.position.x
        && player.attackBox1.position.x <= enemy.position.x + enemy.width
        && player.attackBox1.position.y + player.attackBox1.height >= enemy.position.y
        &&player.attackBox1.position.y <= enemy.position.y + enemy.height
        && player.isAttacking){
        console.log('deded')
    }
//-----------------------------------------------------Pj collision--------------------------------------------------//
    projectiles.forEach((projectile,index )=> {

        if(projectile.position.x + projectile.radius >= 1024 ){
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

       
    })
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
            if(projectiles.length <1 ){
                projectiles.push(new Projectile({
                    position: {
                        x:player.position.x +30,
                        y:player.position.y + 50
                    },
                    velocity:{
                       x:5,
                       y:0 
                    }
                })) 
            }
          
            console.log(player.position.x)
            break;
        
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
    }
    
    
})


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




animate();
