
//--------------------------------------------------------_RS = red samurai

let p1Q = []
let p2Q = []



//-----------------------------------------------------------------Ability Q






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

//-------------------------------------------------------------------------Abilti Rope
let p1E1 = []
let p1E2 = []
let p2E1 = []
let p2E2 = []
//

function rs_E(fighter,playerTurn,arr ,arr2){
    let distance = 0
    let distance2 = 0
    if(player1turn == 1){
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
                y:fighter.position.y  + 64 
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
                y:fighter.position.y + 74
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
            
            arr.splice(index,1);
            getRoped1 =1 ;
            p1stunned = 1;
            p2stunned =1;
            
       
        }
        else {
            
            if(arr2[0]!= undefined){
                arr2[0].update()
            }
            
            
            
            rope.update()

        
        
        }
    })

    if(getRoped1 != 0 ){ // i------------------------if gets hit by rope
        if(getRoped1 != 0 &&  getRoped2 !=0){
            console.log(arr2)
            arr2.splice(0,1);
            p1stunned = 0;
            p2stunned = 0;
            getRoped1 = 0
            return;
        }
        
        if(player1turn == 1){    
            
            if(enemy.position.x > player.position.x + player.width  && p2stunned == 1){
                enemy.velocity.x -= 4 * player1turn; 
                if(arr2[0]!= undefined){
                    arr2[0].deupdate()
                }
            }
            else if(p2stunned >= 1) {
                if(arr2[0] != undefined){
                    arr2.splice(0,1);
                }
                p2stunned ++;
                p1stunned = 0;
                if(p2stunned == 60){
                    p1stunned = 0;
                    p2stunned = 0;
                    getRoped1 = 0;    
                    if(arr2[0] != undefined){
                        arr2.splice(0,1);
                    }         
                }
            
            }
        }
        else if(player1turn == -1){
            if(enemy.position.x + enemy.width < player.position.x && p2stunned == 1){
                enemy.velocity.x -= 4 * player1turn; 
                
                if(arr2[0]!= undefined){
                    arr2[0].deupdate()
                }
                
            }
            else if(p2stunned >= 1){
                if(arr2[0] != undefined){
                    arr2.splice(0,1);
                }
                
                p2stunned ++;
                p1stunned = 0;
                if(p2stunned == 60){
                    p1stunned = 0;
                    p2stunned = 0;
                    getRoped1 = 0;   
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
            p2stunned =1;
            
       
        }
        else {
            
            if(arr2[0]!= undefined){
                arr2[0].update()
            }
            
            
            
            rope.update()

        
        
        }
    })

    if(getRoped2 != 0 ){ // i------------------------if gets hit by rope
        if(getRoped1 != 0 &&  getRoped2 !=0){
            arr2.splice(0,1);
            
            p1stunned = 0;
            p2stunned = 0;
            getRoped2 = 0;
            return;
        }
        if(player2turn == 1){    
            
            if(player.position.x > enemy.position.x + enemy.width && p1stunned == 1){
                player.velocity.x -= 4 * player2turn; 
                if(arr2[0]!= undefined){
                    arr2[0].deupdate()
                }
            }
            else if (p1stunned >= 1){
                if(arr2[0] != undefined){
                    arr2.splice(0,1);
                }
                
                p1stunned ++;
                p2stunned = 0;
                if(p1stunned == 60){
                    p1stunned = 0;
                    p2stunned = 0;
                    getRoped2 = 0;  
                    if(arr2[0] != undefined){
                        arr2.splice(0,1);
                    }      
                }
            
            }
        }
        else if(player2turn == -1){
            if(player.position.x + player.width < enemy.position.x && p1stunned == 1){
                player.velocity.x -= 4 * player2turn; 
                
                if(arr2[0]!= undefined){
                    arr2[0].deupdate()
                }
                
            }
            else if(p1stunned >= 1){
                if(arr2[0] != undefined){
                    arr2.splice(0,1);
                }
                
                p1stunned ++;
                p2stunned = 0;
                if(p1stunned == 60){
                    p1stunned = 0;
                    getRoped2 = 0;
                    p2stunned = 0;     
                    if(arr2[0] != undefined){
                        arr2.splice(0,1);
                    }        
                }
            }

        }

    }

}
  




function p1RS(){
    Q_col(p1Q,enemy);
    E_colp1(p1E1,p1E2) // one collision for each
   
}


 function p2RS(){
    Q_col(p2Q,player)
    E_colp2(p2E1,p2E2)
   
    
 }