
//--------------------------------------------------------_RS = red samurai

let p1Q = []
let p2Q = []








//--------------------------------------------------------------------------------------------------------AA--------------------------------------------------------------------------------------------------------
let rs_aa_p1 = []
let rs_aa_p2 = []

function rs_AA(fighter,playerTurn,arr){
    
    let distance = 0;
    
    if(fighter.pl == 1 && playerTurn == 1){
        distance = fighter.width ;
    }

    if(fighter.pl == 2 && playerTurn == 1){
        distance = fighter.width
    }

    arr.push(new Sprite({
        position:{
            x:fighter.position.x + distance  ,
            y:fighter.position.y + 40 
        },
        velocity:{
            x:0 * playerTurn,
            y:0
        },
        width:135 * playerTurn,
        height:fighter.height - 40,
    })
    )
}


//add all types of possible collisions manualy.

let rs_AACDp1 = 0;
let rs_AACDp2 = 0;

function rs_AAp1(){
    rs_AACDp1 ++;
    if(rs_AACDp1 == 95){
        rs_AACDp1 = 0;
    }
}
function rs_AAp2(){
    rs_AACDp2 ++;
    if(rs_AACDp2 == 95){
        rs_AACDp2 = 0;
    }
}


function rs_AA_col(fighterRival,arr){
    arr.forEach((projectile,index )=> { 

           if(player1turn == 1 && fighterRival.pl == 2){ //p1
                if(projectile.position.x + projectile.width >= fighterRival.position.x
                    && projectile.position.x <= fighterRival.position.x + fighterRival.width
                    && projectile.position.y + projectile.height >= fighterRival.position.y
                    &&projectile.position.y <= fighterRival.position.y + fighterRival.height)
                        
                        
                        if(fighterRival === enemy){
                            enemy.health -= 10;
                            document.querySelector('#enemyHealth').style.width = enemy.health +'%'
                        }
                        
                    
                }
            else if(player1turn == -1 && fighterRival.pl == 2){ //p1
                if(player.position.x - projectile.width >= fighterRival.position.x
                   && player.position.x - 135 <= fighterRival.position.x + fighterRival.width
                   && projectile.position.y + projectile.height >= fighterRival.position.y
                   &&projectile.position.y <= fighterRival.position.y + fighterRival.height){
                    console.log(projectile.position.y)
                    console.log(fighterRival.position.y)
                        console.log('what')
                        if(fighterRival === enemy){
                            enemy.health -= 10;
                            document.querySelector('#enemyHealth').style.width = enemy.health +'%'
                        }
                    }   
                   
                       
                    
            }
            else if (player2turn == 1 && fighterRival.pl == 1){ // player 2
                if(projectile.position.x + projectile.width >= fighterRival.position.x
                    && projectile.position.x <= fighterRival.position.x + fighterRival.width
                    && projectile.position.y + projectile.height >= fighterRival.position.y
                    &&projectile.position.y <= fighterRival.position.y + fighterRival.height){
                        if(fighterRival === player){
                            player.health -= 10;
                            document.querySelector('#playerHealth').style.width = player.health +'%'
                        }
                    }
            }
            else if (player2turn == -1 && fighterRival.pl ==1){ // player 2
                if(enemy.position.x - projectile.width >= fighterRival.position.x
                    && enemy.position.x - 135 <= fighterRival.position.x + fighterRival.width
                    && projectile.position.y + projectile.height >= fighterRival.position.y
                    &&projectile.position.y <= fighterRival.position.y + fighterRival.height){
                        
                        
                        if(fighterRival === player){
                            player.health -= 10;
                            document.querySelector('#playerHealth').style.width = player.health +'%'
                    }
                
                }
            }
            arr.splice(index,1)
                
    })
    
}







