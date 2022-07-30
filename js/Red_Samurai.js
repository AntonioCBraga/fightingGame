
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
            imgSrc: sideRope,
            scale:1,
            framesMax: 8,
            framesHold: 16,
            width:45,
            height:25,
           
        }))
}

//E_col(fighterRival,fighter, arr , pmove,pRstunned)
function E_col(fighterRival,arr,getRope){
    arr.forEach((rope,index ) =>{
        if(rope.position.x + rope.width >= 1024 || rope.position.x + rope.width <= 0  ){
            
            arr.splice(index,1)
           
        }//-------------------- adjust so it isnt only 1 pixel of the rope under.
        else if(collision(rope,fighterRival)){
            
            arr.splice(index,1);
            getRope =1 ;
            pRmove = 0;
        }
        else {
            
            console.log(rope)
            rope.update()
        }
    })
    // if(getRope != 0){ // i------------------------if gets hit by rope
        
    //     if(pmove == 0 && pRstunned == 0 ){
    //         fighterRival.velocity.x -= 4 * player1turn; 

    //         if((fighter.position.x + fighter.width + 20 <= fighterRival.position.x  && fighter.position.x + fighter.width + 25 >= fighterRival.position.x) || 
    //         (fighterRival.position.x + fighterRival.width + 20 <= fighter.position.x && fighterRival.position.x + fighterRival.width + 25 >= fighter.position.x)){
    //             pRstunned =1;
    //         }
    //     }
    //     else {
    //         getRope ++;
    //         fighterRival.velocity.x = 0;
    //         if (getRope == 30){
    //             getRope = 0;
    //             pmove =1 ;
    //             pstunned =0;
    //         }
    //     }
    // }
}
        
    





function p1RS(){
    Q_col(p1Q,enemy);
    E_col(enemy, p1E1,getRoped)
   // E_col()
}


 function p2RS(){
    Q_col(p2Q,player)
 }