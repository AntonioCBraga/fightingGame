class Sprite{
    constructor({position,imgSrc,scale = 1,framesMax = 1, offset= {x:0, y:0}}){
        this.position = position
        this.width = 50;
        this.height = 150;
        this.img = new Image()
        this.img.src = imgSrc
        this.scale = scale
        this.framesMax = framesMax
        this.framesCurrent =0;
        this.framesElapsed = 0
        this.framesHold = 8
        this.offset = offset
    
    }
    draw(){
       c.drawImage(this.img,
        this.framesCurrent * (this.img.width / this.framesMax),//from here
        0,
        this.img.width / this.framesMax,
        this.img.height,//to here is animation code.
        this.position.x - this.offset.x,
        this.position.y - this.offset.y,
        (this.img.width /this.framesMax) * this.scale,
        this.img.height * this.scale) 
        
        
    }
    animateFrames(){
        this.framesElapsed ++;
        if(this.framesElapsed % this.framesHold === 0){
            if(this.framesCurrent < this.framesMax - 1){
                this.framesCurrent ++;
            }
            else{
                this.framesCurrent = 0;
            }
        }
    }
    update(){
        this.animateFrames();
        this.draw()
   
        

    }

}




class Fighter extends Sprite{
    constructor({position,velocity,color = 'red',pl,imgSrc,scale = 1,framesMax = 1,offset = {x:0, y:0}}){
        super({
            position,
            imgSrc,
            scale,
            framesMax,
            offset,
            sprites
        })

        this.framesCurrent =0;
        this.framesElapsed = 0
        this.framesHold = 8
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
        this.pl = pl;
        this.health = 100;

    }2.75
    update(){
        this.draw()
        this.animateFrames();
        
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if(this.position.y + this.height + this.velocity.y >= canvas.height - 95 ){
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

//---------------------------------------------------Background
const background = new Sprite({
    position:{
        x:0,
        y:0
    },
    imgSrc: './img/background.png'
})


const shop = new Sprite({
    position:{
        x:600,
        y:130
    },
    imgSrc: './img/shop.png',
    scale:2.75,
    framesMax: 6
})

//--------------------------------------------------Players



const player = new Fighter({
    position:{
    x:0,
    y:0
    },
    velocity:{
        x:0,
        y:0
    },
    pl:1 ,
    imgSrc: './img/Red_Samurai/Sprites/Idle.png',
    scale:2.05,
    framesMax: 4,
    offset:{
        x:190,
        y:115
    }
})



const enemy = new Fighter({
    position:{
    x:400,
    y:100
    },
    velocity:{
        x:0,
        y:0
    },
    color: 'blue',
    pl:2 
})