function Q_col(arr,fighter){
    arr.forEach((projectile,index )=> {
        if(p1CharSelect == "redsamurai"){  
            if(projectile.position.x + projectile.radius >= 1024 || projectile.position.x + projectile.radius <= 0  ){
                arr.splice(index,1)   
            }
            else if(projectile.position.y >= distance2Ground || projectile.position.y <=0){
                arr.splice(index,1)
            }
            else if(collision(projectile,fighter)){
                        arr.splice(index,1)
                        if(fighter === enemy){
                            enemy.health -= 10;
                            document.querySelector('#enemyHealth').style.width = enemy.health +'%'
                        }
                        else{
                            player.health -= 10;
                            document.querySelector('#playerHealth').style.width = player.health +'%'
                        }

                }
            else{
                projectile.update();
            }
        }
    })
}
//-----------------------------------------------------------------Ability Q

function rs_Q(fighter,playerTurn,arr){
        arr.push(new Sprite({
            position:{
                x:fighter.position.x + 20 * playerTurn,
                y:fighter.position.y  + 54 
            },
            velocity:{
                x:8 * playerTurn,
                y:0
            },
            offset:{
                x: 8,
                y:10
            },
            imgSrc: './img/Red_Samurai/Sprites/abilityQ/kunai.png',
            scale:1,
            framesMax: 6,
            framesHold: 1,
            width:15,
            height:12,
        })
    )
        arr.push(new Sprite({
            position:{
                x:fighter.position.x + 20 *playerTurn,
                y:fighter.position.y  + 50
            },
            velocity:{
                x:8 * playerTurn,
                y: 3.5
            },
            offset:{
                x: 8,
                y:10
            },
            imgSrc: './img/Red_Samurai/Sprites/abilityQ/kunai.png',
            scale:1,
            framesMax: 6,
            framesHold: 1,
            width:15,
            height:12,
        })
    )
        arr.push(new Sprite({
            position:{
                x:fighter.position.x + 20 * playerTurn,
                y:fighter.position.y  + 50
            },
            velocity:{
                x:8 * playerTurn,
                y: -3.5
            },
            offset:{
                x: 8,
                y:10
            },
            imgSrc: './img/Red_Samurai/Sprites/abilityQ/kunai.png',
            scale:1,
            framesMax: 6,
            framesHold: 1,
            width:15,
            height:12,
        })
    )
}


let rs_CDQp1 = 0;
  
function rs_CDQP1(){
    rs_CDQp1 ++
    
    if(rs_CDQp1 == 170){
        rs_CDQp1 =0;
    }


    return
}

let rs_CDQp2 = 0;

function rs_CDQP2(){
    rs_CDQp2 ++
    
    if(rs_CDQp2 == 170){
        rs_CDQp2 =0;
    }

  
    return
}


//-------------------------------------------------------------------------Abilti Rope
let p1E1 = []
let p1E2 = []
let p2E1 = []
let p2E2 = []
//

function rs_E(fighter,playerTurn,arr ,arr2){
    let distance = 0
    let distance2 = 0
    if(playerTurn == 1){
        distance = 20;
        distance2 = 40
    }
    else{
        distance = 0;
        distance2 = +10
    }

    if(fighter == player ){
        if(player1turn == 1){
            sideRope ='./img/Red_Samurai/Sprites/kunaiwithRope/ropeshuriken.png'
        }
        else {
            sideRope ='./img/Red_Samurai/Sprites/kunaiwithRope/ropeshurikenL.png'
        }
    }
    else{
        if(player2turn == -1){
            sideRope ='./img/Red_Samurai/Sprites/kunaiwithRope/ropeshurikenL.png'
        }
        else {
            sideRope ='./img/Red_Samurai/Sprites/kunaiwithRope/ropeshuriken.png'
        }
    }

        arr.push(new Sprite({
            position:{
                x:fighter.position.x + distance2,
                y:fighter.position.y  + 72
            },
            velocity:{
                x:8 * playerTurn,
                y:0
            },
            offset:{
                x: 8,
                y:10
            },
            imgSrc: sideRope,
            scale:1,
            framesMax: 8,
            framesHold: 16,
            width:35,
            height:25,
           
        }))
        arr2.push(new rope({ 
            position:{
                x:fighter.position.x + distance,
                y:fighter.position.y + 82
            },
            velocity:{
                x: 8 * playerTurn,
                y:0
            },
            width: 1,
           
        
        }))
}



