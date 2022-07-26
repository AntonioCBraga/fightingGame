//-----------------------------------------P1 red_Samurai

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
    imgSrc: './img/Red_Samurai/Sprites/animationsR/idle.png',
    scale:2.05,
    framesMax: 4,
    offset:{
        x:190,
        y:115
    },
    sprites:{
        idleR:{
            imgSrc: './img/Red_Samurai/Sprites/animationsR/idle.png',
            framesMax:4
        },
        idleL:{
            imgSrc: './img/Red_Samurai/Sprites/animationsL/idleL.png',
            framesMax:4
        },
        runR:{
            imgSrc: './img/Red_Samurai/Sprites/animationsR/runForw.png',
            framesMax:8
        },
        runL:{
            imgSrc: './img/Red_Samurai/Sprites/animationsL/runForwL.png',
            framesMax:8
        },

        jumpR:{
            imgSrc: './img/Red_Samurai/Sprites/animationsR/jump.png',
            framesMax:2
        },
        jumpL:{
            imgSrc: './img/Red_Samurai/Sprites/animationsL/jumpL.png',
            framesMax:2
        },
        fallR:{
            imgSrc: './img/Red_Samurai/Sprites/animationsR/fall.png',
            framesMax:2
        },
        fallL:{
            imgSrc: './img/Red_Samurai/Sprites/animationsL/fallL.png',
            framesMax:2
        },
        attackR:{
            imgSrc: './img/Red_Samurai/Sprites/animationsR/attack.png',
            framesMax:4
        },   
        attackL:{
            imgSrc: './img/Red_Samurai/Sprites/animationsL/attackL.png',
            framesMax:4
        },
        abilityQR :{
            imgSrc: './img/Red_Samurai/Sprites/abilityQ/throww.png',
            framesMax:3
        },
        abilityQL :{
            imgSrc: './img/Red_Samurai/Sprites/abilityQ/throwwL.png',
            framesMax:3
        }
    }
})


//------------------------P2_redSamurai
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
    pl:2,
    imgSrc: './img/Red_Samurai/Sprites/animationsL/idleL.png',
    scale:2.05,
    framesMax: 4,
    offset:{
        x:190,
        y:115
    },
    sprites:{
        idleR:{
            imgSrc: './img/Red_Samurai/Sprites/animationsR/idle.png',
            framesMax:4
        },
        idleL:{
            imgSrc: './img/Red_Samurai/Sprites/animationsL/idleL.png',
            framesMax:4
        },
        runR:{
            imgSrc: './img/Red_Samurai/Sprites/animationsR/runForw.png',
            framesMax:8
        },
        runL:{
            imgSrc: './img/Red_Samurai/Sprites/animationsL/runForwL.png',
            framesMax:8
        },

        jumpR:{
            imgSrc: './img/Red_Samurai/Sprites/animationsR/jump.png',
            framesMax:2
        },
        jumpL:{
            imgSrc: './img/Red_Samurai/Sprites/animationsL/jumpL.png',
            framesMax:2
        },
        fallR:{
            imgSrc: './img/Red_Samurai/Sprites/animationsR/fall.png',
            framesMax:2
        },
        fallL:{
            imgSrc: './img/Red_Samurai/Sprites/animationsL/fallL.png',
            framesMax:2
        },
        attackR:{
            imgSrc: './img/Red_Samurai/Sprites/animationsR/attack.png',
            framesMax:4
        },   
        attackL:{
            imgSrc: './img/Red_Samurai/Sprites/animationsL/attackL.png',
            framesMax:4
        },
        abilityQR :{
            imgSrc: './img/Red_Samurai/Sprites/abilityQ/throww.png',
            framesMax:3
        },
        abilityQL :{
            imgSrc: './img/Red_Samurai/Sprites/abilityQ/throwwL.png',
            framesMax:3
        }
    }
})


