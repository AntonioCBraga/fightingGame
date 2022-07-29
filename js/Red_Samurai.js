
//--------------------------------------------------------_RS = red samurai

let p1Q = []

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
                }
            else{
                projectile.update();
            }
        }
    })
}


let rs_cdQ_p1 = 0

function rs_p1Q(){
    if(projectiles.length <3 ){
        p1Q.push(new Sprite({
            position:{
                x:player.position.x + 20,
                y:player.position.y  + 54
            },
            velocity:{
                x:8 * player1turn,
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
        p1Q.push(new Sprite({
            position:{
                x:player.position.x + 20,
                y:player.position.y  + 50
            },
            velocity:{
                x:8 * player1turn,
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
        p1Q.push(new Sprite({
            position:{
                x:player.position.x + 20,
                y:player.position.y  + 50
            },
            velocity:{
                x:8 * player1turn,
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