class rope{
    constructor({position,velocity}){
        this.position = position;
        this.velocity = velocity;
        this.width = 30;
        this.height = 6;
    }
    draw(){
        c.fillStyle = 'brown';
        c.fillRect(this.position.x,this.position.y,this.width,this.height);
        c.fill();
        
    }
    update(){
        this.draw();
        this.width += this.velocity.x;
    }
    deupdate(){
        this.draw();
       
        this.width -= this.velocity.x / 2
        
       
    }
}
//-------------------------------------------------------------------Gotta make 1 collision detection for each dont know why 
function E_colp1(arr,arr2){
    arr.forEach((rope,index ) =>{
      
        if(rope.position.x + rope.width >= 1024 || rope.position.x + rope.width <= 0  ){
            if(arr2[0] != undefined){
                arr2.splice(0,1);
                
            }
            arr.splice(index,1)
           
        }
        else if(collision(rope,enemy)){
            console.log('hello')
            
            arr.splice(index,1);
            p1Animrope = true;
            getRoped1 =1 ;
            p1AnimationStun  = 1;
            p2stunned =1;
            
            
       
        }
        else {
            if(arr2.length >1){
                arr2.splice(0,1);
                
            }
            if(arr2[0]!= undefined){
                arr2[0].update()
            }
           
            rope.update()

        }
    })
    if(getRoped1 != 0 ){ // i------------------------if gets hit by rope
        if(getRoped1 == 1 &&  getRoped2 ==1){
            
            arr2.splice(1,1);
            p1AnimationStun = 0;
            p2stunned = 0;
            getRoped1 = 0;
            getRoped2 = 0;
            return;
        }
        
        if(player1turn == 1){    
            
            if(enemy.position.x > player.position.x + player.width  && p2stunned == 1){
                enemy.velocity.x -= 4 * player1turn; 
                p1AnimationStun = 1;
                p2stunned = 1;
             
                if(arr2[0].width + arr2[0].position.x - enemy.position.x  < 0  ){
                    
                    arr2[0].width ++
                }
                else if(arr2[0].width + arr2[0].position.x - enemy.position.x  > 0){
                    arr2[0].width --;
                }


                if(arr2[0]!= undefined){
                   
                   
                    arr2[0].deupdate()
                    
                }
            }
            else if(p2stunned >= 1) {
                if(arr2[0] != undefined){
                    arr2.splice(0,1);
                }
                p2stunned ++;
                p1AnimationStun = 0;
                p1Animrope = false;
                if(p2stunned == 75){//stun duration
                    p1AnimationStun = 0;
                    p2stunned = 0;
                    getRoped1 = 0;    
                    p1Animrope = true;
                    if(arr2[0] != undefined){
                        arr2.splice(0,1);
                    }         
                }
            
            }
        }
        else if(player1turn == -1){
            if(enemy.position.x + enemy.width < player.position.x && p2stunned == 1){
                enemy.velocity.x -= 4 * player1turn; 
                p1AnimationStun = 1;
                p2stunned = 1;
                
                
                let x = arr2[0].width + arr2[0].position.x - (enemy.position.x + enemy.width) // atatches rope to enemy.
                if(arr2[0].width + arr2[0].position.x > (enemy.position.x + enemy.width)    ){
                    console.log('wah')
                    arr2[0].width  -= x * 2.5; // dont ask me why 2.5 ...
                }
             

                if(arr2[0]!= undefined){
                    arr2[0].deupdate()
                }
                
            }
            else if(p2stunned >= 1){
                if(arr2[0] != undefined){
                    arr2.splice(0,1);
                }
                p1Animrope = false;
                p2stunned ++;
                p1AnimationStun = 0;
                if(p2stunned == 75){ //stun duration
                    p1AnimationStun = 0;
                    p2stunned = 0;
                    getRoped1 = 0;   
                    p1Animrope = true;
                    if(arr2[0] != undefined){
                        arr2.splice(0,1);
                    }          
                }
            }

        }

    }

}

        
    
