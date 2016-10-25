var request = new XMLHttpRequest();
request.open("GET", "data/player-stats.json", false);
request.send(null);
var jsonPlayersObject = JSON.parse(request.responseText);
var playersObject = jsonPlayersObject.players;

for (var key in playersObject){
    if (playersObject.hasOwnProperty(key)) {
        var playerName = playersObject[key].player.name.first + ' ' +playersObject[key].player.name.last

        populateSelectBox('player', key, playerName);
    }
}


function populateSelectBox(selector, key, value)
{
    var select = document.getElementById(selector);
        select.options[select.options.length] = new Option(value, key);
}
