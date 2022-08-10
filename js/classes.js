class Sprite{
    constructor({position,velocity = {x:0,y:0},framesHold = 8,ColAnim = 0,width = 50,height = 150 ,imgSrc = "",scale = 1,framesMax = 1, offset= {x:0, y:0}}){
        this.position = position
        this.velocity = velocity
        this.width = width;
        this.height = height;
        this.image = new Image()
        this.image.src = imgSrc
        this.scale = scale
        this.framesMax = framesMax
        this.framesCurrent =0;
        this.framesElapsed = 0
        this.framesHold = framesHold
        this.offset = offset
        this.ColAnim = ColAnim
    }
    drawe(){
        if(this.ColAnim ==1){
            c.fillStyle = 'red';
            c.fillRect(this.position.x,this.position.y,this.width,this.height);
            c.fill();
        }
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
        this.draw();
        this.drawe();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        

    }

}




class Fighter extends Sprite{
    constructor({position,velocity,framesHold = 8,color = 'red',pl,imgSrc,scale = 1,framesMax = 1,offset = {x:0, y:0},sprites}){
        super({
            position,
            imgSrc,
            scale,
            framesMax,
            offset,
            
        })
        
        this.framesCurrent =0;
        this.framesElapsed = 0
        this.framesHold = framesHold
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
        
        if(this.image === this.sprites.attackR.image   // p1 AAR
            && this.framesCurrent < this.sprites.attackR.framesMax -1 
            && (player1turn == 1 ||  p1doingAAR == false) && this.pl ==1) {
                p1doingAAR = false
                p1Animating = true;
                p1AnimationStun = 1;
                
                if(this.framesCurrent == this.sprites.attackR.framesMax -2 ){
                   
                    p1Animating = false;
                    p1AnimationStun = 0;
                    p1doingAAR = false;
                    rs_AA_col(enemy,rs_aa_p1)
                }

               
                return}
        else if(this.image === this.sprites.attackR.image  //p2 AAR
            && this.framesCurrent < this.sprites.attackR.framesMax -1 
            && (player2turn == 1 || p2doingAAR == false) && this.pl ==2) {
                p2Animating = true;
                console.log('ugabuga')
                p2AnimationStun = 1;
                p2doingAAR = false;
                if(this.framesCurrent == this.sprites.attackR.framesMax -2 ){
                    p2Animating = false;
                    p2AnimationStun = 0;
                    p2doingAAR = false;
                    rs_AA_col(player,rs_aa_p2)
                }

               

                return}
        else if(this.image === this.sprites.attackL.image // p1 AAL
            && this.framesCurrent < this.sprites.attackL.framesMax -1 
            && (player1turn == -1  || p2doingAAL == false) && this.pl == 1) {
                p1doingAAL = false;
                p1Animating = true;
                p1AnimationStun = 1;
                if(this.framesCurrent == this.sprites.attackL.framesMax -2 ){
                    p1Animating = false;
                    p1AnimationStun = 0;
                    p1doingAAL = false;
                    rs_AA_col(enemy,rs_aa_p1)
                    
                }
               
                return}
        else if(this.image === this.sprites.attackL.image // p2 AAL
                && this.framesCurrent < this.sprites.attackL.framesMax -1 
                &&  (player2turn == -1 ||  p2doingAAL == false ) && this.pl ==2) {
                    
                    p2doingAAL = false;
                    p2Animating = true;
                    p2AnimationStun = 1
                    
                    if(this.framesCurrent == this.sprites.attackL.framesMax -2){
                        p2Animating = false;
                        p2AnimationStun = 0
                        p2doingAAL = false;
                        rs_AA_col(player,rs_aa_p2)
                    }

                   
                    return}
        else if(this.image === this.sprites.abilityQR.image  //p1 QR
            && this.framesCurrent < this.sprites.abilityQR.framesMax -1 
            && (player1turn == 1 || p1Animating == true)) {
                p1Animating = true;
                p1AnimationStun = 1
                if(this.framesCurrent == this.sprites.abilityQR.framesMax -2){
                    p1Animating = false;
                    p1AnimationStun = 0
                }
                
                return
            }
        else if(this.image === this.sprites.abilityQL.image // p1 QL
            && this.framesCurrent < this.sprites.abilityQL.framesMax -1 
            &&( player1turn == -1 || p1Animating == true)) {
                p1Animating = true;
                p1AnimationStun = 1
                if(this.framesCurrent == this.sprites.abilityQL.framesMax -2){
                    p1Animating = false;
                    p1AnimationStun = 0
                }
                return}
        else if(this.image === this.sprites.abilityQR.image  //p2 QR
            && this.framesCurrent < this.sprites.abilityQR.framesMax -1 
            && (player2turn == 1 || p2Animating == true )&& this.pl ==2 ) {
                p2Animating = true;
                p2AnimationStun = 1;
                if(this.framesCurrent == this.sprites.abilityQR.framesMax -2){
                    p2Animating = false;
                    p2AnimationStun = 0
                }
                return}
        else if(this.image === this.sprites.abilityQL.image  // p2 QL
            && this.framesCurrent < this.sprites.abilityQL.framesMax -1 
            && (player2turn == -1 || p2Animating == true )&& this.pl ==2) {
                p2Animating = true;
                p2AnimationStun = 1
                if(this.framesCurrent == this.sprites.abilityQL.framesMax -2){
                    p2Animating = false;
                    p2AnimationStun = 0
                }
                return}   
       else if(this.image === this.sprites.abilityER.image //p1 ER
            && this.framesCurrent < this.sprites.abilityER.framesMax -1 
            && (player1turn ==1 || p1Animating == true )&& this.pl == 1) {
                p1Animating = true;
                p1AnimationStun = 1 ;
                
               

                if(p1Animrope == true ){
                    this.framesCurrent = 4;
                }
                else if(p1Animrope == false  ){
                   
                    p1AnimationStun = 0;
                    p1Animating = false;
                    this.framesCurrent = this.sprites.abilityER.framesMax -1
                    
                }

                if(p1Colwall == true ){

                    p1AnimationStun = 0;
                    p1Animating = false;
                    this.framesCurrent = this.sprites.abilityER.framesMax -1
                    p1Colwall = false;
                }

               
                return
            }
        else if(this.image === this.sprites.abilityEL.image // p1 EL
            && this.framesCurrent < this.sprites.abilityEL.framesMax -1 
            && this.pl == 1){
                p1Animating = true;
                p1AnimationStun  = 1;
                if(p1Animrope == true ){
                    this.framesCurrent = 4;
                }
                else if(p1Animrope == false  ){
                    p1AnimationStun = 0;
                    p1Animating = false;
                    this.framesCurrent = this.sprites.abilityEL.framesMax -1
                    
                }

                if(p1Colwall == true ){

                    p1AnimationStun = 0;
                    p1Animating = false;
                    this.framesCurrent = this.sprites.abilityEL.framesMax -1
                    p1Colwall = false;
                }
                return
            }    
        else if(this.image === this.sprites.abilityER.image // p2 ER
            && this.framesCurrent < this.sprites.abilityER.framesMax -1 
            && player2turn ==1 && this.pl == 2) {
                p2Animating = true;
                p2AnimationStun = 1;
                if(p2Animrope == true ){
                    this.framesCurrent = 4;
                }
                else if(p2Animrope == false  ){
                    p2AnimationStun = 0;
                    p2Animating = false;
                    this.framesCurrent = this.sprites.abilityER.framesMax -1
                    
                }

                if(p2Colwall == true){
                    p2AnimationStun = 0;
                    p2Animating = false;
                    this.framesCurrent = this.sprites.abilityER.framesMax -1
                    p2Colwall = false;
                }
                
                return
            }
        else if(this.image === this.sprites.abilityEL.image// p2 EL
            && this.framesCurrent < this.sprites.abilityEL.framesMax -1 
            && this.pl == 2 && player2turn == -1){
                p2Animating = true;
                p2AnimationStun = 1; 
                if(p2Animrope == true ){
                    this.framesCurrent = 4;
                }
                else if(p2Animrope == false  ){
                    p2AnimationStun = 0;
                    p2Animating = false;
                    this.framesCurrent = this.sprites.abilityEL.framesMax -1
                    
                }
                if(p2Colwall == true){
                    p2AnimationStun = 0;
                    p2Animating = false;
                    this.framesCurrent = this.sprites.abilityEL.framesMax -1
                    p2Colwall = false 
                }

                return
            }    
        else if(this.image === this.sprites.abilityRR.image// p1 RR
            && this.framesCurrent < this.sprites.abilityRR.framesMax -1 
            && this.pl == 1 && player1turn == 1){
                p1Animating = true;
                p1AnimationStun = 1; 
                if(this.framesCurrent == this.sprites.abilityRR.framesMax -2){
                    p1Animating = false;
                    p1AnimationStun = 0;
                }
                return
            }
        else if(this.image === this.sprites.abilityRL.image// p1 RL
            && this.framesCurrent < this.sprites.abilityRL.framesMax -1 
            && this.pl == 1 && player1turn == -1){
                p1Animating = true;
                p1AnimationStun = 1; 
                if(this.framesCurrent == this.sprites.abilityRL.framesMax -2){
                    p1Animating = false;
                    p1AnimationStun = 0;
                }
                return
            }   
        else if(this.image === this.sprites.abilityRL.image// p2 RL
            && this.framesCurrent < this.sprites.abilityRL.framesMax -1 
            && this.pl == 2 && player2turn == -1){
                p2Animating = true;
                p2AnimationStun = 1; 
                if(this.framesCurrent == this.sprites.abilityRL.framesMax -2){
                    p2Animating = false;
                    p2AnimationStun = 0;
                }
                return
            }     
        else if(this.image === this.sprites.abilityRR.image// p2 RR
            && this.framesCurrent < this.sprites.abilityRR.framesMax -1 
            && this.pl == 2 && player2turn == 1){
                p2Animating = true;
                p2AnimationStun = 1; 
                if(this.framesCurrent == this.sprites.abilityRR.framesMax -2){
                    p2Animating = false;
                    p2AnimationStun = 0;
                }
                return
            }    






        
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
            case "abilityER":
                if(this.image !== this.sprites.abilityER.image){
                    this.image = this.sprites.abilityER.image
                    this.framesMax = this.sprites.abilityER.framesMax;
                    this.framesCurrent = 0;
                }
                break;
            case "abilityEL":
                if(this.image !== this.sprites.abilityEL.image){
                    this.image = this.sprites.abilityEL.image
                    this.framesMax = this.sprites.abilityEL.framesMax;
                    this.framesCurrent = 0;
                }
                break;
            case "abilityRR":
                if(this.image !== this.sprites.abilityRR.image){
                    this.image = this.sprites.abilityRR.image
                    this.framesMax = this.sprites.abilityRR.framesMax;
                    this.framesCurrent = 0;
                }
                break;
            case "abilityRL":
                if(this.image !== this.sprites.abilityRL.image){
                    this.image = this.sprites.abilityRL.image
                    this.framesMax = this.sprites.abilityRL.framesMax;
                    this.framesCurrent = 0;
                }
                break;
            case "stunnedR":{
                if(this.image !== this.sprites.stunnedR.image){
                    this.image = this.sprites.stunnedR.image
                    this.framesMax = this.sprites.stunnedR.framesMax;
                    this.framesCurrent = 0;
                }
                break;
            }
            case "stunnedL":{
                if(this.image !== this.sprites.stunnedL.image){
                    this.image = this.sprites.stunnedL.image
                    this.framesMax = this.sprites.stunnedL.framesMax;
                    this.framesCurrent = 0;
                }
                break;
            }
        }
    }
    update(){
        this.draw()
        this.animateFrames();
        
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        
        //-------------------------------Gravity
        if(this.position.y + this.height + this.velocity.y >= distance2Ground ){
            this.velocity.y = 0
            this.position.y = playerMinHeight;

        }
        else{
            this.velocity.y += gravity;
        }

    }
   

}


//-------------------------------------------------------------------------------------------Ability----------------------------------------------------------------------------------------------------//






