// JavaScript Document

jQuery(document).ready(function () {
    //First game board and loose div would be hide and then after user click on image game board will be shown 
    $('#game').hide();   //game board is hide
    $('.panelContainer').hide();  //looser div would be hide
    $('img').click(function () { //after click on dark knight image game board is shown
        $('#startGame').hide(); //first header would be hide
        $('#game').show(2000);  // game board would be shown during 2 second
        $('.panelContainer').show(2000); // looser div would be shown during 2 second
       
    });



    var i = 0; 
    $('.LooseText').hide(); // all the message behinde the question mark would be hide .
    $('.contentBox').hide(); // looser messge would be hinde (message which shows after user loose the game)
    $('.row').click(function () { // after user click on each rectangle folowing instruction happend...
        if (i < 3) {  // we permit user just 3 times clicking 
            $(this).find(".LooseText").show(1000);  //Looser text behined question mark is shown
            $(this).find(".QMark").hide(); // then question mark would be hide
            i++;
            if (i === 3) { // check it after 3 clicks then
                $('.contentBox').delay(1000).slideToggle(8000); //losser message would be shown
                $('#game').delay(2000).hide(8000); //game board would be hidden
                return false;


            }
        }
        return false;
    });


});