function E_colp2(arr,arr2){
    arr.forEach((rope,index ) =>{
        if(rope.position.x + rope.width >= 1024 || rope.position.x + rope.width <= 0  ){
            if(arr2[0] != undefined){
                arr2.splice(0,1);
            }
            arr.splice(index,1)
           
        }
        else if(collision(rope,player)){
            arr.splice(index,1);         
            getRoped2 =1;
            p1stunned = 1;
            p2AnimationStun = 1;
            p2Animrope = true;
        }
        else {
            if(arr2.length >1){
                arr2.splice(0,1);
                
            }
            if(arr2[0]!= undefined){
                arr2[0].update()
            }
            
            rope.update()
 
        }
    })

    if(getRoped2 != 0 ){ // i------------------------if gets hit by rope
        if(getRoped1 == 1 &&  getRoped2 ==1){
            p1stunned = 0;
            p2AnimationStun  = 0;
            getRoped2 = 0;
            getRoped1 = 0;
            return;
        }
        if(player2turn == 1){    
            
            if(player.position.x > enemy.position.x + enemy.width && p1stunned == 1){
                player.velocity.x -= 4 * player2turn; 
                p2AnimationStun = 1;
                p1stunned = 1;
                if(arr2[0].width + arr2[0].position.x - player.position.x  < 0  ){
                    
                    arr2[0].width ++
                }
                else if(arr2[0].width + arr2[0].position.x - enemy.position.x  > 0){
                    arr2[0].width --;
                }
                if(arr2[0]!= undefined){
                    arr2[0].deupdate()
                }
            }
            else if (p1stunned >= 1){
                if(arr2[0] != undefined){
                    arr2.splice(0,1);
                }
                p2Animrope = false;
                p1stunned ++;
                p2AnimationStun = 0;
                if(p1stunned == 75){ //stun duration
                    p1stunned = 0;
                    p2AnimationStun  = 0;
                    getRoped2 = 0;  
                    p2Animrope = true;
                    if(arr2[0] != undefined){
                        arr2.splice(0,1);
                    }      
                }
            
            }
        }
        else if(player2turn == -1){
            if(player.position.x + player.width < enemy.position.x && p1stunned == 1){
                player.velocity.x -= 4 * player2turn; 
                p2AnimationStun = 1;
                p1stunned = 1;
                

                let x = arr2[0].width + arr2[0].position.x - (player.position.x + player.width) // atatches rope to enemy.
                if(arr2[0].width + arr2[0].position.x > (player.position.x + player.width)    ){
                    console.log('wah')
                    arr2[0].width  -= x * 2.5; // dont ask me why 2.5 ...
                }
                if(arr2[0]!= undefined){
                    arr2[0].deupdate()
                }
                
            }
            else if(p1stunned >= 1){
                if(arr2[0] != undefined){
                    arr2.splice(0,1);
                }
                p2Animrope = false;
                p1stunned ++;
                p2stunned = 0;
                p2AnimationStun = 0;
                if(p1stunned == 75){ //stun duration
                    p1stunned = 0;
                    getRoped2 = 0;
                    p2AnimationStun  = 0;  
                    p2stunned = 0;  
                    p2Animrope = true; 
                    if(arr2[0] != undefined){
                        arr2.splice(0,1);
                    }        
                }
            }

        }

    }

}


let rs_CDEp1 = 0;

function rs_CDEP1(){
    rs_CDEp1 ++
    
    if(rs_CDEp1 == 600){
        rs_CDEp1 =0;
    }
    return
}


let rs_CDEp2 = 0;

function rs_CDEP2(){
    rs_CDEp2 ++
    
    if(rs_CDEp2 == 600){
        rs_CDEp2 =0;
    }
    return
}



//-----------------------------------------------------------Ability R

let p1R = []
let p2R = []

