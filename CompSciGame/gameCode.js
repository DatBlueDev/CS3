var moveDisplacement = 90;
var HoldingButton = false;
var buttonHeld;
var div = document.getElementById("playerCharacter");
var gameGrid = document.getElementById("gameGrid");
var initHoriz = +div.offsetLeft;
var initVertic = +div.offsetTop;

var bullet = document.getElementById("bullet1");

var bulletSpawnLocations = [[5, 5] [45, 5], [45, 5], [45, 45]];
gameGrid.style.left = initHoriz + "px";
gameGrid.style.top = initVertic + "px"; 
$(document).keydown(function(event) {
    var key = (event.keyCode ? event.keyCode : event.which);
    console.log(key);
    if (key === 65){ // A
        var div = document.getElementById("playerCharacter");
        div.style.top = initVertic + "px";
        div.style.left = initHoriz - moveDisplacement  + "px"

    }
    
    if (key === 68){ // D
        var div = document.getElementById("playerCharacter");
        div.style.top = initVertic + "px";
        div.style.left = initHoriz + moveDisplacement  + "px"
    }
    
    if (key === 87){ // W
        var div = document.getElementById("playerCharacter");
        div.style.left = initHoriz + "px";
        div.style.top =initVertic - moveDisplacement  + "px"
        console.log("w");
    }
    
    if (key === 88){ // X
        var div = document.getElementById("playerCharacter");
        div.style.left = initHoriz + "px";

        div.style.top = initVertic+ moveDisplacement  + "px"
    }

    if (key === 81){ // Q
        var div = document.getElementById("playerCharacter");
        div.style.left = initHoriz - moveDisplacement  + "px"
        div.style.top = initVertic-moveDisplacement  + "px"
        console.log("q");

    }

    if (key === 69){ // E
        var div = document.getElementById("playerCharacter");
        div.style.left = initHoriz + moveDisplacement  + "px"
        div.style.top = initVertic -moveDisplacement  + "px"
    }
    
    if (key === 90){ // Z
        var div = document.getElementById("playerCharacter");
        div.style.left = initHoriz - moveDisplacement  + "px"
        div.style.top =initVertic +moveDisplacement  + "px"   
            }
    
    if (key === 67){ // C
        var div = document.getElementById("playerCharacter");
        div.style.left = initHoriz + moveDisplacement  + "px"
        div.style.top = initVertic +moveDisplacement  + "px"   
    }
    HoldingButton = true;
    buttonHeld = key;

}
    
);
$(document).keyup(function(event) {
    var key = (event.keyCode ? event.keyCode : event.which);

    var div = document.getElementById("playerCharacter");

    div.style.left = initHoriz + "px";
    div.style.top = initVertic + "px";


}
);

setInterval(moveBullet,10);
    
function moveBullet(){
    bullet.style.left = bullet.offsetLeft + 5  + "px";

}

function spawnBullet(){
    
}
