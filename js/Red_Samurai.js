
//--------------------------------------------------------_RS = red samurai

let p1Q = []
let p2Q = []
function Q_col(arr,fighter){
    arr.forEach((projectile,index )=> {
        if(p1CharSelect == "redsamurai"){  
            if(projectile.position.x + projectile.radius >= 1024 || projectile.position.x + projectile.radius <= 0  ){
                

                arr.splice(index,1)
                
            }
            else if(projectile.position.y >= distance2Ground || projectile.position.y <=0){
                arr.splice(index,1)
                
            }
            else if(projectile.position.x + projectile.width >= fighter.position.x + 10 
                && projectile.position.x <= fighter.position.x + fighter.width
                    &&projectile.position.y + projectile.height >= fighter.position.y + 40
                    &&projectile.position.y <= fighter.position.y + fighter.height ){
                    console.log('hit!')
                    p1Q.splice(index,1)
                    
                    enemy.health -= 10;
                    document.querySelector('#enemyHealth').style.width = enemy.health +'%'
                }
            else{
                projectile.update();
            }
        }
    })
}


function rs_Q(fighter,playerTurn,arr){
    if(projectiles.length <3 ){
        console.log(playerTurn)
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
    )}
    if(projectiles.length <3 ){
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
    )}
    if(projectiles.length <3 ){
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
    )}
}
    




function p1RS(){
    Q_col(p1Q,enemy);
}


// function p2RS(){
//     Q_col()
// }