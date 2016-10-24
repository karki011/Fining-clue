document.addEventListener("DOMContentLoaded", function() {

  var friends = ['Sunil', 'Nita', 'Bhuwan', 'Bhakta', 'Sam'];
  var locations = [
    "kitchen",
    "parking",
    "street",
    "classroom",
    "den",
    "door",
    "on table",
    "hallway",
    "desk",
    "stair"
  ];

  var weapons = [
    "pointed stick",
    "chuck-nuns",
    "cock rockets",
    "giant rock",
    "giant scissors",
    "banana",
    "bible",
    "banjo",
    "jump Rope",
    "toilet Lid",
    "frying Pan",
    "pickle",
    "belt",
    "dumbbell",
    "Stick",
    "shotgun",
    "whip",
    "flashlight",
    "Pen",
    "corkscrew"
  ];



  function addButton(num) {
    var btn = document.createElement('button');
    btn.innerHTML = ('Clue ' + [i]);
    btn.className = "button";

    var randomFriends = friends[Math.floor(Math.random() * friends.length)];
    var randomLocations = locations[Math.floor(Math.random() * locations.length)];
    var randomWeapons = weapons[Math.floor(Math.random() * weapons.length)];

    btn.onclick = function() {
      console.log('clicked');
      console.log(num);
        alert( btn.innerHTML +':' +' ' + randomFriends + " did it in the " + randomLocations + " with a " + randomWeapons + '.');
    };
    document.body.appendChild(btn);

  }
  for (var i = 1; i <= 100; i++) {
    addButton(i);
  }
});