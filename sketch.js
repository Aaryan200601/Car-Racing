var database;
var backIMG, form, player, game, allPlayers;
var cars, car1, car2, car3, car4;
var END = 0;
var distance = 0;
var GameState = 0;
var playercount = 0;

function preload()
{
    track = loadImage("images/track.jpg");
    car1image = loadImage("images/car1.png");
    car2image = loadImage("images/car2.png");
    car3image = loadImage("images/car3.png");
    car4image = loadImage("images/car4.png");
    ground = loadImage("images/ground.png");
}

function setup(){
    database = firebase.database();
    createCanvas(displayWidth, displayHeight);
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    if(playercount == 4)
    {
        game.update(1);
    }

    if(GameState == 1)
    {
        clear();
        game.play();
    }

    if(GameState == 2)
    {
        game.end();
    }
}
