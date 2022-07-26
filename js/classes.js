class Sprite{
    constructor({position,imgSrc,scale = 1,framesMax = 1, offset= {x:0, y:0}}){
        this.position = position
        this.width = 50;
        this.height = 150;
        this.image = new Image()
        this.image.src = imgSrc
        this.scale = scale
        this.framesMax = framesMax
        this.framesCurrent =0;
        this.framesElapsed = 0
        this.framesHold = 8
        this.offset = offset
    
    }
    draw(){
       c.drawImage(this.image,
        this.framesCurrent * (this.image.width / this.framesMax),//from here
        0,
        this.image.width / this.framesMax,
        this.image.height,//to here is animation code.
        this.position.x - this.offset.x,
        this.position.y - this.offset.y,
        (this.image.width /this.framesMax) * this.scale,
        this.image.height * this.scale) 
        
        
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
    constructor({position,velocity,color = 'red',pl,imgSrc,scale = 1,framesMax = 1,offset = {x:0, y:0},sprites}){
        super({
            position,
            imgSrc,
            scale,
            framesMax,
            offset,
            
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
        this.sprites = sprites


        //------------------------Animation Machine
        for (const sprite in this.sprites){
            sprites[sprite].image = new Image()
            sprites[sprite].image.src = sprites[sprite].imgSrc
        }
        
    }//2.75 dunno what it was
    switchSprite(sprite){
        if(this.image === this.sprites.attack.image 
            && this.framesCurrent < this.sprites.attack.framesMax -1) return
        
        
        switch(sprite){
            case "idle":
                if(this.image !== this.sprites.idle.image){
                    this.image = this.sprites.idle.image
                    this.framesMax = this.sprites.idle.framesMax;
                    this.framesCurrent = 0;
                }
                
                break;
            case "run":
                if(this.image !== this.sprites.run.image){
                    this.image = this.sprites.run.image
                    this.framesMax = this.sprites.run.framesMax;
                    this.framesCurrent = 0;
                }
                break;
            case "jump":
                if(this.image !== this.sprites.jump.image){
                    this.image = this.sprites.jump.image
                    this.framesMax = this.sprites.jump.framesMax;
                    this.framesCurrent = 0;
                }
                break;
            case "fall":
                if(this.image !== this.sprites.fall.image){
                    this.image = this.sprites.fall.image
                    this.framesMax = this.sprites.fall.framesMax;
                    this.framesCurrent = 0;
                }
                break;
                case "attack":
                if(this.image !== this.sprites.attack.image){
                    this.image = this.sprites.attack.image
                    this.framesMax = this.sprites.attack.framesMax;
                    this.framesCurrent = 0;
                }
                break;
        }
    }
    update(){
        this.draw()
        this.animateFrames();
        
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        
        //-------------------------------Gravity
        if(this.position.y + this.height + this.velocity.y >= canvas.height - 95 ){
            this.velocity.y = 0
            this.position.y = 331

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
    },
    sprites:{
        idle:{
            imgSrc: './img/Red_Samurai/Sprites/idle.png',
            framesMax:4
        },
        run:{
            imgSrc: './img/Red_Samurai/Sprites/run.png',
            framesMax:8
        },
        jump:{
            imgSrc: './img/Red_Samurai/Sprites/jump.png',
            framesMax:2
        },
        fall:{
            imgSrc: './img/Red_Samurai/Sprites/fall.png',
            framesMax:2
        },
        attack:{
            imgSrc: './img/Red_Samurai/Sprites/attack.png',
            framesMax:4
        },
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



