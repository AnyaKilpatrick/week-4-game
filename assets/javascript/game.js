// Global Variables
// var myCharacter
// var myImage
// var myBody
// var myName
// var myHp
// var defender
// var defImage
// var defBody
// var defName
// var defHp

// Character Object
var characters = {
    "Lord Voldemort": {
        "Health Points": 180,
        "Attack Power": 20,
        "Counter Attack Power": 0
    },
    "Hermione Granger": {
        "Health Points": 100,
        "Attack Power": 15,
        "Counter Attack Power": 0
    },
    "Sirius Black": {
        "Health Points": 120,
        "Attack Power": 18,
        "Counter Attack Power": 0
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
                console.log(pickedDefender);              
    
                $("#pickedDefender").append(defender);
            }
        }); //closes defender picking function
    }); // closes character picking function
        


}); //closes document ready 

