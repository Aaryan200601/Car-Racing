class Player
{
    constructor()
    {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.rank = null;
    }

    getCount()
    {
        var playercountref = database.ref('playercount');
        playercountref.on("value", function(data)
        {
            playercount = data.val();
        })
    }

    updateCount(count)
    {
        database.ref('/').update({
            playercount:count
        })
    }

    update()
    {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
    }

    static getPlayerInfo()
    {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data)=>{
        allPlayers = data.val();
        })
    }

    getEnd()
    {
        database.ref('END').on("value", (data)=>
        {
            this.rank = data.val();
        })
    }

    static updatecarsEnd(rank)
    {
        database.ref('/').update({
            END:rank
        });
    }
}