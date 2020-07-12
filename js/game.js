class Game
{
    constructor()
    {

    }

    getState()
    {
        var GameStateRef =database.ref('GameState');
        GameStateRef.on("value", function(data){
            GameState = data.val();
        });
    }

    update(state)   
    {
        database.ref('/').update({
            GameState:state
        });
    }

    async start()
    {
        if(GameState == 0)
        {
            player = new Player();
            var playercountref = await database.ref('playercount').once("value");
            if (playercountref.exists())
            {
                playercount = playercountref.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
    car1 = createSprite(100, 200);
    car1.addImage("car1", car1image);

    car2 = createSprite(300, 200);
    car2.addImage("car2", car2image);

    car3 = createSprite(500, 200);
    car3.addImage("car3", car3image);

    car4 = createSprite(700, 200);
    car4.addImage("car4", car4image);

    cars = [car1, car2, car3, car4];
    }

    

    play()
    {
        form.hide();
        textSize(30);
        text("Game Start!!", displayWidth/2,  displayHeight/4);
        Player.getPlayerInfo();
        player.getEnd();

        if(allPlayers != undefined)
        {
            background(255);
            image(track, 0, -displayHeight*4, displayWidth, displayHeight*5);
            var index = 0;
            var x = 175;
            var y;
            for(var plr in allPlayers)
            {
                index = index+1;
                x = x+200;
                y = displayHeight-allPlayers[plr].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;
                if(index == player.index)
                {
                    stroke(20);
                    fill("yellow");
                    ellipse(x, y, 60, 60);
                    cars[index-1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                }

            }
        }

        if(keyIsDown(UP_ARROW) && player.index != null)
        {
            player.distance+=50;
            player.update();
        }   

        if(player.distance > 4000)
        {
            GameState = 2;
            player.rank+=1;
            Player.updatecarsEnd(player.rank);
        }
        drawSprites();
    }

    end()
    {
        console.log("gameEnded");
        console.log(player.rank);
    }

}