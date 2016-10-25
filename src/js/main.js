var request = new XMLHttpRequest();
request.open("GET", "data/player-stats.json", false);
request.send(null);
var jsonPlayersObject = JSON.parse(request.responseText);
var playersObject = jsonPlayersObject.players;

var namesArray = [];

for (var key in playersObject){
    if (playersObject.hasOwnProperty(key)) {
        console.log(playersObject[key]);
        namesArray.push(playersObject[key].player.name)
    }
}
