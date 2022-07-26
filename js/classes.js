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
    //-------------------------------------ANIMATIONS---------------------------------//
    switchSprite(sprite){
        if(this.image === this.sprites.attackR.image 
            && this.framesCurrent < this.sprites.attackR.framesMax -1 
            && player1turn ==1) {return}
        else if(this.image === this.sprites.attackR.image 
            && this.framesCurrent < this.sprites.attackR.framesMax -1 
            && player1turn ==-1 && this.pl ==2) {return}
        else if(this.image === this.sprites.attackL.image 
            && this.framesCurrent < this.sprites.attackL.framesMax -1 
            && player1turn == -1) {return}
        else if(this.image === this.sprites.attackL.image 
                && this.framesCurrent < this.sprites.attackL.framesMax -1 
                && player1turn == 1&& this.pl ==2) {return}
        else if(this.image === this.sprites.abilityQR.image 
            && this.framesCurrent < this.sprites.abilityQR.framesMax -1 
            && player1turn == 1) return
        else if(this.image === this.sprites.abilityQL.image 
            && this.framesCurrent < this.sprites.abilityQL.framesMax -1 
            && player1turn == -1) return
    
        
        
        switch(sprite){
            case "idleR":
                if(this.image !== this.sprites.idleR.image){
                    this.image = this.sprites.idleR.image
                    this.framesMax = this.sprites.idleR.framesMax;
                    this.framesCurrent = 0;
                }
                break;
            case "idleL":
                if(this.image !== this.sprites.idleL.image){
                    this.image = this.sprites.idleL.image
                    this.framesMax = this.sprites.idleL.framesMax;
                    this.framesCurrent = 0;
                }
            
            break;
            case "runR":
                if(this.image !== this.sprites.runR.image){
                    this.image = this.sprites.runR.image
                    this.framesMax = this.sprites.runR.framesMax;
                    this.framesCurrent = 0;
                }
                break;
            case "runL":
                if(this.image !== this.sprites.runL.image){
                    this.image = this.sprites.runL.image
                    this.framesMax = this.sprites.runL.framesMax;
                    this.framesCurrent = 0;
                }
                break;
            case "jumpR":
                if(this.image !== this.sprites.jumpR.image){
                    this.image = this.sprites.jumpR.image
                    this.framesMax = this.sprites.jumpR.framesMax;
                    this.framesCurrent = 0;
                }
                break;
            case "jumpL":
                if(this.image !== this.sprites.jumpL.image){
                    this.image = this.sprites.jumpL.image
                    this.framesMax = this.sprites.jumpL.framesMax;
                    this.framesCurrent = 0;
                }
                break;
            case "fallR":
                if(this.image !== this.sprites.fallR.image){
                    this.image = this.sprites.fallR.image
                    this.framesMax = this.sprites.fallR.framesMax;
                    this.framesCurrent = 0;
                }
                break;
            case "fallL":
                if(this.image !== this.sprites.fallL.image){
                    this.image = this.sprites.fallL.image
                    this.framesMax = this.sprites.fallL.framesMax;
                    this.framesCurrent = 0;
                }
                break;
                case "attackR":
                if(this.image !== this.sprites.attackR.image){
                    this.image = this.sprites.attackR.image
                    this.framesMax = this.sprites.attackR.framesMax;
                    this.framesCurrent = 0;
                }
                break;
            case "attackL":
                if(this.image !== this.sprites.attackL.image){
                    this.image = this.sprites.attackL.image
                    this.framesMax = this.sprites.attackL.framesMax;
                    this.framesCurrent = 0;
                }
                break;
            case "abilityQR":
                if(this.image !== this.sprites.abilityQR.image){
                    this.image = this.sprites.abilityQR.image
                    this.framesMax = this.sprites.abilityQR.framesMax;
                    this.framesCurrent = 0;
                }
                break;
            case "abilityQL":
                if(this.image !== this.sprites.abilityQL.image){
                    this.image = this.sprites.abilityQL.image
                    this.framesMax = this.sprites.abilityQL.framesMax;
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
        console.log(this.pl)
        if(this.pl == 1){
            animationTurns(player,'attack');
        }
        else{
            animationTurns(enemy,'attack');
        }
        this.isAttacking = true;
        setTimeout(()=>{
            this.isAttacking = false;
        },100)
    }

}






