let opponentHealth = 200;
let myHealth = 200;
let myAttack = [10, 20, 30, 40];
let opponentAttack = [10, 20, 30, 40];

let pikachu_img, mewtwo_img, background_img;
function preload() {
   pikachu_img = loadImage('pikachu.png');
   mewtwo_img = loadImage('mewtwo.png');
   background_img = loadImage('background.jpg');
}

function setup() {
    createCanvas(600, 600);
}

function mouseClicked() {
    if(mouseX > 400 && mouseX < 480 && mouseY > 530 && mouseY <570) {
        opponentHealth = opponentHealth - myAttack[Math.floor(Math.random() * 4)];
    }
    if(mouseX > 500 && mouseX < 595 && mouseY > 515 && mouseY < 595){
        myHealth = myHealth - opponentAttack[Math.floor(Math.random() * 4)];
    }
}

function draw() {
    image(background_img, 0, 0);
    background_img.resize(600, 600);
    fill("white");
    rect(55, 40, 250, 80);
    fill("white");
    rect(275, 340, 250, 80);
    fill(0, 0, 0);
    textSize(14);
    text('Mewtwo', 80, 70);
    fill(0, 0, 0);
    textSize(14);
    text('Pikachu', 300, 370);
    fill(192, 192, 192); // selection box color
    rect(0, 500, 600, 100); // selection box shape
    fill(0, 0, 0);
    textSize(24);
    text('Choose your move', 30, 560);
    fill("white");
    rect(400, 530, 80, 40); // punch
    fill(0, 0, 0);
    textSize(14);
    text('punch', 420, 555);
    rect(500, 530, 80, 40); // end turn
    fill("white");
    textSize(14);
    text('End Turn', 515, 555);
    image(mewtwo_img, 380, 100);
    mewtwo_img.resize(200, 200);
    image(pikachu_img, 20, 262);
    pikachu_img.resize(270, 270);
    fill("red");
    rect(80, 80, opponentHealth, 10);
    fill("red");
    rect(300, 380, myHealth, 10);
    if(opponentHealth <= 0) {
        alert("Mewtwo fainted!");
        noLoop();
    }
    if(myHealth <= 0) {
        alert("Your pokemon fainted!");
        noLoop();
    }
}