// Character Object
var characters = {
    "Lord Voldemort": {
        "Health Points": 180,
        "Attack Power": 20,
    },
    "Hermione Granger": {
        "Health Points": 100,
        "Attack Power": 15,
    },
    "Sirius Black": {
        "Health Points": 120,
        "Attack Power": 18,
    },
    "Bellatrix Lestrange": {
        "Health Points": 160,
        "Attack Power": 25,
        "Counter Attack Power": 0
    },
    "Base Attack Power": 6
};
// dragging values out of object properties
var voldemort = $("#voldemort");
var voldemortHp = $("#hp1");
voldemortHp.text(characters["Lord Voldemort"]["Health Points"]);

var hermione = $("#hermione");
var hermioneHp = $("#hp2");
hermioneHp.text(characters["Hermione Granger"]["Health Points"]);

var sirius = $("#sirius");
var siriusHp = $("#hp3");
siriusHp.text(characters["Sirius Black"]["Health Points"]);

var bellatrix = $("#belatrix");
var bellatrixHp = $("#hp4");
bellatrixHp.text(characters["Bellatrix Lestrange"]["Health Points"]);

var isClicked = false;
var pickedCharacter = false;
var pickedDefender = false;
var character
var defender

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

$(document).ready(function(){

// Picking User Character
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
        console.log(myCharacterName);
        myCharacterHpHolder = $(".myCharacter > span");
        myDefenderName = $(".myDefender > p").text();
        console.log(myDefenderName);
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
            defenderAttack = characters[myDefenderName]["Attack Power"];
            console.log(myHp);
            myHp -= defenderAttack; //defender attacks player
            myCharacterHpHolder.text(myHp);
            defenderHp -= myAttack; //player attacks defender
            myDefenderHpHolder.text(defenderHp);
            $("#attackInfo").text("You attacked " + myDefenderName + " for " + myAttack + " damage. " + myDefenderName + " attacked you back for " + defenderAttack + " damage.");
            myAttack += 6;
            characters[myCharacterName]["Attack Power"] = myAttack; //changing property's value, so we can keep increase Attack Power with each click;
            


            // console.log(myHp);
            // console.log(myAttack);
            // console.log(myGrowPower);
            // console.log(defenderHp);
            // console.log(defenderAttack);


        }

    }); //closes button function


}); //closes document ready 

