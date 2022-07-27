
//-----------------------------Default Map

// ground = canvas.height - 95


const DefaultMap = new Sprite({
    position:{
        x:0,
        y:0
    },
    imgSrc: './img/Maps/Default/background.png'
})


const shop = new Sprite({
    position:{
        x:600,
        y:130
    },
    imgSrc: './img/Maps/Default/shop.png',
    scale:2.75,
    framesMax: 6
})

//---------------------------

//---------------------------Less loved Map

//-- 380

const LesslovedMap = new Sprite({
    position:{
        x:0,
        y:0
    },
    imgSrc: './img/Maps/LessLoved/mapLessLoved.png'
})

//-------------------------------- Stars



const Stars = new Sprite({
    position:{
        x:0,
        y:0
    },
    imgSrc: './img/Maps/Stars/mapStars.png'
})




//----------------------------- Waterfall

const Waterfall = new Sprite({
    position:{
        x:0,
        y:0
    },
    imgSrc: './img/Maps/Waterfall/mapWaterfall.png'
})