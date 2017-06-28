(function (window, google, mapster) {
    //customized google maps options for Black Knight Locations
       mapster.MAP_OPTIONS = {
        center: {
            lat: 43.767846,
            lng: -79.387077
        },
        zoom: 11,
        disableDefaultUI: false,
        scrollwheel: true,
       
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM,
            style: google.maps.ZoomControlStyle.DEFAULT
        },
        panControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM
        },
        styles: [{ "stylers": [{ "hue": "#831522" }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "visibility": "on" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "lightness": 50 }, { "visibility": "simplified" }] }]
    };

}(window, google, window.Mapster || (window.Mapster = {})));
