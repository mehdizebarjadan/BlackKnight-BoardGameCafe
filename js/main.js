
//Veronika Orlova
window.onload = gonow;
function gonow(){
    //create array for games to change
    var wordsgames = ["monopoly", "catan", "uno","jenga","chess","risk","checkers","scrabble","clue","snakes & ladders","backgammon","battleship","pictionary","cranium"];
    var gametimer;
    // create timer to change games every 2 seconds
    setInterval(function () {
    var rnumber = Math.floor(Math.random() * 14)+1;
    document.getElementById("game").innerHTML=wordsgames[rnumber-1];
    }, 2000);
    
}
jQuery(document).ready(function(){
// create array to give compliments on the click of the button
var compliments = ["You are a genius!", "Your hair looks awesome today!", "You are amazing!","You are a tiger in the world full of ladybugs!","You are like sunshine on a rainy day!","You are the coolest person I know!"];
//function which randomly picks compliments and shows them to the user on the click of the button
$('#clickme').click(function(){
  var rcompliment = Math.floor(Math.random() * 6)+1;
  $('#compliment').html(compliments[rcompliment-1]);
});

});
