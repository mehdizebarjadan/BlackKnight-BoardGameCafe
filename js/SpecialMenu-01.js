window.onload = pageReady;

function pageReady(){
	var bigImage = document.getElementById("mainImg");

	var image1 = document.getElementById("pic1");
	var image2 = document.getElementById("pic2");
	var image3 = document.getElementById("pic3");
	var image4 = document.getElementById("pic4");
	var image5 = document.getElementById("pic5");
	var image6 = document.getElementById("pic6");
	
	image1.onmouseover = switchPic;
	image2.onmouseover = switchPic;
	image3.onmouseover = switchPic;
	image4.onmouseover = switchPic;
	image5.onmouseover = switchPic;
	image6.onmouseover = switchPic;
	
	image1.onmouseout = switchMain;
	image2.onmouseout = switchMain;
	image3.onmouseout = switchMain;
	image4.onmouseout = switchMain;
	image5.onmouseout = switchMain;
	image6.onmouseout = switchMain;
	
	function switchPic(){
		bigImage.src = this.src;
	}
	function switchMain(){
		bigImage.src = "img/food1.jpg";
	}
	
	
	
	$( "#menu" ).dialog({
		autoOpen: false,
		show: {
			effect: "clip",
			duration: 300
		},
		hide: {
			effect: "puff",
			duration: 300
		},
		buttons: {
			Order: function(){
				$( this ).dialog( "close" );
			}
		}
	});
	
}

function detailMenu(id){
	if(id==1){
		str="shrimp pat tie \n\n\n  ";
		$("#menuPAR").html(str);
	}else if(id==2) {
		str="shrimp";
		$("#menuPAR").html(str);
	}else if(id==3) {
		str="Food Description      \n       Shrimp Noodles with vegatable \n Lablablablab \n asdfasdfasdfdfasfa \n asdfasdfasdfadfasd \n shrimp jfasdfads \n asdfasdfasdfdfasfa \n asdfasdfasdfadfasd \n";
		$("#menuPAR").html(str);
	}else if(id==4) {
		str="Food Description      \n       Shrimp Noodles with vegatable \n Lablablablab \n asdfasdfasdfdfasfa \n asdfasdfasdfadfasd \n shrimp jfasdfads \n asdfasdfasdfdfasfa \n asdfasdfasdfadfasd \n";
		$("#menuPAR").html(str);
	}else if(id==5) {
		str="Food Description      \n       Shrimp Noodles with vegatable \n Lablablablab \n asdfasdfasdfdfasfa \n asdfasdfasdfadfasd \n shrimp jfasdfads \n asdfasdfasdfdfasfa \n asdfasdfasdfadfasd \n";
		$("#menuPAR").html(str);
	}else if(id==6) {
		str="Food Description      \n       Shrimp Noodles with vegatable \n Lablablablab \n asdfasdfasdfdfasfa \n asdfasdfasdfadfasd \n shrimp jfasdfads \n asdfasdfasdfdfasfa \n asdfasdfasdfadfasd \n";
		$("#menuPAR").html(str);
	}
	
	
	$("#menu").dialog( "open" );
}







