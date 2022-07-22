const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;
c.fillRect(0,0,canvas.width,canvas.height);


let ingame = 0; //change controlls from character select to fighting. to be updated




let counterdjp1 = 0;   //doublejump player1 counter and may help with stun
let counterdjp2 = 0;   //doublejump player2 counter and may help with stun

let player1turn = 1;  // var [-1 || 1] that tells what side to shoot projectile

let unvp1 = 1; // attacks that make you unv
let unvp2 = 2; // attacks that make you unv

let p1move =1;  //tells when player can and cant move
let p2move =1;  //tells when player can and cant move

let getRoped = 0;

const gravity = 0.5;

const projectiles = []  //projectile  attack
const ropes =[] //rope p1 attack


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

//--------------------------------------------------Rope Attack-----------------------------------------------------//

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
        
        
        c.fill()
        
    }
    update(){
        this.draw()
        this.width += this.velocity.x 
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



function animate(){
    
    window.requestAnimationFrame(animate);
    
    c.fillStyle = 'black';
    c.fillRect(0,0,canvas.width,canvas.height);

    //-------------------------------------------------Updates--------------------------------------------------------//

 
    


    player.update();
    enemy.update();

    //---------------------------------------------Player Movement--------------------------------------------------------//
    
    

    if(player.position.x <= enemy.position.x){
        player1turn = 1;
    }
    else{
        player1turn = -1;
    }

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
    if(getRoped != 0){ // i------------------------if gets hit by rope
        
        if(enemy.position.x >= player.position + player.width + 50){
            enemy.velocity.x = 0;
        }
        else{
            enemy.velocity.x -= 4 * player1turn; 
        }

        getRoped ++
        
        if(getRoped >= 80){
            getRoped = 0;
        }
    }
    else if(keys.ArrowLeft.pressed && enemy.lastKey ==='ArrowLeft' && p2move ==1){
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

                                //----------------------p1 AA -------------------------//
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
                                //----------------------Pj collision-----------------------//
    projectiles.forEach((projectile,index )=> {

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

       
    })

                          //------------------------rope collision----------------------------//

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
            
        }
        else {
            rope.update();
        }
    })
                        
                        
        



}   // END OF ANIMATE()


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
                        x:player.position.x +30,
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
            ropes.push(new rope({ //maybe push rope1 as soon as game starts so projectile always stick
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
    }


})

//--------------------------------------------------p2 and p1 keyUP---------------------------------------------------//
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
