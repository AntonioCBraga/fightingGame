class Sprite{
    constructor({position,imgSrc,scale = 1,framesMax = 1}){
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
    
    }
    draw(){
       c.drawImage(this.img,
        this.framesCurrent * (this.img.width / this.framesMax),//from here
        0,
        this.img.width / this.framesMax,
        this.img.height,//to here is animation code.

        this.position.x,
        this.position.y,
        (this.img.width /this.framesMax) * this.scale,
        this.img.height * this.scale) 
        
        
    }
    
    update(){
        this.framesElapsed ++;
        if(this.framesElapsed % this.framesHold === 0){
            if(this.framesCurrent < this.framesMax - 1){
                this.framesCurrent ++;
            }
            else{
                this.framesCurrent = 0;
            }
        }
        this.draw()
   
        

    }

}




class Fighter{
    constructor({position,velocity,color = 'red',pl}){
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
        this.pl = pl;
        this.health = 100;
    }
        

    draw(){
        c.fillStyle = this.color;
        c.fillRect(this.position.x,this.position.y,this.width,this.height);
        
        //attackBox
        c.fillStyle ='blue';
        if(this.isAttacking && this.pl == 1){
           
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
        else if(this.isAttacking && this.pl == 2){
            console.log(this.pl)
            if(player1turn == -1){
                c.fillRect(this.attackBox1.position.x,
                    this.attackBox1.position.y,
                    this.attackBox1.width,
                    this.attackBox1.height)
            }
            else if(player1turn == 1){
                c.fillRect(this.attackBox1.position.x - 50,
                    this.attackBox1.position.y,
                    this.attackBox1.width,
                    this.attackBox1.height)
                    
            }
        }
        
        
     
        

       
        

    }
    
    update(){
        this.draw()

        
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





const player = new Fighter({
    position:{
    x:0,
    y:0
    },
    velocity:{
        x:0,
        y:0
    },
    pl:1 
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







//------------------------------------------------p1 && p2------------------------------------------------//
