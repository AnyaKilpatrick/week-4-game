//Global Variables
var myCharacterName
var myCharacterHpHolder
var myDefenderName
var myDefenderHpHolder
var myHp
var defenderHp
var myAttack
var myGrowPower
var defenderAttack
var myGrowPower
var character
var defender
var isClicked = false;
var pickedCharacter = false;
var pickedDefender = false;
// Character Object
var characters = {
    "Lord Voldemort": {
        "Health Points": 180,
        "Attack Power": 20,
        "Counter Attack Power":19,
        "Base Attack Power":4
    },
    "Hermione Granger": {
        "Health Points": 100,
        "Attack Power": 15,
        "Counter Attack Power":13,
        "Base Attack Power":7
    },
    "Sirius Black": {
        "Health Points": 120,
        "Attack Power": 18,
        "Counter Attack Power":15,
        "Base Attack Power":6
    },
    "Bellatrix Lestrange": {
        "Health Points": 160,
        "Attack Power": 25,
        "Counter Attack Power":17,
        "Base Attack Power":2
    },
    enemies: 3 //there always will be 3 enemies out of 4 characters
};
// dragging values out of object properties to display them on the page
var voldemortHp = $("#hp1");
voldemortHp.text(characters["Lord Voldemort"]["Health Points"]);

var hermioneHp = $("#hp2");
hermioneHp.text(characters["Hermione Granger"]["Health Points"]);

var siriusHp = $("#hp3");
siriusHp.text(characters["Sirius Black"]["Health Points"]);

var bellatrixHp = $("#hp4");
bellatrixHp.text(characters["Bellatrix Lestrange"]["Health Points"]);


$(document).ready(function(){

    $(".character").on("click", function (){


        // Picking a Character
        if (pickedCharacter === false) {
            character = $(this); //grabbing a clicked div

            character.remove(); //remove it from original location
            pickedCharacter = true; //set var pickedCharacter to "true"
            character.removeClass("character").addClass("myCharacter"); //changing class name for our picked character
            

            $("#pickedUser").append(character); // insert removed div to "You Character" div
            $(".character").removeClass("character").addClass("defender"); //changing class name of left divs, so we can treat them differently later and set different style
            $("#pick").text("Pick Your Defender");    
        }
        // Picking a defender
        $(".defender").on("click", function () {
            if (pickedCharacter ===true && pickedDefender === false) {
                defender = $(this);
    
                defender.remove();
                pickedDefender = true;
                defender.removeClass("defender").addClass("myDefender");       
    
                $("#pickedDefender").append(defender);

            }
        }); //closes defender picking function
    }); // closes character picking function
    $("button").on("click", function (){
        myCharacterName =  $(".myCharacter > p").text();
        myCharacterHpHolder = $(".myCharacter > span");
        myDefenderName = $(".myDefender > p").text();
        myDefenderHpHolder = $(".myDefender > span");

        if (pickedCharacter === false && pickedDefender === false){
            alert("You need to pick your character and defender!");
        }
        else if (pickedCharacter === true && pickedDefender === false) {
            alert("You need to pick your defender!");
        }
        else if (pickedCharacter === true && pickedDefender === true) {
            myHp = parseInt(myCharacterHpHolder.text()); //dragging player's hp number from the string
            myAttack = characters[myCharacterName]["Attack Power"];
            defenderHp = parseInt(myDefenderHpHolder.text()); //dragging defender's hp number from the string
            defenderAttack = characters[myDefenderName]["Counter Attack Power"];

            myHp -= defenderAttack; //defender attacks player
            myCharacterHpHolder.text(myHp);
            defenderHp -= myAttack; //player attacks defender
            myDefenderHpHolder.text(defenderHp);
            $("#attackInfo").text("You attacked " + myDefenderName + " for " + myAttack + " damage. " + myDefenderName + " attacked you back for " + defenderAttack + " damage.");
            myAttack += characters[myCharacterName]["Base Attack Power"];
            characters[myCharacterName]["Attack Power"] = myAttack; 
            //changing property's value, so we can keep increase Attack Power by Base Attack Power with each click;
            if ( myCharacterHpHolder.text() <= 0) { //if my HP falls below 0
                $("#attackInfo").text("You've been defeated...GAME OVER!");
                var resetBtn = $("<button>");
                resetBtn.addClass("btn btn-secondary");
                resetBtn.text("Restart");
                $("#restart").append(resetBtn);
                $("#attackBtn").remove(); // removing attack button
                $(resetBtn).on("click", function() {
                    location.reload();
                })
            }

            else if (characters.enemies > 0 && myDefenderHpHolder.text() <=0) { // if defender's HP falls below 0
                $("#attackInfo").text("You've defeated this enemy...You can choose to fight another enemy!");
                $(".myDefender").remove();
                var enemiesLeft = characters.enemies - 1;
                characters.enemies = enemiesLeft;
                console.log("Enemies left: " + characters.enemies);
                if (characters.enemies === 0) {
                    $("#attackInfo").text("YOU WIN!!!");
                    var resetBtn = $("<button>");
                    resetBtn.addClass("btn btn-secondary");
                    resetBtn.text("Restart");
                    $("#restart").append(resetBtn);
                    $("#attackBtn").remove(); // removing attack button
                    $(resetBtn).on("click", function() {
                        location.reload();
                    })
                }
                pickedDefender = false;
            }


        }
    }); //closes button function
}); //closes document ready 


