(function (window, mapster) {

    // map options
    var options = mapster.MAP_OPTIONS,
    // initializing new google map
    element = document.getElementById('map'),
    map = mapster.create(element, options);
    // adding new marker with black knight's logo
    var marker = map.addMarker({
        lat:43.653379, 
        lng: -79.466708,
        icon: 'img/icon.png',
        content: '<div style="color:#831522;width:100px;height:50px;">1938 Bloor St W, Toronto</div>'
    });
// second marker for downtonw location
    var marker1 = map.addMarker({
        lat: 43.648348,
        lng: -79.387850,
        icon: 'img/icon.png',
        content: '<div style="color:#831522;width:100px;height:50px;">218 Adelaide St W, Toronto</div>'
    });
// third marker for Markham location
    var marker2 = map.addMarker({
        lat: 43.849193,
        lng: -79.350941,
        icon: 'img/icon.png',
        content: '<div style="color:#831522;width:100px;height:60px;">11 Fairburn Dr, Unit 26, Markham</div>'
    });

    var bloor = document.getElementById('bloor');
    var downtown = document.getElementById('downtown');
    var markham = document.getElementById('markham');
//when user clicks on marker address pops up on top 
    bloor.onclick = function () {
        window.open("https://www.google.ca/maps/dir/''/1938+Bloor+St+W,+Toronto,+ON+M6P+4J2/@43.6533785,-79.4688539,17z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x882b34296d1ce1fd:0xb419aae344bb915c!2m2!1d-79.4667081!2d43.6533785", "_blank");
    }

    downtown.onclick = function () {
        window.open("https://www.google.ca/maps/dir/''/218+Adelaide+St+W,+Toronto,+ON+M5H+1W7/@43.6485412,-79.3899133,17z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x882b34d1b8acd78d:0x14b9a23aae902487!2m2!1d-79.3877675!2d43.6485412", "_blank");
    }

    markham.onclick = function () {
        window.open("https://www.google.ca/maps/dir//Yummy+Pho,+11+Fairburn+Dr+%2316,+Markham,+ON+L6G+0A4/@43.847794,-79.348498,19z/data=!4m12!1m3!3m2!1s0x89d4d4eda51de773:0xcea51fb3ca4fbc67!2sYummy+Pho!4m7!1m0!1m5!1m1!1s0x89d4d4eda51de773:0xcea51fb3ca4fbc67!2m2!1d-79.348498!2d43.847794", "_blank");
    }
   


}(window, window.Mapster));