function rs_R(enemy,arr){

    let compensation = 0
    if(enemy.velocity.x > 0){
        compensation = 100;
    }
    else if(enemy.velocity.x < 0){
        compensation = -80
    }

        arr.push(new Sprite({
            position:{
                x:enemy.position.x +2 + compensation ,
                y:  playerMinHeight + enemy.height - 45
            },
            velocity:{
                x:0,
                y:0
            },
            offset:{
                x:25,
                y:0
            },
            imgSrc:'./img/Red_Samurai/Sprites/ground/HalloweenVfxshorter.png' ,
            scale:1.5,
            framesMax: 11,
            framesHold: 4,
            width:20,
            height:40,
            //ColAnim:1,
        }))

}

let rs_cRp1 = 0;
let rs_cRp12 =0;
let rs_cR123 =0;


let counter_Rp1 = 0;


function R_colp1(fighterRival,arr){
 
    
    arr.forEach((knife ) =>{
        knife.update()
        if(collision(knife,fighterRival) && knife.framesCurrent >= 7 && knife.framesCurrent <= 9 ){
            counter_Rp1 ++;
            console.log(counter_Rp1)
            if(counter_Rp1 == 8){
                enemy.health -= 10;
                document.querySelector('#enemyHealth').style.width = enemy.health +'%'
                
            }
            
        }
        if(knife.framesCurrent === knife.framesMax -1){
            rs_cRp1 ++; // goes 6 each time
          
        
        }

        if(rs_cRp1 == 3){
            counter_Rp1 = 0
            arr.splice(0,1)
            rs_cRp1 = 0;
            rs_cRp12 ++;
            rs_cR123 ++;
        }
        
  
    })
    if(rs_cRp12 == 1 ){
        
        rs_R(enemy,p1R)
        rs_cRp12 = 0
        if(rs_cR123 == 3){ //number of repetitions
            arr.splice(0,1)
            rs_cR123 = 0;
        }
        
    }
}

let rs_cRp2 = 0;
let rs_cRp22 =0;
let rs_cR223 =0;


let counter_Rp2 = 0;

function R_colp2(fighterRival,arr){
    
    arr.forEach((knife ) =>{
        knife.update()
        if(collision(knife,fighterRival) && knife.framesCurrent >= 7 && knife.framesCurrent <= 9 ){
            counter_Rp2 ++
            if(counter_Rp2  == 8){
                player.health -= 10;
                document.querySelector('#playerHealth').style.width = player.health +'%'
            }

            
        }
        if(knife.framesCurrent === knife.framesMax -1){
            rs_cRp2 ++; // goes 6 each time
            console.log(rs_cRp1)
        }

        if(rs_cRp2 == 3){
            counter_Rp2 = 0
            arr.splice(0,1)
            rs_cRp2 = 0;
            rs_cRp22 ++;
            rs_cR223 ++;
        }
  
    })
    if(rs_cRp22 == 1 ){ 
        rs_R(player,p2R)
        rs_cRp22 = 0
        if(rs_cR223 == 3){ //number of repetitions
            arr.splice(0,1)
            rs_cR223 = 0;
        }
        
    }
}



//-------------------------------------------------------------Delay and cooldownSystem

let rs_delayRp1 = 0;
let rs_cdRp1 = 0;


let rs_delayRp2 = 0;
let rs_cdRp2 = 0;





function rs_DelaysP1(){
    rs_cdRp1 ++;
    rs_delayRp1 ++
    
    if(rs_delayRp1 == 30){
        rs_R(enemy,p1R)
    }

    if(rs_cdRp1 == 480){
        rs_cdRp1= 0;
        rs_delayRp1 =0;
    }

  
    return
}



function rs_DelaysP2(){
    rs_cdRp2 ++;
    rs_delayRp2 ++
    
    if(rs_delayRp2 == 30){
        rs_R(player,p2R)
    }

    if(rs_cdRp2 == 480){
        rs_cdRp2= 0;
        rs_delayRp2 =0;
    }

    return
}








function p1RS(){
    Q_col(p1Q,enemy);
    E_colp1(p1E1,p1E2) // one collision for each
    R_colp1(enemy,p1R)

}


 function p2RS(){
    Q_col(p2Q,player)
    E_colp2(p2E1,p2E2)
    R_colp2(player,p2R)
 }




