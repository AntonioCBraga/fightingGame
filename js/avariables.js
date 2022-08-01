
let ingame = 0; //change controlls from character select to fighting. to be updated

let p1CharSelect = "redsamurai"
let p2CharSelect = "redsamurai"

let mapChoice = 2 //change it to change map
let mapGameEnd = 0 //at game end changes to zero and allows to re-do map physics


let distance2Ground = 0; // to reset double jump
let playerMinHeight = 0;
let mapChecker = 0;


let timer = 60; // game timer
let timerID  
//---------------------------------------------Ability counters----------------------------------------//

let p1AAcounter= 0;//Auto attack p1 counter 
let p2AAcounter= 0;//Auto attack p2 counter

let sideRope //Siderope indicates wich side red_samurai E ability comes from 
let buggcounter = 0;



//-------------------------------------------------Variables-------------------------------------------//



let p1Animating = false; // tells if player1 is currently on attack animation | not implemented
let p2Animating = false; // tells if player2 is currently on attack animation | not implemented

let counterdjp1 = 0;   //doublejump player1 counter and may help with stun
let counterdjp2 = 0;   //doublejump player2 counter and may help with stun

let player1turn = 1;  // tells what side to turn abilities and animations
let player2turn = 1;  // tells what side to turn abilities and animations

let pl1WalkR= 1; //  for player collision . maybe later
let pl1WalkL =1;  // for player collision . maybe later

let pl2WalkR =1;// for player collision . maybe later
let pl2WalkL =1;// for player collision . maybe later

let p1gotHit = 0;     //for blood fx or coldown getting hit later
let p1gotHitHard = 0; //for blood fx or coldown getting hit later

let p2gotHit = 0;   //for blood fx or coldown getting hit later
let p2gotHitHard= 0;//for blood fx or coldown getting hit later


let unvp1 = 1; // attacks that make you unv | not implemented
let unvp2 = 2; // attacks that make you unv | not implemented

let p1move =1;  //tells when player can and cant move
let p2move =1;  //tells when player can and cant move

let p1stunned =0; //Tells if player1 is stunned
let p2stunned =0; //Tells if player2 is stunned

let p1AnimationStun = 0; // Self stun during animation 
let p2AnimationStun = 0; // Self stun during animation 


let getRoped1 = 0;//get hit by rope attack
let getRoped2 =0;// get hit by rope p2

const gravity = 0.5; // gravity...



