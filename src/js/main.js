//grab and parse JSON data from file
var request = new XMLHttpRequest();
request.open("GET", "data/player-stats.json", false);
request.send(null);
var jsonPlayersObject = JSON.parse(request.responseText);
var playersObject = jsonPlayersObject.players;

var playerSelectBox = document.getElementById("player");

const matchDuration = 90;

for (var key in playersObject){
    if (playersObject.hasOwnProperty(key)) {
        var playerName = playersObject[key].player.name.first + ' ' +playersObject[key].player.name.last;
        populateSelectBox(key, playerName);
    }
}

function populateSelectBox(key, value)
{
    playerSelectBox.options[playerSelectBox.options.length] = new Option(value, key);
}

playerSelectBox.addEventListener('change',  populatePlayerData);


function populatePlayerData(){


    var playerObject = playersObject[this.value];

    document.getElementById("player_name").innerHTML = playerObject.player.name.first + ' ' + playerObject.player.name.last;
    document.getElementById("player_position").innerHTML = playerObject.player.info.positionInfo;
    document.getElementById("player_image").src = "assets/p" + playerObject.player.id + '.png';
    document.getElementsByClassName('badge')[0].id = playerObject.player.currentTeam.id;

    var playerStats = [];

    for(var key in playerObject.stats) {

        var playerStat = playerObject.stats[key];

        //Only update the html with data that has an index value that matches either, appearances, goals or goal_assist
        if(['appearances', 'goals', 'goal_assist'].indexOf(playerStat.name) > -1) {
            document.getElementById(playerStat.name).innerHTML = playerStat.value;
        }

        playerStats[playerStat.name] = playerStat.value;

    }
    playerStats.goals_per_match = (playerStats.goals / (playerStats.mins_played / matchDuration)).toFixed(2);
    playerStats.passes_per_minute = ((playerStats.fwd_pass + playerStats.backward_pass) / playerStats.mins_played).toFixed(2);

    document.getElementById('goals_per_match').innerHTML = playerStats.goals_per_match;
    document.getElementById('passes_per_minute').innerHTML = playerStats.passes_per_minute;

}
