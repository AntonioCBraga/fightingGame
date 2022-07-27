
let ingame = 0; //change controlls from character select to fighting. to be updated




let p1CharSelect = "redsamurai"
let p2CharSelect = "redsamurai"

let mapChoice = 3 //change it to change map
let mapGameEnd = 0 //at game end changes to zero and allows to re-do map physics


let distance2Ground = 0; // to reset double jump
let playerMinHeight = 0;
let mapChecker = 0;

//-------------------------------------------------Variables-------------------------------------------//


let timer = 60; // game timer
let timerID  

let counterdjp1 = 0;   //doublejump player1 counter and may help with stun
let counterdjp2 = 0;   //doublejump player2 counter and may help with stun

let player1turn = 1;  // var [-1 || 1] that tells what side to shoot projectile

let pl1WalkR= 1; //allows player1 to walk to the right for player collision if needed
let pl1WalkL =1;  // allows player1 to walk to the left for player collision if needed

let p1gotHit = 0;     //tells if p1 got hit recently and makes him unvunerable for short duration
let p1gotHitHard = 0; //tells if p1 got hit recently and makes him unvunerable for longer duration

let p2gotHit = 0;   //tells if p2 got hit recently and makes him unvunerable for short duration
let p2gotHitHard= 0;//tells if p2 got hit recently and makes him unvunerable for longer duration

let pl2WalkR =1;// allows player2 to walk to the right
let pl2WalkL =1;// allows player2 to walk to the left

let unvp1 = 1; // attacks that make you unv
let unvp2 = 2; // attacks that make you unv

let p1move =1;  //tells when player can and cant move
let p2move =1;  //tells when player can and cant move

let p1stunned =0; //Tells if player1 is stunned
let p2stunned =0; //Tells if player2 is stunned

let getRoped = 0;//get hit by rope attack
let getRoped2 =0;// get hit by rope p2

const gravity = 0.5; // gravity...



