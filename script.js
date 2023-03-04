clicked = false;
correctColor = "#43E027"
points=0;
FoundPokemon = [false,false,false,false,false,false,false,false,false];
function trackClick(event) {
    pkmonCanvas = document.getElementById("pokemonImage").getBoundingClientRect();
    Score = document.getElementById("Score");

    var x = Math.floor(event.clientX - pkmonCanvas.left);
    var y = Math.floor(event.clientY - pkmonCanvas.top);
    document.getElementById("coord").innerHTML = "Coordinates: " + "(" + x + ", " + y + ")";

    if(clicked){
        if(x > 302 && x < 354 && y < 54 && y > 4 && !FoundPokemon[0]){
            document.getElementById("pkmon1").style.color = correctColor; // EEVEE
            points+=1
            FoundPokemon[0] = true;
        }
        if(x > 67 && x < 107 && y < 705 && y > 652 && !FoundPokemon[1]){  //PIKACHU
            document.getElementById("pkmon2").style.color = correctColor;
            points+=1
            FoundPokemon[1] = true;
        }
        if(x > 680 && x < 754 && y < 416 && y > 35 && !FoundPokemon[2]){ //Snorlax
            document.getElementById("pkmon3").style.color = correctColor;
            points+=1
            FoundPokemon[2] = true;
        }
        if (x > 260 && x < 307 && y < 590 && y > 545 && !FoundPokemon[3]){
            document.getElementById("pkmon4").style.color = correctColor;  //Gengar
            points+=1
            FoundPokemon[3] = true;
        }
        if(x > 564 && x < 600 && y < 265 && y > 201 && !FoundPokemon[4]){ // Mr. Mime
            document.getElementById("pkmon5").style.color = correctColor;
            points+=1
            FoundPokemon[4] = true;
        }
        if(x > 416 && x < 454 && y < 242 && y > 194 && !FoundPokemon[5]){
            document.getElementById("pkmon6").style.color = correctColor;  //Vaporeon
            points+=1
            FoundPokemon[5] = true;
        }
        if (x > 523 && x < 549 && y < 514 && y > 478 && !FoundPokemon[6]){  //Slugma
            document.getElementById("pkmon7").style.color = correctColor;
            points+=1
            FoundPokemon[6] = true;
        }
        if(x > 191 && x < 212 && y < 222 && y > 191 && !FoundPokemon[7]){
            document.getElementById("pkmon8").style.color = correctColor; //IgglyBuff
            points+=1
            FoundPokemon[7] = true;
        }
        if(x > 872 && x < 889 && y < 183 && y > 148 && !FoundPokemon[8]){ // Bonsly
            document.getElementById("pkmon9").style.color = correctColor;
            points+=1
            FoundPokemon[8] = true;
        }
    }

    Score.innerHTML=("Score: " + points + "/ 9" )
    clicked = false;
}
function clearstuff() {
    document.getElementById("coord").innerHTML = "Coordinates:";
}