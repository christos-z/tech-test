var request = new XMLHttpRequest();
request.open("GET", "data/player-stats.json", false);
request.send(null);
var jsonPlayersObject = JSON.parse(request.responseText);
var playersObject = jsonPlayersObject.players;

var playerSelectBox = document.getElementById("player");

for (var key in playersObject){
    if (playersObject.hasOwnProperty(key)) {
        var playerName = playersObject[key].player.name.first + ' ' +playersObject[key].player.name.last

        populateSelectBox(key, playerName);
    }
}

function populateSelectBox(key, value)
{
    playerSelectBox.options[playerSelectBox.options.length] = new Option(value, key);
}

playerSelectBox.addEventListener('change',  populatePlayerData);

function populatePlayerData(){
    console.log(playersObject[this.value]);
}
