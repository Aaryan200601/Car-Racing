class Form
{
    constructor()
    {
        this.input = createInput("Names");
        this.button = createButton('Play');
        this.resetButton = createButton('reset');
        this.Greet = createElement('h3');
        this.title = createElement('h1');
    }

    hide()
    {
        this.title.hide();
        this.input.hide();
        this.button.hide();
        this.Greet.hide();
    }

    display()
    {
        this.title.html("Stud Rider");
        this.title.position(displayWidth/2-100 , 100);       
        this.input.position(displayWidth/2-100, 175);
        this.button.position(displayWidth/2 + 30, 175);
        this.resetButton.position(displayWidth - 100, 175);
        this.button.mousePressed(()=>
        {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playercount+=  1;
            player.index = playercount;
            player.update();
            player.updateCount(playercount);
            this.Greet.html("Hello  " + player.name + ". Waiting for other Players...");
            this.Greet.position(displayWidth/2-200, displayHeight/2);
        });

        this.resetButton.mousePressed(() =>
        {
            game.update(0);
            player.updateCount(0);
            Player.updatecarsEnd(0);
        }
        )
    }
}
