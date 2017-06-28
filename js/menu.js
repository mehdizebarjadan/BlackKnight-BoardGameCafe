//veronika orlova
jQuery(document).ready(function(){
var urlpics = ["img/red.jpg","img/violet.jpg", "img/blue.jpg", "img/white.jpg", "img/orange.jpg"];
// 5 squares hovering over which will change the source of image to show the menu
$( "#desserts" ).hover(
  function() {
    $(this).attr('src','img/rdesserts.jpg');
  }, function() {
    $(this).attr('src','img/desserts.jpg');
  }
);
$( "#drinks" ).hover(
  function() {
    $(this).attr('src','img/rdrinks.jpg');
  }, function() {
    $(this).attr('src','img/drinks.jpg');
  }
);
$( "#salads" ).hover(
  function() {
    $(this).attr('src','img/rsalads.jpg');
  }, function() {
    $(this).attr('src','img/salads.jpg');
  }
);
$( "#snacks" ).hover(
  function() {
    $(this).attr('src','img/rsnacks.jpg');
  }, function() {
    $(this).attr('src','img/snacks.jpg');
  }
);
$( "#pizza" ).hover(
  function() {
    $(this).attr('src','img/rpizza.jpg');
  }, function() {
    $(this).attr('src','img/pizza.jpg');
  }
);
// on the click on white squares, change image to image of square of different color
$('.white').click(function(){
	var newnumb = Math.floor(Math.random() * 5)+1;
	$(this).attr('src',urlpics[newnumb-1]);
	console.log(newnumb);
});


});